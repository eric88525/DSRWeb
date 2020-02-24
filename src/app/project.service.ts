import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Project} from './project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {




  constructor(private http: HttpClient) { }

  getProjects() {
    console.log('get pjs');
    return this.http.get(environment.api + 'projects', {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    });
  }
  searchProjects(project) {
    return this.http.post(environment.api + 'search', project, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    });
  }
  getProject(id) {
    return this.http.get(environment.api + 'projects/' + id, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    });
  }
}
