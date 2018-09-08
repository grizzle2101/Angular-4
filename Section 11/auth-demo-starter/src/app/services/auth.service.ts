import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from '../../../node_modules/angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map( response =>{
        let result = response.json();
        if(result && result.token)
        {
          console.log("true");
          localStorage.setItem('token', result.token);
          return true
        }
        return false;
      });
  }

  logout()
  { 
    console.log("Logging Out");
    localStorage.removeItem('token');
  }

  //Task 2 - Implment IsLoggedIn Method
  isLoggedIn() { 
    //Task 5 - The Simple Way:
    return tokenNotExpired();

    /*
    let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');

    if(!token)
      return false;

    jwtHelper.decodeToken(token);

    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);

    console.log("Expiration: " , expirationDate);
    console.log("IsExpired: " , isExpired);

    return !isExpired;
    */
  }
}

