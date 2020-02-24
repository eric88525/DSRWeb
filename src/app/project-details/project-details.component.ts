import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../project';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  opportunity;
  project: Project;
  partNumbers = [];
  items = [];
  values = [];
  projects = [];
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) { }

  nameMap(name) {
    switch (name) {
      case 'customerNameCN':
        return '客戶名稱(CN)';

      case 'customerNameEN':
        return '客戶名稱(EN)';

      case 'region':
        return 'Region';

      case 'sales':
        return 'Sales';

      case 'programName':
        return 'Program Name';

      case 'prodLine':
        return 'prodLine';

      case 'partNumber':
        return 'partNumber';

      case 'projectUnits':
        return 'projectUnits';

      case 'qtyBoard':
        return 'qtyBoard';

      case 'asp':
        return 'asp';

      case 'amount':
        return 'amount';

      case 'confidencePercent':
        return 'confidencePercent';

      case 'productionDate':
        return 'productionDate';

      case 'supportNeeded':
        return 'supportNeeded';

      case 'update':
        return 'update';

      case 'top10':
        return 'top10';

      case 'opportunity':
        return 'opportunity';

      case 'createdDate':
        return 'createdDate';
      default:
        break;
    }
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      const id = data.projectId;
      this.opportunity = id;
      this.projectService.getProject(id).subscribe((result: any) => {
        if (result.error) {
          alert('Project not exist!');
          this.router.navigate(['/']);
        } else {
          if (result.project) {
            this.project = result.project;
            this.items = Object.keys(this.project);
            this.values = Object.values(this.project);
            for (let i = 0; i < this.items.length; i++) {
              this.projects.push(
                {
                  item: this.nameMap(this.items[i]),
                  value: this.values[i]
                }
              );
            }
          }
          if (result.partNumbers) {
            this.partNumbers = result.partNumbers;
          }
        }
      });
    });
  }
}
