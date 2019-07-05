import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  // static을 이용, abstractcontrol은 모든 모든 컴트롤 요소들의 최상위 class이다. 최상위 이므로 ducktyping을 통해서 모든 컨트롤 요소를 다 받아줄 수 있는 상태가 된다.
  static match(passwordGroup: AbstractControl) {
    const password = passwordGroup.get('password').value;
    const confirmPassword = passwordGroup.get('confirmPassword').value;

    if (password !== confirmPassword) {
      return { match: { password, confirmPassword}};
    } else {
      return null;
    }
  }
}
