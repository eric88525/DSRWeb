import { Component, OnInit } from '@angular/core';
import {MemberService} from '../member.service';
import { Router } from '@angular/router';
import { isBoolean } from 'util';
import { Member } from '../member';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hasLogin: boolean;
  me: Member = {
    name: '',
    email: '',
    level: '',
  };
  constructor(private memberService: MemberService, private router: Router) { }
  ngOnInit() {

    console.log('header on ini');
    this.memberService.whoami().subscribe(
      (data: any) => {
        console.log(data);
        if (data.email && data.name) {
          this.hasLogin = true;
          this.me.name = data.name;
          this.me.email = data.namemaile;
          this.me.level = data.level;
          console.log('data good');
        } else if (data.error) {
          this.hasLogin = false;
          console.log('data error');
        }
      }
    );
    console.log(this.me);
    console.log(this.hasLogin);
  }
  Refresh() {
    this.hasLogin = false;
    this.me.name = '';
    this.me.email = '';
    this.me.level = '';
    this.memberService.Logout();

  }
  Logout() {
    this.hasLogin = false;
    this.me.name = '';
    this.me.email = '';
    this.me.level = '';
    this.memberService.Logout();
    //location.reload();
  }

}
