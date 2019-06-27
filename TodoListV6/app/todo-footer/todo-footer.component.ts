import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todo-footer',
  template: `
    <div class="footer">
      <div class="complete-all">
        <input class="custom-checkbox" type="checkbox" id="ck-complete-all" (click)="allCheck.emit($event.target.checked)">
        <label for="ck-complete-all">Mark all as complete</label>
      </div>
      <div class="clear-completed">
        <button class="btn" (click)="compClear.emit()">Clear completed (<span class="completed-todos">{{completedNum}}</span>)</button>
        <strong class="active-todos">{{leftNum}}</strong> items left
      </div>
    </div>
  `,
  styles: []
})
export class TodoFooterComponent implements OnInit {
  @Input() todos: Todo[];
  @Input() completedNum: number;
  @Input() leftNum: number;
  @Output() allCheck = new EventEmitter();
  @Output() compClear = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
