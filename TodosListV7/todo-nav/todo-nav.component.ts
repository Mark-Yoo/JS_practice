import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { navItem } from '../navitem.type';

@Component({
  selector: 'app-todo-nav',
  template: `
    <ul class="nav">
      <li *ngFor="let navItem of navItems" [class.active]="navStatus === navItem" class="active" (click)="changeNav.emit(navItem)">{{navItem}}</li>
    </ul>
  `,
  styleUrls: ['./todo-nav.component.css']
})
export class TodoNavComponent implements OnInit {
  @Input() navStatus: navItem;
  @Output() changeNav = new EventEmitter();

  navItems: navItem[] = ['All', 'Active', 'Completed'];

  constructor() { }

  ngOnInit() {
  }

}
