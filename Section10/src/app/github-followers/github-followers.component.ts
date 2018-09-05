import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//Task 1 - Imports
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route : ActivatedRoute 
    ,private service: GithubFollowersService) { }

  ngOnInit() {
    //Task 2 - Combine Latest
    Observable.combineLatest([
      this.route.paramMap, this.route.queryParamMap
      //Task 3 - Access the Combined Observerables Data
    ]).subscribe(combined => {
      let id = combined[0].get('id'); //0 = ParamMap
      let page = combined[1].get('page');

      //this.service.get({id:id, page:page}); Then Call Service w Our Route Data.
    });
    
    /* //No Need for Multiple Subscriptions anymore.
    this.route.paramMap.subscribe(params => {
      console.log(params);
    });

    this.route.queryParamMap.subscribe(params => {
      console.log(params);
    });
    */

    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
