import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsCompsRoutingModule } from './projects-comps-routing.module';
import { SlideshowCompComponent } from './slideshow-comp/slideshow-comp.component';
import { ProjectNavCompComponent } from './slideshow-comp/project-nav-comp/project-nav-comp.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    SlideshowCompComponent,
    ProjectNavCompComponent
  ],
  imports: [
    CommonModule,
    ProjectsCompsRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class ProjectsCompsModule { }
