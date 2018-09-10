import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'; //Always import from Environment.

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //Task 2 - Take Config Value into Component:
  backgroundColor = environment.navBarBackgroundColor;

  constructor() { }

  ngOnInit() {
  }

}
