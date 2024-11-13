import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask, TaskResponse } from '../models/ITask';
import { HttpClient } from '@angular/common/http';

const api = "https://dummyjson.com/todos";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient) { }

  GetAll() : Observable<TaskResponse> {
    return this.http.get<TaskResponse>(api);
  }
}
