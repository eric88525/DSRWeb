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
    console.log(sessionStorage.getItem('token'));
    return this.httpClient.get(this.Url + 'me', {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    });
  }
  Logout() {
    console.log('logout:');
    console.log(sessionStorage.getItem('token'));
    this.httpClient.get(this.Url + 'logout', {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    });
    sessionStorage.removeItem('token');
    location.reload();
  }

}
