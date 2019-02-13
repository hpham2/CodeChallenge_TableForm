import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

/**
 * This class is responsible for controlling the form of required user information.
 * @class
 */
export class FormComponent {
  /** Throw email into other component, e.g. submit component. */
  @Output() emailChange = new EventEmitter();
  userEmail = null;

  /**
   * @variables
   */
  passwordHide: boolean = true;
  confirmPasswordHide: boolean = true;
  userPassword: string = "";
  userConfirmPassword: string = "";

  /** Setup form control  */
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required]);

  constructor() { }
  
  /** Read user email */
  onEmailTyping(event: any) {
    this.userEmail = event.target.value;
    if(this.email.hasError('required') || this.email.hasError('email')) {
      this.emailChange.emit(null);
    } else {
      this.emailChange.emit(this.userEmail);
    }
  }
  
  /** Function return error string for email input */
  getErrorMessage() {
    return this.email.hasError('required') ? 'This cannot be empty' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  /** Function return error string for password input */
  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'This cannot be empty' :
      this.password.hasError('minlength') ? 'Password must have at least 8 characters' : '';
  }

  getConfirmPasswordErrorMessage() {
    if (this.userPassword != this.userConfirmPassword) {
      return 'Confirm password does not match the upper password'
    }
    return this.confirmPassword.hasError('required') ? 'This cannot be empty' : '';
  }

  /** Set the password value for the comparison with confirmed password */
  setUserPassword(password) {
    this.userPassword = password.value;
    if (this.userPassword != this.userConfirmPassword) {
      this.confirmPassword.setErrors({ 'incorrect': true });
    } else {
      this.confirmPassword.setErrors(null);
    }
  }

  /** Set the confirm password value for the comparison with entered password */
  setUserConfirmPassword(confirmPassword) {
    this.userConfirmPassword = confirmPassword.value
    if (this.userPassword != this.userConfirmPassword) {
      this.confirmPassword.setErrors({ 'incorrect': true });
    } else {
      this.confirmPassword.setErrors(null);
    }
  }
}
