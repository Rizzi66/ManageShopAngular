import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:4000/api/';

  constructor(private http: HttpClient) {}

  logUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}login`, user);
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}createUser`, user);
  }
}
