import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }

  getAll(): any {
    return this.http.get(`${environment.apiUrl}/`, {headers: this.headers});
  }
  search(obj): any {
    return this.http.post(`${environment.apiUrl}/`, obj, {headers: this.headers});
  }
}
