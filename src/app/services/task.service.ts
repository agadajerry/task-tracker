import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient, HttpHeaders}  from "@angular/common/http"
import { iTask } from '../Task';



const httpOptions = {
  Headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5000/tasks"
  constructor(private http:HttpClient) { }

   getTask(): Observable<iTask[]>{

    return this.http.get<iTask[]>(this.apiUrl)
  }

  deleteTasks(task:iTask):Observable<iTask>{

    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<iTask>(url);
  }

  updateTaskReminder(task:iTask):Observable<iTask>{

    const url = `${this.apiUrl}/${task.id}`;

    return this.http.put<iTask>(url, task)

  }
  addTask(task:iTask):Observable<iTask>{

    return this.http.post<iTask>(this.apiUrl,task);
  }
}
