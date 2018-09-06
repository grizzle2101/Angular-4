import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent {


  //Task 2 - Import Router Module
  constructor(private router: Router) { }

  //Task 3 - Create Route Programatically
  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest'}
    });
  }
}
