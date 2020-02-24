import { Component, OnInit } from "@angular/core";
import { Project } from "../project";
import { ProjectService } from "../project.service";
import { MemberService } from "../member.service";
import { Level } from "../level";
import {
  ParseErrorLevel,
  createOfflineCompileUrlResolver
} from "@angular/compiler";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  show = {} as Level;
  search = {} as Project;
  result = [] as Project[];
  searching: boolean;
  constructor(
    private projectService: ProjectService,
    private memberService: MemberService
  ) {}
  Search() {
    this.searching = true;
    this.result = [] as Project[];
    console.log(this.search.programName);
    if (sessionStorage.getItem("token") != null) {
      sessionStorage.setItem('Search', JSON.stringify(this.search));
      this.projectService.searchProjects(this.search).subscribe(
        (data: any) => {
        if (!data.error) {
          this.result = this.reOrder(data);
          sessionStorage.removeItem('Result');
          sessionStorage.setItem('Result', JSON.stringify(this.result));
          alert('Got ' + this.result.length + ' result');

        } else {
          alert(data.error);
        }
      });
    } else {
      alert("You have to login!");
    }
    console.log(this.result);
    this.searching = false;
  }

  reOrder(data: Project[]): Project[] {
    let temp = [] as Project[];
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) {
        if (data[i].opportunity === data[j].opportunity) {
          j = ++i;
        }
      }
      temp.push(data[i]);
    }
    return temp;
  }
  ngOnInit() {
    if(sessionStorage.getItem('Search')){
      this.search = JSON.parse(sessionStorage.getItem('Search'));
    }
    if(sessionStorage.getItem('Result')){
      this.result = JSON.parse(sessionStorage.getItem('Result'));
    }
    this.memberService.whoami().subscribe((data: any) => {
      if (data.level) {
        this.show = data.level;
        console.log(this.show);
      } else {
        console.log("cant get level data");
      }
    });
  }
}
