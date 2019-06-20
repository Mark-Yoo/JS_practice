import { Component, Input } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todos',
  template: `
    <div class="container">
      <h1 class="title">Todos</h1>
      <div class="ver">2.0</div>
    
      <input class="input-todo" placeholder="What needs to be done?" (keyup.enter)="addTodo(input)" #input autofocus>
      <ul class="nav" (click)="changeTab($event.target.id)">
        <li id="all" [class.active]="navStatus === 'all'" class="active">All</li>
        <li id="active" [class.active]="navStatus === 'active'">Active</li>
        <li id="completed" [class.active]="navStatus === 'completed'">Completed</li>
      </ul>
    
      <ul class="todos">
        <li *ngFor="let todo of recentTodos" id="{{todo.id}}" class="todo-item">
          <input class="custom-checkbox" type="checkbox" id="ck-{{todo.id}}" [checked]="todo.completed" (click)="checkTodo(todo.id)">
          <label for="ck-{{todo.id}}">{{todo.content}}</label>
          <i class="remove-todo far fa-times-circle" (click)="removeTodo(todo.id)"></i>
        </li>
      </ul>
      <div class="footer">
        <div class="complete-all">
          <input class="custom-checkbox" type="checkbox" id="ck-complete-all" (click)="checkAll($event.target.checked)">
          <label for="ck-complete-all">Mark all as complete</label>
        </div>
        <div class="clear-completed">
          <button class="btn" (click)="clearComp()">Clear completed (<span class="completed-todos">{{completedTodos}}</span>)</button>
          <strong class="active-todos">{{leftTodos}}</strong> items left
        </div>
      </div>
    </div>
  `,
  styleUrls: [`./todos.component.css`]
})
export class TodosComponent {
  navStatus: string = 'all';

  todos: Todo[] = [
    { id: 1, content:"HTML", completed: false },
    { id: 2, content:"CSS", completed: true },
    { id: 3, content:"Javascript", completed: false }
  ];
  
  // add new Todo to todos array
  addTodo(content: HTMLInputElement) {
    if (!content.value.trim()) return;
    this.todos = [...this.todos, { id: this.generateId(), content: content.value, completed: false }]
    content.value = '';
  }

  // check and save recent status
  checkTodo(contentId: number) {
    this.todos = this.todos.map(todo => todo.id === contentId ? {...todo, completed: !todo.completed } : todo);
  }

  // remove todo from Todos
  removeTodo(contentId: number) {
    this.todos = this.todos.filter(todo => todo.id !== contentId);
  }

  // check all todo and save status
  checkAll(ifChecked: boolean) {
    this.todos = this.todos.map(todo => ifChecked ? {...todo, completed: true} : {... todo, completed: false});
  }

  // remove only completed todos
  clearComp() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  // nav in action
  changeTab(targetTab: string) {
    this.navStatus = targetTab;
  }

  // generate new id for todo
  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  // make copyed todos for nav
  get recentTodos() {
    if (this.navStatus === 'all') return this.todos;
    else if (this.navStatus === 'active') return this.todos.filter(todo => !todo.completed);
    else return this.todos.filter(todo => todo.completed);
  }

  get completedTodos() {
    return this.todos.filter(todo => todo.completed).length;
  }

  get leftTodos() {
    return this.todos.filter(todo => !todo.completed).length;
  }
}
