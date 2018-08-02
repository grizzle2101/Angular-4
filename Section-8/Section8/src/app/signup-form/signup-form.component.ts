import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent 
{
  //Task 4 - Use Validator
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
       Validators.minLength(3),
       UsernameValidators.cannotContainSpace
      ]),
    password: new FormControl('', Validators.required)
  });

  get username()
  {
    return this.form.get('username');
  }
}
