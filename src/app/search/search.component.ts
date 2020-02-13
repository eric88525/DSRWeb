import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { MemberService } from '../member.service';
import { Level } from '../level';
import { ParseErrorLevel } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  show = {} as Level;
  search = {} as Project;
  result = {} as Project[];
  constructor(private projectService: ProjectService, private memberService: MemberService) { }

  Search() {
    console.log(this.search.programName);
    if (sessionStorage.getItem('token') != null) {
      this.projectService.searchProjects(this.search).subscribe(
        (data: Project[]) => this.result = data
      );
      console.log(this.result);
    } else {
      alert('You have to login!');
    }
  }
  ngOnInit() {
    this.search.programName = '';
    this.search.partNumber = '';
    this.memberService.whoami().subscribe(
      (data: any) => {
        if (data.level) {
          this.show = data.level;
          console.log(this.show);
        } else {
          console.log('cant get level data');
        }
      }

    );


  }

}
