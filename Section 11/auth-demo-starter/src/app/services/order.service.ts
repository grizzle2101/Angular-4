import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 
'angular2-jwt/angular2-jwt';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp, private http: Http) {
  }

  //Task 2 - Pass Token to Backend:
  getOrders() { 

    /*
    let headers = new Headers();
    let token = localStorage.getItem('token');

    headers.append('Authorization', 'Bearer ' + token);

    let options = new RequestOptions({headers: headers});
    */

    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
