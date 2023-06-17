import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl, headers } from '../constants';
import { Project } from 'src/app/interfaces/Project';
import { Board } from 'src/app/interfaces/Board';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  boards: Board[] | undefined

  constructor(private http: HttpClient) { }


  getProjects() {
    return this.http.get<Project>(`${baseUrl}/boards`, {
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('kanban_token')}`,
      }
    });
  }


  storeProject(body: Project | undefined) {
    return this.http.post(`${baseUrl}/boards/store`,
      body, {
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('kanban_token')}`,
      }
    });
  }


  addProject(board: Board) {
    this.boards?.push(board)
  }

}
