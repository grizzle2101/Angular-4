import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  //Task 1 -Expore AuthService.Login:
  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map( response =>{
        //console.log(response);

        //Task 2 - Map Responses to True/False
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

  logout() { 
  }

  isLoggedIn() { 
    return false;
  }
}

