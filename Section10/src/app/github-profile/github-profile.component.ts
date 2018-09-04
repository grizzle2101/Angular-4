import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //console.log("GithubProfileComponent OnInit");
    //Task 4 - Accessing RouteParams w Snapshot
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)

    //Task 3 - Revert Changes
    /*
    this.route.paramMap
    .subscribe(params => {
      let id = +params.get('id');
      console.log(id);
    });
    */
  }
}
