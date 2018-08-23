import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadData } from '../common/bad-request-error';

import 'rxjs/Operator/catch/'
import 'rxjs/add/observable/throw'
import 'rxjs/Operator/map/'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private url: string, private http : Http)
  {

  }

  //Task 1 - Map Responce JSON
  getAll()
  {
    let source = this.http.get(this.url);
    return source.pipe(map(response => response.json()), catchError(this.handleError));
  }

  //Task 3 - Refactor Remaining Methods
  create(resource)
  {
    let source = this.http.post(this.url, JSON.stringify(resource));
    return source.pipe(map(response => response.json()), catchError(this.handleError));
  }

  update(resource)
  {
    let source = this.http.patch(this.url + '/' + resource.id,JSON.stringify({isRead: true}));
    return source.pipe(map(response => response.json()), catchError(this.handleError));
  }

  delete(id: number)
  {
    let source = this.http.delete(this.url + '/' + id);
    return source.pipe(map(response => response.json()), catchError(this.handleError));
  }


  private handleError(error: Response)
  {
    if(error.status === 400)
    return Observable.throw(new BadData(error));

    if(error.status === 404)
      return Observable.throw(new NotFoundError(error));

    return Observable.throw(new AppError(error));
  }
}
