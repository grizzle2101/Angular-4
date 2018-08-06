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
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
       Validators.minLength(3),
       UsernameValidators.cannotContainSpace],
       UsernameValidators.shouldBeUnique
      ),
    password: new FormControl('', Validators.required)
  });

  //Task 2 - Implment login Method
  login()
  {
    //let isValid = LoginServier.Login(form.value)
    //if(!isvalid)

    //Set Errors on Form
    this.form.setErrors({ //Set Errors takes a ValidationFn
      invalidLogin: true, //Can Return Complex Error Object
      thisSmells : false
    });

    console.log("Logging In...")
  }

  get username()
  {
    return this.form.get('username');
  }
}
