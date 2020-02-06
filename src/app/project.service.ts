import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Project} from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  Url = 'http://127.0.0.1/api/';

  constructor(private http: HttpClient) { }

  getProjects() {
    console.log('get pjs');
    return this.http.get(this.Url + 'projects');
  }
  searchProjects(project) {
    return this.http.post(this.Url + 'search', project);
  }

}
