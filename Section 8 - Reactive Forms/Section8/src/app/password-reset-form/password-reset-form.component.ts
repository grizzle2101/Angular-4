import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styleUrls: ['./password-reset-form.component.css']
})

export class PasswordResetFormComponent
{
  form;
  /*
  form = new FormGroup({
    oldPassword: new FormControl('', [Validators.required], PasswordValidators.checkPasswordExists),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required], PasswordValidators.matchPasswords)
  });
  */

  constructor(fb: FormBuilder)
  {
    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.checkPasswordExists],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordShouldMatch
    });
  }
  //Task - Validate the Values are the same


  resetPassword()
  {
    console.log("Submitting Form...");
    console.log(this.form);
  }

  //Getters - Nessessary? - Yes, unless you want to write this.form.get all over the shop!
  get oldPassword()
  {
    return this.form.get('oldPassword');
  }

  get newPassword()
  {
    return this.form.get('newPassword');
  }

  get confirmPassword()
  {
    return this.form.get('confirmPassword');
  }
}
