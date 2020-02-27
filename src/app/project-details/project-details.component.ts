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
  ) {}

  nameMap(name) {
    switch (name) {
      case 'no':
        return 'No';

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

      case 'epsomnNote':
        return 'Epsomn Note';

      case 'qty':
        return 'Qty';

      case 'pcsBoard':
        return 'Pcs Board';

      case 'unitPrice':
        return 'unitPrice';

      case 'amount':
        return 'amount';

      case 'dwStatus':
        return 'dwStatus';

      case 'remark':
        return 'remark';

      case 'renewDay':
        return 'renewDay';

      case 'productionDate':
        return 'productionDate';

      case 'createDate':
        return 'createDate';

      case 'industrySegment':
        return 'industrySegment';

      case 'top10':
        return 'top10';

      case 'regLineStatus':
        return 'regLineStatus';
      case 'note':
        return 'note';

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
              this.projects.push({
                item: this.nameMap(this.items[i]),
                value: this.values[i]
              });
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
