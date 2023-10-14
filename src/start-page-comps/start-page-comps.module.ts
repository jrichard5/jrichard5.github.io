import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageCompsRoutingModule } from './start-page-comps-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ExtraInfoComponent } from './extra-info/extra-info.component';
import { StaticTopNavBarComponent } from './static-top-nav-bar/static-top-nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion'; 


@NgModule({
  declarations: [
    AboutMeComponent,
    ResumeComponent,
    ExtraInfoComponent,
    StaticTopNavBarComponent
  ],
  imports: [
    CommonModule,
    StartPageCompsRoutingModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  exports:[
    StaticTopNavBarComponent
  ]
})
export class StartPageCompsModule { }
