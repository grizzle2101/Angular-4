import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'; //Import Forms

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent 
{
  //Task 1 - Create Form Group
  //Task 2 - Insert Key Value Pairs
  //Form Group Take a Dictionary of Form Control Values, so for each input in the form, we need a key value pair here.
  form = new FormGroup({
    username: new FormControl,
    password: new FormControl
  });

  //form = new FormGroup({username: new FormControl});
}
