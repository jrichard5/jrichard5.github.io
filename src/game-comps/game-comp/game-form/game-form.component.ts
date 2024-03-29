import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { formInfoInterface } from 'src/game-comps/gameInterfaces/formUpdates';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css'],
  animations: [
    trigger('addOne', [
      transition(':enter', [
        style({opacity: 1, left: '0px'}),
        animate(2000, style({opacity: 0, left: '50px'}))
      ]),
      transition(':leave', [
        animate(2000, style({opacity: 0}))
      ])
    ])
  ]

  //   trigger('addOne', [
  //   state('hidden', style({
  //     display: 'hidden'
  //   })),
  //   state('showStart', style({
  //     display: 'absolute',
  //     opacity: '1'
  //   })),
  //   state('showEnd', style({
  //     left: '50px',
  //     opacity: '0'
  //   })),
  //   transition('showStart => showEnd',[
  //     animate(1000)
  // ]),
  // ]),
})
export class GameFormComponent implements OnInit{

  isAnimateInProgress : boolean = false;

  formInfo : formInfoInterface = {
    msPerTick : 50,
    numberOfRows : 5
  }

  @Output()
  formEventChange = new EventEmitter<formInfoInterface>();

  @Input()
  scoreBoard: Map<string, number> | undefined

  private _recentScoreChange: string | undefined
  @Input()
  set recentScoreChange(value: string | undefined){
    this._recentScoreChange = value;
    this.isAnimateInProgress = true;
  }
  get recentScoreChange() : string | undefined{
    return this._recentScoreChange
  }

  formForGame !: FormGroup



  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.formForGame = this.fb.group({
      msPerTick: new FormControl("50",[Validators.required, Validators.max(2001), Validators.min(30), Validators.pattern("^[0-9]*$")]),
      numberOfRows: ["5", [Validators.required, Validators.max(7), Validators.min(2), Validators.pattern("^[0-9]*$")]]
    })
  }

  onAnimationEvent(event: AnimationEvent){
      this.isAnimateInProgress = false;
  }

  changeValues(){
    let ms = parseInt(this.formForGame.get("msPerTick")?.value)
    let rows = parseInt(this.formForGame.get("numberOfRows")?.value)
    if (ms && rows){
      this.formInfo = {
        msPerTick : ms,
        numberOfRows : rows
      }
      this.formEventChange.emit(this.formInfo);
    }
  }


}
