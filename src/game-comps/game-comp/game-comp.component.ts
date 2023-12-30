import { Component } from '@angular/core';
import { formInfoInterface } from '../gameInterfaces/formUpdates';

@Component({
  selector: 'app-game-comp',
  templateUrl: './game-comp.component.html',
  styleUrls: ['./game-comp.component.css']
})
export class GameCompComponent {

  scoreBoard : Map<string, number> | undefined
  keyString  : string | undefined
  formInfo : formInfoInterface | undefined


  updateScoreBoard(newMap: Map<string, number>){
    this.scoreBoard = newMap;
  }
  newScore(stringKey : string){
    this.keyString = stringKey;
  }
  updateForm(newInfo : formInfoInterface){
    this.formInfo = newInfo
  }
}
