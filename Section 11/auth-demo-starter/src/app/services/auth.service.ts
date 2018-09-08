import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

  //Task 2 - Implement Logout Method
  logout()
  { 
    console.log("Logging Out");
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    return false;
  }
}

