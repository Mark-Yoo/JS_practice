import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Todo[]>(this.apiUrl)
  }

  toggleTodo(contentId: number, checkComp: boolean) {
    return this.http.patch<Todo>(this.apiUrl+contentId, { "completed": !checkComp })
  }

  remove(contentId: number) {
    return this.http.delete<Todo[]>(this.apiUrl+contentId)
  }

  toggleAll(ifChecked: boolean) {
    return this.http.patch<Todo[]>(this.apiUrl, { completed: ifChecked })
  }

  clearAllComp() {
    return this.http.delete<Todo[]>(this.apiUrl+`completed`);
  }
}
