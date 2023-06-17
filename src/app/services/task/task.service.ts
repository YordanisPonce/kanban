import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl, headers } from '../constants';
import { Task } from 'src/app/interfaces/Task';
import { SuccessResponse } from 'src/app/interfaces/SuccessResponse';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    constructor(private http: HttpClient) { }
    getTasks(id: number) {
        return this.http.get<SuccessResponse>(`${baseUrl}/task/${id}`, {
            headers: {
                ...headers,
                Authorization: `Bearer ${localStorage.getItem('kanban_token')}`,
            }
        });
    }


    storeProject(task: Task) {
        return this.http.post(`${baseUrl}/task/store`, task, {
            headers: {
                ...headers,
                Authorization: `Bearer ${localStorage.getItem('kanban_token')}`,
            }
        })
    }

}
