import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequest } from '../common/bad-request-error';

//import 'rxjs/operator/catch';
//import 'rxjs/observable/throw';

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

  ngOnInit()
  {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    }, 
    (error: AppError) => {
      alert('Unexpected Error occured.');
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
    }, 
    (error: AppError) => {
      if(error instanceof BadRequest)
      {
        alert("Bad Data!");
        //this.form.setErrors(error.json);
      }
      else
      {
        alert("Unexpected Error occured.");
        console.log(error);
      }
    });
  }

  updatePost(post)
  {
    this.service.updatePosts(post)
    .subscribe(response => {
      console.log(response.json());
    }, 
    (error: AppError) => {
      alert("Unecpted Error occured.");
      console.log(error);
    });
  }

  //Task 3 - Consume Application Specific Errors
  deletePost(post)
  {
    this.service.deletePosts(post.id)
    .subscribe(response => {
      console.log(response.json());

      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, 
    (error: AppError) => {
      console.log(error.originalError);
      if(error instanceof NotFoundError)
      {
        alert("This post has already been Deleted.");
        console.log(error instanceof NotFoundError);
      }

      else
      {
        alert("Unexpected Error occured.");
        console.log(error);
      }
    });
  }
}
