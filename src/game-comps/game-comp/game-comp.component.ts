import { Component } from '@angular/core';

@Component({
  selector: 'app-game-comp',
  templateUrl: './game-comp.component.html',
  styleUrls: ['./game-comp.component.css']
})
export class GameCompComponent {

  scoreBoard : Map<string, number> | undefined

  updateScoreBoard(newMap: Map<string, number>){
    this.scoreBoard = newMap;
    console.log(this.scoreBoard);
  }
}
