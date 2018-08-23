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
export class DataService {
  
  constructor(private url: string, private http : Http)
  {

  }

  getAll()
  {
    let source = this.http.get(this.url);
    let obj = source.pipe(catchError(this.handleError));
    return obj;
  }

  create(resource)
  {
    let source = this.http.post(this.url, JSON.stringify(resource));
    let obj = source.pipe(catchError(this.handleError));
    return obj;
  }

  update(resource)
  {
    let source = this.http.patch(this.url + '/' + resource.id,JSON.stringify({isRead: true}));
    let obj = source.pipe(catchError(this.handleError));
    return obj;
  }

  delete(id: number)
  {
    let source = this.http.delete(this.url + '/' + id);
    let obj = source.pipe(catchError(this.handleError));
    return obj;
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
