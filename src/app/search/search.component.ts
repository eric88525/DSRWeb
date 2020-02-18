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

  constructor(
    private projectService: ProjectService,
    private memberService: MemberService
  ) {}
  Search() {
    this.result = [] as Project[];
    console.log(this.search.programName);
    if (sessionStorage.getItem("token") != null) {
      this.projectService.searchProjects(this.search).subscribe(
        (data: any) => {
        if (!data.error) {
          this.result = this.reOrder(data);
        } else {
          alert(data.error);
        }
      });
    } else {
      alert("You have to login!");
    }
    console.log(this.result);
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
