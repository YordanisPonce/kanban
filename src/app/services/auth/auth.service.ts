import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    return localStorage.getItem('kanban_token');
  }

  signIn() {
    localStorage['kanban_token'] = 'asdasdasd';
  }
}
