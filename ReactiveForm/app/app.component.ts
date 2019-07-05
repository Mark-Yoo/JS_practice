import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from './password-validator';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="userForm">
      <input type="text" placeholder="userid" formControlName="userid">
      <em *ngIf="userid.errors?.required && userid.touched">아이디를 입력해주세요</em>
      <em *ngIf="userid.errors?.pattern && userid.touched">아이디를 형식에 맞게 입력해주세요</em>

      <div formGroupName="passwordGroup">
        <input type="password" placeholder="password" formControlName="password">
        <input type="password" placeholder="confirm password" formControlName="confirmPassword">
        <em></em>
        <button>회원 가입</button>
      </div>
    </form>

    <pre>userForm.value: {{userForm.value | json}}</pre>
    <pre>userForm.valid: {{userForm.valid}}</pre>

    <pre>userid.value: {{userid.valid}}</pre>
    <pre>userid.errors: {{userid.errors | json}}</pre>

    <pre>passwordGroup.errors: {{passwordGroup.errors | json}}</pre>

    <pre>passwordGroup.password.valid: {{password.valid}}</pre>
    <pre>passwordGroup.password.errors: {{password.errors | json}}</pre>

    <pre>passwordGroup.confirmpassword.valid: {{confirmPassword.valid}}</pre>
    <pre>passwordGroup.confirmpassword.errors: {{confirmPassword.errors | json}}</pre>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  // 전체 인스턴스를 관리하는 부분을 이용하면 내부를 다 알 수 있다.
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    // // 전체 인스턴스를 관리, 각자 템플릿과의 관계를 연결해주기 위해서 템플릿에 관계를 알려줘야 한다. 내부에는 컨트롤 요소가 들어간다.
    // this.userForm = new FormGroup({
    //   // formcontrol에 인자로 전달되는 것은 각 form의 초기값으로 들어간다. required와 pattern은 이제 템플릿이 아닌 여기에 붙는다. pattern은 여러가지가 들어갈 있으므로 배열화 시켜서 전달할 수도 있다.
    //   userid: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern('[a-zA-Z]{4,10}')
    //   ]),
    //   // password 두 개의 value가 맞는지 보기위해서 따로 묶어서 관리한다. 두 상태를 비교하고 관리하기 위해서 class를 하나 만든다. ng g cl password-validator
    //   passwordGroup: new FormGroup({
    //     password: new FormControl('', [
    //       Validators.required,
    //       Validators.pattern('[a-zA-Z]{4,10}')
    //     ]),
    //     confirmPassword: new FormControl('', [
    //       Validators.required,
    //       Validators.pattern('[a-zA-Z]{4,10}')
    //     ])
    //   }, PasswordValidator.match)
    // });

    // console.dir(this.userForm);
    this.userForm = this.fb.group({
      userid: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{4,10}')
      ]],
      passwordGroup: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, { validators: PasswordValidator.match })
    });
  }

  // 템플릿에서 form의 control 요소에 접근이 쉽고 용이하게 만들기 위해서 getter를 사용한다.
  get userid() {
    return this.userForm.get('userid');
  }

  get passwordGroup() {
    return this.userForm.get('passwordGroup');
  }

  get password() {
    return this.userForm.get('passwordGroup.password');
  }

  get confirmPassword() {
    return this.userForm.get('passwordGroup.confirmPassword');
  }
}
