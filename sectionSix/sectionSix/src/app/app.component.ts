import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  canSave = true;

  onClick()
  {
    this.canSave = !this.canSave;
  }
}