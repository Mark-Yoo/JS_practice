import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
   <input type="text" [(ngModel)]="content" (keyup.enter)="addTodo(input)" #input autofocus>
   <ul>
     <li *ngFor="let todo of todos" id="{{todo.id}}">
     <input type="checkbox" [checked]="todo.completed" (click)="checkTodo(todo.id, todo.completed)">
     {{todo.content}}
     <button class="modify" (click)="modifyTodo(todo.id)">E</button>
     <button class="remove" (click)="removeTodo(todo.id)">X</button>
     <input class="editInput" [class.active]="todo.id === inputActivate" type="text" value="{{todo.content}}" (keyup.enter)="modification(todo.id, newContent)" #newContent></li>
   </ul>
   <pre>{{ todos | json }}</pre>
  `,
  styles: [`
  .editInput {
    display: none;
  }

  .editInput.active {
    display: block;
  }
  `]
})
export class AppComponent implements OnInit {
  todos: Todo[];
  content: string;
  inputActivate: number;
  url = 'http://localhost:3000/todos/';

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.renderTodos()
      .subscribe(todos => this.todos = todos);
  }

  addTodo(content: HTMLInputElement) {
    if (!content.value) return;
    this.content = content.value;
    this.http.post<Todo>(this.url, { "content": content.value, "completed": false })
      .subscribe(todo => this.todos = [todo, ...this.todos]);
    content.value='';
  }

  checkTodo(contentid: number, contentCompleted: boolean) {
    this.http.patch<Todo>(this.url+contentid, { "completed": !contentCompleted})
      .subscribe(todo => this.todos = this.todos.map(item => item.id === todo.id ? {...todo, completed: !item.completed } : item));
  }

  modifyTodo(contentid: number) {
    this.inputActivate = contentid;
  }

  modification(contentid: number, newcontent: HTMLInputElement) {
    this.http.patch<Todo>(this.url+contentid, { "content": newcontent.value })
      .subscribe(todo => this.todos = this.todos.map(item => item.id === todo.id ? {...todo, content: todo.content } : item));
    this.inputActivate = 0;
  }

  removeTodo(contentid: number) {
    this.http.delete<Todo>(this.url+contentid)
      .subscribe(() => this.todos = this.todos.filter(item => item.id !== contentid));
  }

  private renderTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }
}
