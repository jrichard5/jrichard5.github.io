import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsCompsRoutingModule } from './projects-comps-routing.module';
import { SlideshowCompComponent } from './slideshow-comp/slideshow-comp.component';


@NgModule({
  declarations: [
    SlideshowCompComponent
  ],
  imports: [
    CommonModule,
    ProjectsCompsRoutingModule
  ]
})
export class ProjectsCompsModule { }
