import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FollowersService extends DataService {

  constructor(http : Http)
  {
    super("https://api.github.com/users/mosh-hamedani/followers", http);
  }
}
