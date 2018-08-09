import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http : Http)
  {

  }

  //Return Observeable, Consumers decided what to do with Response Data.
  getPosts()
  {
    return this.http.get(this.url);
  }

  createPosts(post)
  {
    return  this.http.post(this.url, JSON.stringify(post));
  }

  updatePosts(post)
  {
    return this.http.patch(this.url + '/' + post.id,JSON.stringify({isRead: true}));
  }

  deletePosts(id: number)
  {
    return this.http.delete(this.url + '/' + id);
  }

}
