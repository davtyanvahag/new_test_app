import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }

  create(obj): any {
    return this.http.post(`${environment.apiUrl}/users`, obj, {headers: this.headers});
  }

  getAll(): any {
    return this.http.get(`${environment.apiUrl}/users`, {headers: this.headers});
  }

  getOne(id): any {
    return this.http.get(`${environment.apiUrl}/users/${id}`, {headers: this.headers});
  }

  update(id, obj): any {
    return this.http.patch(`${environment.apiUrl}/users/${id}`, obj,{headers: this.headers});
  }

  delete(id): any {
    return this.http.delete(`${environment.apiUrl}/users/${id}`, {headers: this.headers});
  }
}
