import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { baseUrl, headers } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn() {
    return localStorage['kanban_token'];
  }

  signIn(body: User) {
    return this.http.post(`${baseUrl}/user/login`, body, {
      headers
    });
  }

  signOut() {
    localStorage.removeItem('kanban_token');
    location.reload();
  }
}
