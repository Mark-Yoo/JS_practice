import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  template: `
    <app-home></app-home>
    <nav>
      <a routerLink="/community/home">home</a>
      <a routerLink="/community/photo">사진</a>
      <a routerLink="/community/visitmyhome">집들이</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav > a {
      margin-left: 30px;
    }
  `]
})
export class CommunityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
