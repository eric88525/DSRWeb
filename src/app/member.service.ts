import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from './member';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  body = {
    token: ''
  };
  constructor(private httpClient: HttpClient) {
  }
  Url = 'http://127.0.0.1/api/Auth/';
  valid: boolean;

  Login(user) {
    return this.httpClient.post(this.Url + 'login', user);
  }
  whoami() {
    console.log('who am i');
    console.log(localStorage.getItem('token'));
    return this.httpClient.get(this.Url + 'me', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
   /* console.log('try to get me');
    this.body.token = localStorage.getItem('token');
    return this.httpClient.post(this.Url + 'me', this.body);*/
  }
  Logout() {
    console.log('logout:');
    console.log(localStorage.getItem('token'));
    this.httpClient.get(this.Url + 'logout', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
    localStorage.removeItem('token');
    location.reload();
  }

}
