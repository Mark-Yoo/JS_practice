import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { environment } from '../../environments/environment';
import { Todo } from '../todo.interface';
import { navItem } from '../navitem.type';
import { HttpClient } from '@angular/common/http';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-container',
  template: `
    <div class="container" *ngIf="todos">
      <app-todo-form [todos]="todos" (add)="addTodo($event)"></app-todo-form>
      <app-todo-nav [navStatus]="navStatus" (changeNav)="switchNav($event)"></app-todo-nav>
      <app-todo-list [todos]="todos" [navStatus]="navStatus" (check)="checkTodo($event)" (remove)="removeTodo($event)"></app-todo-list>
      <app-todo-footer [todos]="todos" [completedNum]="completedTodos()" [leftNum]="leftTodos()" (allCheck)="checkAll($event)" (compClear)="clearComp()" ></app-todo-footer>
    </div>
    <pre>{{ todos | json }}</pre>
  `,
  styleUrls: ['./todo-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoContainerComponent implements OnInit {
  navStatus: navItem = 'All';
  apiUrl: string = environment.apiUrl;
  todos: Todo[];
  constructor(private http: HttpClient, private todosService: TodoService) { }

  ngOnInit() {
    this.todosService.getAll()
      .subscribe(todos => this.todos = todos);
  }

  addTodo(content: HTMLInputElement) {
    if (!content.value.trim()) return;
    this.http.post<Todo[]>(this.apiUrl, { "id": this.generateId(), "content": content.value, "completed": false })
      .subscribe(todos => this.todos = todos)
    content.value = '';
  }

  checkTodo(contentId: number, checkComp: boolean) {
    this.todosService.toggleTodo(contentId, checkComp)
      .subscribe(todo => this.todos = this.todos.map(item => item.id === contentId ? { ...item, completed: !item.completed } : item));
  }

  removeTodo(contentId: number) {
    this.todosService.remove(contentId)
      .subscribe(todos => this.todos = todos);
  }

  checkAll(ifChecked: boolean) {
    this.todosService.toggleAll(ifChecked)
      .subscribe(todos => this.todos = todos);
  }

  clearComp() {
    this.todosService.clearAllComp()
      .subscribe(todos => this.todos = todos);
    
  }

  switchNav(recentNavStatus: navItem) {
    this.navStatus = recentNavStatus;
  }

  completedTodos() {
    return this.todos.filter(todo => todo.completed).length;
  }

  leftTodos() {
    return this.todos.filter(todo => !todo.completed).length;
  }

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

}
