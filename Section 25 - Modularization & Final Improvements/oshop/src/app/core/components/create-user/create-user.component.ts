import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from '../../password.validators';
import { UsernameValidators } from '../../username.validators';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  form;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      account: formBuilder.group({
        name: ['', [Validators.required]],
        username: ['', [Validators.required, UsernameValidators.checkUserAlreadyExists]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, PasswordValidators.checkValidPassword]],
        confirmPassword: ['', [Validators.required]],
      }, { validator: PasswordValidators.passwordsShouldMatch }),
    });
  }


  createUser() {
    console.log("Form Object:", this.form);

  }

  //Expose Nested Form Control Ojects to Template
  get username() {
    return this.form.get('account.username');
  }

  get email() {
    return this.form.get('account.email');
  }

  get password() {
    return this.form.get('account.password');
  }

  get confirmPassword() {
    return this.form.get('account.confirmPassword');
  }

}
