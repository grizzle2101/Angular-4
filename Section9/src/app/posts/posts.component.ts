import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent
{
  public posts: any[];

  //Task 2 - Create Constructor
  constructor(http: Http)
  {
    http.get("http://jsonplaceholder.typicode.com/posts")
    .subscribe(response => {
      //console.log(response);
      //Task 3 - Response as JSON
      this.posts = response.json();
    });
  }
}
