import { Component, OnInit } from '@angular/core';
import {MemberService} from '../member.service';
import { Router } from '@angular/router';
import { Member } from '../member';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private memberService: MemberService, private router: Router ) { }
  user = {
    email: '',
    password: '',
  };
  me: Member;
  Login() {
    this.memberService.Login(this.user).subscribe((data: any) => {
      if (data.token) {
        sessionStorage.setItem('token', data.token);
        this.router.navigate(['/']);
      } else {
        console.log('fail');
      }
    }, (response) => {
      alert('登入失敗');
    });
  }

  ngOnInit() {
    if (sessionStorage.getItem('token') != null) {
      this.memberService.Logout();
    }
  }
}
