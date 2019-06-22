import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Todo } from '../todo.interface';
import { navItem } from '../navitem.type';

@Component({
  selector: 'app-todo-container',
  template: `
    <div class="container">
      <app-todo-form [todos]="todos" (add)="addTodo($event)"></app-todo-form>
      <app-todo-nav [navStatus]="navStatus" (changeNav)="switchNav($event)"></app-todo-nav>
      <app-todo-list [todos]="todos" [navStatus]="navStatus" (check)="checkTodo($event)" (remove)="removeTodo($event)"></app-todo-list>
      <app-todo-footer [todos]="todos" [completedNum]="completedTodos()" [leftNum]="leftTodos()" (allCheck)="checkAll($event)" (compClear)="clearComp()" ></app-todo-footer>
    </div>
  `,
  styleUrls: ['./todo-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoContainerComponent implements OnInit {
  navStatus: navItem = 'All';
  todos: Todo[] = [
    { id: 1, content: 'html', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false },
  ]
  constructor() { }

  ngOnInit() {
  }

  addTodo(content: HTMLInputElement) {
    if (!content.value.trim()) return;
    this.todos = [...this.todos, { id: this.generateId(), content: content.value, completed: false }]
    content.value = '';
  }

  checkTodo(contentId: number) {
    this.todos = this.todos.map(todo => todo.id === contentId ? {...todo, completed: !todo.completed } : todo);
  }

  removeTodo(contentId: number) {
    this.todos = this.todos.filter(todo => todo.id !== contentId);
  }

  checkAll(ifChecked: boolean) {
    this.todos = this.todos.map(todo => ifChecked ? {...todo, completed: true} : {... todo, completed: false});
  }

  clearComp() {
    this.todos = this.todos.filter(todo => !todo.completed);
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
