import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { baseUrl, headers } from '../constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }

  isLoggedIn() {
    return localStorage['kanban_token'];
  }

  signIn(body: User) {
    return this.http.post(`${baseUrl}/user/login`, body, {
      headers
    });
  }

  redirectToLogin() {
    localStorage.clear();
    this.route.navigate(['login']);
  }

  signOut() {
   return this.http.post(`${baseUrl}/user/logout`, null, {
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('kanban_token')}`
      }
    });
  }
}
