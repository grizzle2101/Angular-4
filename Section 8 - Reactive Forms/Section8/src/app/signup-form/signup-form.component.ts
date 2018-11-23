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
  //Task 1 - Create Nested FormGroup
  form = new FormGroup({
    account : new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  });

  login()
  {
    //Set Errors on Form
    this.form.setErrors({ //Set Errors takes a ValidationFn
      invalidLogin: true, //Can Return Complex Error Object
      thisSmells : false
    });

    console.log("Logging In...")
  }

  //Task 2 - Refactor Getter to new Path
  get username()
  {
    return this.form.get('account.username');
  }
}
