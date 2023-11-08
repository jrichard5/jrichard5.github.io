import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameCompsRoutingModule } from './game-comps-routing.module';
import { GameCompComponent } from './game-comp/game-comp.component';


@NgModule({
  declarations: [
    GameCompComponent
  ],
  imports: [
    CommonModule,
    GameCompsRoutingModule
  ]
})
export class GameCompsModule { }
