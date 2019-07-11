import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <main role="main">
      <div class="sign-in-page">
        <div class="sign-in-form">
          <h1 class="sign-in-header">
            <a class="sign-in-header-link" routerLink="/home">
              <span class="login-logo" aria-label="오늘의집" ><img class="login-logo_img" src="../../assets/img/houseToday.png"></span>
            </a>
          </h1>
          <form class="sign-in-form_form" [formGroup]="userForm">
            <input class="sign-in-form_form_input" type="text" placeholder="이메일" autofocus formControlName="email">
            <div class="sign-in-form_password_form_wrap">
              <input class="sign-in-form_form_input" type="password" name="password" placeholder="비밀번호" formControlName="password" (keyup)="capsLockWarning($event)">
              <p class="sign-in-form_password_caps" *ngIf="CapLock">Caps Lock이 <br>켜져있네요!</p>
            </div>
            <button class="sign-in-form_loginBtn"name="login" value="로그인" (click)="SubmitandCheck()" routerLink="/home">로그인</button>
          </form>
          <div class="sign-in-form_action">
            <a class="sign-in-form_action_entry">비밀번호 재설정</a>
            <a class="sign-in-form_action_entry" routerLink="/signup">회원가입</a>
          </div>
        </div>
      </div>
    </main>
  `,
  styleUrls: [`./login.component.css`]
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  CapLock: boolean;
  SubmitBtn: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern("^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$")
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9]{4,10}")
      ]]
    })
  }

  capsLockWarning(e) {
    console.log(e);
    if(e.getModifierState("CapsLock")) {
      this.CapLock = true;
    } else {
      this.CapLock = false;
    }
  }

  SubmitandCheck() {
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }
}
