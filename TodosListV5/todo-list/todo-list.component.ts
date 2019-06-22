import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../todo.interface';
import { navItem } from '../navitem.type';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul class="todos">
      <li *ngFor="let todo of (todos | todosfilter: navStatus)" id="{{todo.id}}" class="todo-item">
        <input class="custom-checkbox" type="checkbox" id="ck-{{todo.id}}" [checked]="todo.completed" (click)="check.emit(todo.id)">
        <label for="ck-{{todo.id}}">{{todo.content}}</label>
        <i class="remove-todo far fa-times-circle" (click)="remove.emit(todo.id)"></i>
      </li>
    </ul>
  `,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  @Input() navStatus: navItem;
  @Output() check = new EventEmitter();
  @Output() remove = new EventEmitter();

  navItems: navItem[] = ['All', 'Active', 'Completed'];

  constructor() { }

  ngOnInit() {
  }

}
