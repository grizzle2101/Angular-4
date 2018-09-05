import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  //Task 2 - Take Additional Query Parameters:
  constructor(
    private route : ActivatedRoute //Access this through Activated Route Module
    ,private service: GithubFollowersService) { }

  ngOnInit() {
    //How can we Simplfy multiple ParamMap & QueryParam map into one?
    this.route.paramMap.subscribe(params => {
      console.log(params);
    });

    //Task 3 - Use Additional Parameters(Much Like Required Parameters)
    this.route.queryParamMap.subscribe(params => {
      console.log(params);
    });

    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
