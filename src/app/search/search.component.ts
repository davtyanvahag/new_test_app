import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: any;
  searchText: string;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getAll().subscribe((res: any) => {
      this.users = res;
    });
  }

  search(): any {
    this.searchService.search({text: this.searchText}).subscribe((res: any) => {
      this.users = res;
    });
  }
}
