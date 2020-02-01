import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
import {Project} from '../project';
@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})

export class ProjectTableComponent implements OnInit {

  constructor(private projectService: ProjectService) { }
  projects: Project[];
  getProjects() {
    this.projectService.getProjects().subscribe(
      (data: Project[]) => this.projects = data
    );
    // alert(this.projects);
  }
  ngOnInit() {
    this.getProjects();
  }
}
