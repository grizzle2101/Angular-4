import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent 
{
  form = new FormGroup({
    //Task 1 - Apply Multiple Validators
    username: new FormControl('', [
      Validators.required,
       Validators.minLength(3)
      ]),
    password: new FormControl('', Validators.required)
  });

  get username()
  {
    return this.form.get('username');
  }
}
