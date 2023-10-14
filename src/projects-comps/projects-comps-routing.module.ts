import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowCompComponent } from './slideshow-comp/slideshow-comp.component';

const routes: Routes = [
  {path: '', component: SlideshowCompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsCompsRoutingModule { }
