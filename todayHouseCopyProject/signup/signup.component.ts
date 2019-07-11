import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../password-validator';
import { HttpClient } from '@angular/common/http';
import { UserinfoService } from '../userinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  template: `
    <header id="simplified-gnb" class="simplified-gnb">
      <div class="container">
        <a class="simplified-gnb__logo" href="http://ohou.se/"><img class="houseToday_logo" src="../../assets/img/houseToday.png"></a>
      </div>
    </header>
    <main role="main">
      <section id="signup-form__wrap" class="container">
        <h4 class="text-black bold signup-form__title">회원가입</h4>
        <section id="signup-form" class="signup-form">
          <section id="signup-form__email" class="signup-form__email">
            <form class="new_normal_user" id="new_normal_user" [formGroup]="userForm">
              <div class="form-group" id="signjup-form__email__email-form-group">
                <label class="form-label" for="signup-form__email__email-username">이메일</label>
                <div class="input-group">
                  <input type="text" size="1" class="form-control signup-form__email-username" autofocus formControlName="email" (change)="addEmail(emailid)" #emailid>
                  <span class="form-separator signup-form__email__email-at-mark"> @ </span>
                  <input type="text" size="1" class="form-control signup-form__email__comain" formControlName="domain" (change)="addDomain(domainName)" #domainName>
                </div>
                <p *ngIf="email.errors?.required && email.touched" class="error">이메일을 입력해주세요.</p>
              </div>
              <div class="form-group" id="singup-form__email__pw-form-group" formGroupName="passwordGroup">
                <label class="form-label" for="normal_user_user_attributes_password">비밀번호</label>
                <p class="caption line-height-normal">8자이상 영문 대 소문자, 숫자, 특수문자를 사용하세요.</p>
                <input class="form-control" type="password" formControlName="password" id="normal_user_user_attributes_password" (change)="addPassword(passwordInput.value)" #passwordInput>
                <p *ngIf="password.errors?.required && password.touched" class="error">비밀번호를 입력해주세요.</p>
                <p *ngIf="password.errors?.pattern && password.touched" class="error">비밀번호는 8글자 이상이어야합니다.</p>
                <label class="form-label password-confirmation-label" for="normal_user_user_attributes_password_confirmation">비밀번호 확인</label>
                <input class="form-control" type="password" formControlName="passwordConfirm" id="normal_user_user_attributes_password_confirmation" (change)="addPasswordConfirm(passwordConfirmInput.value)" #passwordConfirmInput>
                <p *ngIf="passwordConfirm.errors?.required && passwordConfirm.touched && passwordConfirm.pristine" class="error">비밀번호 확인을 입력해주세요.</p>
                <p *ngIf="passwordGroup.errors?.match && passwordConfirm.touched" class="error">비밀번호가 일치하지 않습니다.</p>
              </div>
              <div class="form-group" id="signup-form__email__nickname-form-group">
                <label class="form-label" for="normal_user_user_attributes_nickname">별명</label>
                <p class="caption line-height-normal">2-15자 자유롭게 입력해주세요.</p>
                <input class="form-control" type="text" formControlName="nickname" id="normal_user_user_attributes_nickname" (change)="addNickname(nicknameInput.value)" #nicknameInput>
                <p *ngIf="nickname.errors?.required && nickname.touched" class="error">별명을 입력해주세요.</p>
                <p *ngIf="nickname.errors?.pattern && nickname.touched" class="error">별명은 최소 2글자 이상이어야 합니다.</p>
              </div>
            </form>
          </section>
          <section id="signup-form__policy" class="signup-form__policy">
            <div class="form-check signup-form__policy__check-all">
              <label class="bold">약관동의</label>
              <div class="form-check signup-form__policy__check-all__form-check">
                <label class="form-check-label text0heading-5 bold">
                  <input id="singup-form__policy__check-all__input" class="form-check singup-form__policy__check-all__input" type="checkbox">
                  <span class="check-img"></span>
                  전체동의
                </label>
              </div>
            </div>
            <div class="signup-form__policy__policy-list">
              <div class="signup-form__policy__policy-item">
                <label for="singup-form__policy__more-14__input">만 14세 이상입니다.</label>
                <div class="form-check signup-from__policy__more-14__form-check">
                  <label class="form-check-label bold">
                    <input id="singup-form__policy__more-14__input" class="form-check form-check signup-form__policy__item__input signup-form__policy__more-14__input" type="checkbox" name="cinfirm_upper_14">
                    <span class="check-img"></span>
                         동의
                    <span class="text-red">(필수)</span>
                  </label>
                </div>
              </div>
              <div class="signup-form__policy__policy-item"></div>
              <div class="signup-form__policy__policy-item"></div>
              <div class="signup-form__policy__policy-item"></div>
            </div>
          </section>
          <button id="btn-submit-signup" class="btn btn-lg btn-priority" type="submit" form="new_normal_user" (click)="submitUserData()">회원가입하기</button>
          <p id="has-account">이미 아이디가 있으신가요?
          <a class="bold underline">로그인</a>
          </p>
        </section>
      </section>
      <div class="popup" [class.active]="clickActivate">
        <h1>회원가입에 실패하였습니다.</h1>
      </div>
      <div class="overlay" [class.active]="clickActivate" (click)="initPopup()"></div>
    </main>
  `,
  styleUrls: [`./signup.component.css`]
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;
  userEmailId: string;
  userDomain: string;
  userEmail: string;
  userPassword: string = '';
  userPasswordConfirm: string;
  userNickname: string;
  clickActivate: boolean;

  constructor(private fb: FormBuilder, http: HttpClient, private userinfoService: UserinfoService, private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])')
      ]],
      domain: ['', [
        Validators.required,
        Validators.pattern('[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}')
      ]],
      nickname: ['', [
        Validators.required,
        Validators.pattern('^[가-힣a-zA-Z]{2,15}$')
      ]],
      passwordGroup: this.fb.group({
        password: ['', [
          Validators.required,
          Validators.pattern('(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}')
        ]],
        passwordConfirm: ['', [
          Validators.required,
          Validators.pattern('(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}')
        ]]
      }, { validators: PasswordValidator.match})
    })
  }

  addEmail(emailId: HTMLInputElement) {
    this.userEmailId = emailId.value;
    this.userEmail = this.userEmailId + this.userDomain;
  }

  addDomain(domainName: HTMLInputElement) {
    this.userDomain = '@'+domainName.value;
    this.userEmail = this.userEmailId + this.userDomain;
  }

  addPassword(password: string) {
    this.userPassword = password;
  }

  addPasswordConfirm(passwordConfirm: string) {
    this.userPasswordConfirm = passwordConfirm;
  }
  
  addNickname(nickname: string) {
    this.userNickname = nickname;
  }

  submitUserData() {
    if (this.userPassword === this.userPasswordConfirm && this.userPassword !== null) {
      console.log('success');
      this.router.navigate(['login']);
      // this.userinfoService.addUserInfo(this.userEmail, this.userPassword, this.userNickname)
    } else {
      console.log('failed');
      this.togglePopup();    
    }
  }

  togglePopup() {
    this.clickActivate = true;
  }

  initPopup() {
    this.clickActivate = false;
  }

  get email() {
    return this.userForm.get('email');
  }

  get passwordGroup() {
    return this.userForm.get('passwordGroup');
  }

  get password() {
    return this.userForm.get('passwordGroup.password');
  }

  get passwordConfirm() {
    return this.userForm.get('passwordGroup.passwordConfirm');
  }

  get nickname() {
    return this.userForm.get('nickname');
  }
}
