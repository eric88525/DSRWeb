import { Component, OnInit } from '@angular/core';
import {Project} from '../project';
import {ProjectService} from '../project.service';
import {MemberService} from '../member.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = {} as Project;
  result = {} as Project[];
  hasLogin;

  constructor(private projectService: ProjectService, private memberService: MemberService) { }

  Search() {

    console.log(this.search.programName);

    if (localStorage.getItem('token')!=null) {
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
  }

}
