import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  //Task 1 - Import Activated Route
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //Task 2 - Subscribe to ParamMap
    this.route.paramMap
    .subscribe(params => {
      //Task 3 - Getting Parameters:
      //params.get('id');
      //Task 4 - Cast Param & Pass to Service
      let id = +params.get('id');
      //service.getProfile(id); //Example Call to service.
      console.log(id);
    }); 
  }
}
