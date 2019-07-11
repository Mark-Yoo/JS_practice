import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="navigation-primary">
      <a class="navigation-primary__logo" routerLink="home"><img class="logo" src="../assets/img/houseToday.png"></a>
      <div class="navigation-primary__menu open">
        <ul class="navigation-menu">
          <li class="navigation-menu__primary"><a routerLink="/community" routerLinkActive="active">커뮤니티</a></li>
          <li class="navigation-menu__primary"><a routerLink="/store" routerLinkActive="active">스토어</a></li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .navitaion-primary {
      margin: 0 auto;
      width: 1256px;
    }
    a {
      margin-left: 20px;
    }
    a:link {
      color: black;
    }
    a:hover {
      color: skyblue;
    }
    .logo {
      width: 73.98px;
    }
    .navigation-menu__primary.active {
      color: blue;
    }
    .navigation-primary__logo {
      position: static;
      margin-right: 50px;
      transform: none;
    }
    .navigation-primary__menu {
      display: inline-block;
      padding-bottom: 27px;
    }
    .navigation-menu > li {
      float: left;
      margin-right: 20px;
      font-size: 18px;
      font-weight: bold;
      color: black;
    }
    .navigation-menu > li > a {
      text-decoration: none;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
