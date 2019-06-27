import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todo-form',
  template: `
    <h1 class="title">Todos</h1>
    <div class="ver">5.0</div>
  
    <input class="input-todo" placeholder="What needs to be done?" (keyup.enter)="addTodo(input)" #input autofocus>
  `,
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Input() todos: Todo[]
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addTodo(content: HTMLInputElement) {
    this.add.emit(content);
  }
}
