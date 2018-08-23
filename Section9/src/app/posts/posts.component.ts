import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadData } from '../common/bad-request-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit
{
  public posts: any[];

  constructor(private service : PostService)
  {
    
  }

  //Task 2 - Populate Posts Arra
  ngOnInit()
  {
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }


  //Tak 4 - Final Cleanup
  createPost(input: HTMLInputElement)
  {
    let post: any = {title: input.value};
    input.value = "";

   this.service.create(post)
    .subscribe(newPost => {
      post.id = newPost.id;
      this.posts.splice(0, 0, post);
    }, 
    (error: AppError) => {
      if(error instanceof BadData)
      {
        alert("Bad Data!");
        //this.form.setErrors(error.json); //Set Errors on Form
      }
      else throw error; 
    });
  }

  updatePost(post)
  {
    this.service.update(post)
    .subscribe(updatedPost => console.log(updatedPost));
  }

  deletePost(post)
  {
    this.service.delete(post.id)
    .subscribe(() => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, 
    (error: AppError) => {
      console.log(error.originalError);
      if(error instanceof NotFoundError)
      {
        alert("This post has already been Deleted.");
      }
      else throw error;
    });
  }
}
