import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonCompsModule } from 'src/common-comps/common-comps.module';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StartPageCompsModule } from 'src/start-page-comps/start-page-comps.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonCompsModule,
    //NoopAnimationsModule,
    BrowserAnimationsModule,
    StartPageCompsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
