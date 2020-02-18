import { Component, OnInit } from "@angular/core";
import { Project } from "../project";
import { Input } from "@angular/core";
@Component({
  selector: "app-project-table",
  templateUrl: "./project-table.component.html",
  styleUrls: ["./project-table.component.css"]
})
export class ProjectTableComponent implements OnInit {
  @Input() projects: Project[];
  itemPerPage;
  constructor() {}
  loadMorePage() {
    this.itemPerPage += 6;
  }
  ngOnInit() {
    this.itemPerPage = 6;
  }
}
