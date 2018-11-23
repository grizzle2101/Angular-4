import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  //Variables for UI to Bind to.
  year: number;
  month; number;

  //Task 7 - Get Route parameters into ArchiveComponent:Task 7 - Get Route parameters into ArchiveComponent:
  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() 
  {
    let params = this.route.snapshot.paramMap;

    //Need to Cast Year as INT.
    this.year = +params.get('year');
    this.month = +params.get('month');
  }

  //Task 9 - Navigate from Archive to Home with Programatic Link:
  viewAll()
  {
    this.router.navigate(['/']);
  }
}
