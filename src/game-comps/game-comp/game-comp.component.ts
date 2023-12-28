import { Component } from '@angular/core';

@Component({
  selector: 'app-game-comp',
  templateUrl: './game-comp.component.html',
  styleUrls: ['./game-comp.component.css']
})
export class GameCompComponent {

  scoreBoard : Map<string, number> | undefined
  keyString  : string | undefined

  updateScoreBoard(newMap: Map<string, number>){
    this.scoreBoard = newMap;
  }
  newScore(stringKey : string){
    this.keyString = stringKey;
  }
}
