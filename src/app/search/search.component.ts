import { Component, OnInit } from '@angular/core';
import {Project} from '../project';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = {} as Project;
  result = {} as Project[];
  showProjects = 0;
  constructor(private projectService: ProjectService) { }
  Search() {
    console.log(this.search.programName);
    this.projectService.searchProjects(this.search).subscribe(
      (data: Project[]) => this.result = data
    );
    console.log(this.result);
  }
  ngOnInit() {
    this.search.programName = '';
    this.search.partNumber = '';
  }

}
