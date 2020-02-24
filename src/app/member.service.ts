import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from './member';
import {HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  body = {
    token: ''
  };
  constructor(private httpClient: HttpClient) {
  }

  valid: boolean;

  Login(user) {
    return this.httpClient.post(environment.api + 'Auth/login', user);
  }
  whoami() {
    console.log('who am i');
    console.log(sessionStorage.getItem('token'));
    return this.httpClient.get(environment.api + 'Auth/me', {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    });
  }
  Logout() {
    console.log('logout:');
    console.log(sessionStorage.getItem('token'));
    this.httpClient.get(environment.api + 'Auth/logout', {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    });
    sessionStorage.removeItem('token');

  }

}
