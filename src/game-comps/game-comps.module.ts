import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameCompsRoutingModule } from './game-comps-routing.module';
import { GameCompComponent } from './game-comp/game-comp.component';
import { GameLogicComponent } from './game-comp/game-logic/game-logic.component';
import { GameFormComponent } from './game-comp/game-form/game-form.component';


@NgModule({
  declarations: [
    GameCompComponent,
    GameLogicComponent,
    GameFormComponent
  ],
  imports: [
    CommonModule,
    GameCompsRoutingModule
  ]
})
export class GameCompsModule { }
