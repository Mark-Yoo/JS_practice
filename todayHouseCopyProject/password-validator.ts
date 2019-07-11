import { AbstractControl } from '@angular/forms';

export class PasswordValidator {

  static match(passwordGroup: AbstractControl) {
    const password = passwordGroup.get('password').value;
    const passwordConfirm = passwordGroup.get('passwordConfirm').value;

    if (password !== passwordConfirm) {
      return { match: { password, passwordConfirm }};
    } else {
      return null;
    }
  }
}
