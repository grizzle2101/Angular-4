import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadData } from '../common/bad-request-error';

import 'rxjs/Operator/catch/'
import 'rxjs/add/observable/throw'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http : Http)
  {

  }

  //Task 2 - Clean Up API Methods
  //Return Observeable, Consumers decided what to do with Response Data.
  getPosts()
  {
    let source = this.http.get(this.url);
    let obj = source.pipe(catchError(this.handleError));
    return obj;
  }

  createPosts(post)
  {
    let source = this.http.post(this.url, JSON.stringify(post));
    let obj = source.pipe(catchError(this.handleError));
    return obj;
  }

  updatePosts(post)
  {
    let source = this.http.patch(this.url + '/' + post.id,JSON.stringify({isRead: true}));
    let obj = source.pipe(catchError(this.handleError));
    return obj;
  }

  deletePosts(id: number)
  {
    let source = this.http.delete(this.url + '/' + id);
    let obj = source.pipe(catchError(this.handleError));
    return obj;
  }

  //Task 1 - Extract Duplicate Code to Private Method
  private handleError(error: Response)
  {
    if(error.status === 400)
    return Observable.throw(new BadData(error));

    if(error.status === 404)
      return Observable.throw(new NotFoundError(error));

    return Observable.throw(new AppError(error));
  }
}
