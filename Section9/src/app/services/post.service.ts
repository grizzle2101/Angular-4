import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequest } from '../common/bad-request-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http : Http)
  {

  }

  getPosts()
  {
    let source = this.http.get(this.url);
    let obj = source.pipe(catchError(error => {
      if(error === 400)
        return Observable.throw(new BadRequest(error.json()));
      return Observable.throw(new AppError(error.json()));
    }));
    return obj;
  }

  createPosts(post)
  {
    this.http.post(this.url, JSON.stringify(post));
    let source = this.http.post(this.url, JSON.stringify(post));
    let obj = source.pipe(catchError(error => {
      if(error.status === 400)
        return Observable.throw(new BadRequest(error));
      return Observable.throw(new AppError(error));
    }));
    return obj;
  }

  updatePosts(post)
  {
    let source = this.http.patch(this.url + '/' + post.id,JSON.stringify({isRead: true}));
    let obj = source.pipe(catchError(error => {
      return Observable.throw(new AppError(error));
    }));
    return obj;
  }


  deletePosts(id: number)
  {
    let source = this.http.delete(this.url + '/' + id);
    let obj = source.pipe(catchError(error => {
      if(error.status === 404)
        return Observable.throw(new NotFoundError(error));
      return Observable.throw(new AppError(error));
    }));

    return obj;
  }
}
