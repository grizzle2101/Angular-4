import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  
{
  //Task 3 - Log the ngModel to Console
  log(x)
  {
    console.log(x);
  }
}
