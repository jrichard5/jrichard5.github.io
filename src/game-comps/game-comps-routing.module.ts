import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCompComponent } from './game-comp/game-comp.component';

const routes: Routes = [
  {path:'', component: GameCompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameCompsRoutingModule { }
