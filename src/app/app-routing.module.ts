import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ProjectTableComponent } from './project-table/project-table.component';


const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'result', component: ProjectTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
