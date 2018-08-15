import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit
{
  public posts: any[];

  //Initialize PostService
  constructor(private service : PostService)
  {
    
  }

  //Task 1 - Add Error Method to ngOnInit():
  ngOnInit()
  {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    }, error => {
      alert('Unpected Error occured.');
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement)
  {
    let post: any = {title: input.value};
    input.value = "";

   this.service.createPosts(post)
    .subscribe(response => {
      post.id = response.json().id;
      this.posts.splice(0, 0, post);
    }, error => {
      alert("Unexpected Error occured.");
      console.log(error);
    });
  }

  updatePost(post)
  {
    this.service.updatePosts(post)
    .subscribe(response => {
      console.log(response.json());
    }, error => {
      alert("Unecpted Error occured.");
      console.log(error);
    });
  }


  deletePost(post)
  {
    this.service.deletePosts(post.id)
    .subscribe(response => {
      console.log(response.json());

      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, error => {
      alert("Unexpected Error occured.");
      console.log(error);
    });
  }
}
