import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/Operator/map';
import 'rxjs/add/Operator/switchMap';

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
    Observable.combineLatest([
      this.route.paramMap, this.route.queryParamMap
    ])
    //Task 2 - Expore ParamMap & QueryParamMap Types:
    //Task 3 - Map Combined & Follower Observerables
    .switchMap(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');
      
      return this.service.getAll();
    })
    .subscribe(followers => this.followers = followers);
  }
}
