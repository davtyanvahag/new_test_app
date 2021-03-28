import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  userId: number;
  showModal: boolean;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.showModal = false;
    this.usersService.getAll().subscribe(res => {
      this.users = res;
    });
  }

  delete(): any {
    this.usersService.delete(this.userId).subscribe(res => {
      this.users = this.users.filter(el => el.id !== this.userId);
      this.showModal = false;
    });
  }

}
