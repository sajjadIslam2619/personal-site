import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ResearchWorkComponent } from './research-work/research-work.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { FindMeComponent } from './find-me/find-me.component';


const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'work', component: WorkComponent},
  {path: 'researchWork', component: ResearchWorkComponent},
  {path: 'education', component: EducationComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'findMe', component: FindMeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
