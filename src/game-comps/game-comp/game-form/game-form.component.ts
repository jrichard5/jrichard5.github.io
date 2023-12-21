import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent {

  @Input()
  scoreBoard : Map<string, number> | undefined


  ngOnChanges(changes: SimpleChanges){
    let changeValue = changes['scoreBoard'].currentValue as Map<string, number>
    let oldValue = changes['scoreBoard'].previousValue as Map<string, number>
    let changeKeys = [...changeValue.keys()]
    let maybe = changeKeys.find(key => changeValue.get(key) != oldValue.get(key))
    if(maybe){
      this.scoreBoardChange(maybe);
    }
  }

  scoreBoardChange(keyForChange : string){
    let trId = `rowThingy${keyForChange}`
    let element = document.getElementById(trId);
    element?.classList.toggle("activePlusOne");
    element?.classList.toggle("activePlusOne");
  }
}
