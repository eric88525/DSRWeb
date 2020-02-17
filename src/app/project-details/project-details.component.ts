import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProjectService} from '../project.service';
import { Project } from '../project';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project;
  partNumbers = [] as string[];
  constructor(private route: ActivatedRoute, private projectService: ProjectService, private router: Router  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      const id = data.projectId;
      this.projectService.getProject(id).subscribe(( result: any) => {
        if (result.error) {
          alert('Project not exist!');
          this.router.navigate(['/']);
        } else {
          if (result.project) {
            this.project = result.project;
            this.partNumbers = result.partNumbers;
          }
          console.log(this.project);
          console.log(this.partNumbers);
        }
      });
    });


  }

}
