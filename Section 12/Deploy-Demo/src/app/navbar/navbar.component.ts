import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'; //Always import from Environment.

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  backgroundColor = environment.navBarBackgroundColor;

  constructor() { }

  ngOnInit() {
  }

}
