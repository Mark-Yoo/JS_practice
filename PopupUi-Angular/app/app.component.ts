import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>JavaScript Popup</h1>
  
    <div class="popup" [class.active]="clickActivate">
      <h1>JavaScript Popup</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      <button class="btn-close" (click)="initPopup()">X</button>
      <input type="text" [(ngModel)]="content">
      <button class="btn-ok" (click)="addText()">OK</button>
      <button class="btn-cancel" (click)="initPopup()">Cancel</button>
    </div>
    <div class="overlay" [class.active]="clickActivate" (click)="initPopup()"></div>
  
    <button class="toggle-popup" (click)="togglePopup()">show popup</button>
  
    <p class="popup-message">{{newText}}</p>
  `,
  styles: [`
    .popup {
      display: none;
    }

    .popup.active {
      display: inline-block;
      position: absolute;
      z-index: 100;
      background: white;
      width: 800px;
      height: 300px;
      top: 3em;
      bottom: 0;
      right: 0;
      left: 0;
      margin: 0 auto;
      padding: 30px;
    }

    .btn-close {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    .overlay {
      display: none;
    }

    .overlay.active {
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: ;
    }
  `]
})
export class AppComponent {
  content: string;
  newText: string;
  clickActivate: boolean = false;

  togglePopup() {
    this.clickActivate = true;
  }

  addText() {
    if (this.content && this.content.trim())
    this.newText = 'from popup: ' + this.content;
    this.content = '';
  }

  initPopup() {
    this.clickActivate = false;
    this.content = '';
  }
}
