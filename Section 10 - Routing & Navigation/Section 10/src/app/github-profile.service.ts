import { Http } from '@angular/http';
import { DataService } from './services/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubProfileService extends DataService {

  constructor(http: Http) {
    super('https://api.github.com/users', http);
  }
}
