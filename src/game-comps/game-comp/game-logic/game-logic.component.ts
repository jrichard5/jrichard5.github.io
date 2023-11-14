import { Component, OnInit, OnDestroy, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-game-logic',
  templateUrl: './game-logic.component.html',
  styleUrls: ['./game-logic.component.css']
})
export class GameLogicComponent implements OnInit, OnDestroy, AfterViewInit{
  
  

  width : number = 20
  movingDiv : movableDiv | undefined
  staticDivs : baseDiv[] = []
  interval : any 
  containerWidth : number = 0

  constructor(private el: ElementRef, private render: Renderer2){}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setup();
    }, 300);
    
  }

  ngOnInit(): void {
    //this.setup();
    
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  //Firefox guide
  //https://jsfiddle.net/jlr7245/teb4znk0/20/
  setup() : void {
    console.log("fromSetup");
    const container : HTMLElement = this.el.nativeElement.querySelector('.gameContainer') ;
    this.containerWidth = container?.clientWidth ?? 0
    let middleForCircle = (this.containerWidth / 2) - (this.width / 2);


    const newMoveableDiv = this.render.createElement('div');
    newMoveableDiv.setAttribute('style', `left:${middleForCircle}px; top: 0px; width: ${this.width}px; height: ${this.width}px`)
    newMoveableDiv.classList.add('collidable');
    this.render.appendChild(container, newMoveableDiv)
    this.movingDiv = new movableDiv(newMoveableDiv);
    

    // const staticDiv = this.render.createElement('div');
    // staticDiv.setAttribute('style', `left:${middleForCircle}px; top: ${100}px; width: ${this.width}px; height: ${this.width}px`)
    // staticDiv.classList.add('collidable')
    // this.render.appendChild(container, staticDiv);
    // this.staticDivs?.push(new baseDiv(staticDiv));

    this.setupStaticCricles();


    this.interval = setInterval(() => this.redrawMovingDiv(), 100);
    
  }

  collideFunction() : void {
    let hasJustCollided = false;
    const container : HTMLElement = this.el.nativeElement.querySelector('.gameContainer') ;
    if (this.staticDivs && this.movingDiv){
      this.staticDivs.forEach(staticDiv => {
      if (this.movingDiv){
        if (this.movingDiv.top > 500 - this.width){
          this.movingDiv.top =  10;
        }
        const dx = staticDiv.left - this.movingDiv.left
        const dy = staticDiv.top - this.movingDiv.top
        const distance = Math.sqrt(dx*dx + dy*dy)
        if (distance < staticDiv.radius + this.movingDiv.radius){
          hasJustCollided = true;
          if(!this.movingDiv.ref.classList.contains('collision-state')){
            this.movingDiv.ref.classList.add('collision-state');
          }
          let velocities = this.findNewVelocties( dx, dy)
          this.movingDiv.horiVelocity = velocities[0];
          this.movingDiv.downVelocity = velocities[1];
          if(this.movingDiv.downVelocity >= -1){
            this.movingDiv.downVelocity = -1;
            this.movingDiv.top = staticDiv.top - this.width;
          }
        }
        else if (this.movingDiv.ref.classList.contains('collision-state') && !hasJustCollided){
          this.movingDiv.ref.classList.remove('collision-state');
        }
      }
    });
    }
  }

  redrawMovingDiv() : void {
    if(this.movingDiv){
      this.movingDiv.onTick();
      this.movingDiv.ref.setAttribute('style', `height:${this.width}px; width:${this.width}px; left:${this.movingDiv.left}px; top: ${this.movingDiv.top}px; background-color: red;`);
      this.collideFunction();
    }
  }

  setupStaticCricles() : void {
    const howManyRows = 5;
    for(let i = 0; i<howManyRows; i++){
      if(i % 2 == 0){
        this.setupEvenStaticCircles(i);
      }
      else {
        this.setupOddStaticCircles(i);
      }
    }
  }

  setupOddStaticCircles(rowNumber : number) : void {
    let numberOfCirclesNeeded = (rowNumber) + 2;
    const container : HTMLElement = this.el.nativeElement.querySelector('.gameContainer');
    let middleForCircle = (this.containerWidth / 2);
    let spaceInBetween = this.width * 3;
    let leftPixelCount = middleForCircle - spaceInBetween;
    let rightPixelCount = middleForCircle + spaceInBetween;
    let thisRowHeight = 100 + (rowNumber * (this.width * 3));

    for(let i = 0; i<numberOfCirclesNeeded; i++){
      if(i == 0){
        const staticDiv = this.render.createElement('div');
        staticDiv.setAttribute('style', `left:${middleForCircle - (this.width / 2)}px; top: ${thisRowHeight}px; width: ${this.width}px; height: ${this.width}px`)
        staticDiv.classList.add('collidable')
        this.render.appendChild(container, staticDiv);
        this.staticDivs?.push(new baseDiv(staticDiv));
      }
      else if (i % 2 == 0){
        const staticDiv = this.render.createElement('div');
        staticDiv.setAttribute('style', `left:${rightPixelCount}px; top: ${thisRowHeight}px; width: ${this.width}px; height: ${this.width}px`)
        rightPixelCount = rightPixelCount + spaceInBetween;
        staticDiv.classList.add('collidable')
        this.render.appendChild(container, staticDiv);
        this.staticDivs?.push(new baseDiv(staticDiv));
      }
      else{
        const staticDiv = this.render.createElement('div');
        staticDiv.setAttribute('style', `left:${leftPixelCount}px; top: ${thisRowHeight}px; width: ${this.width}px; height: ${this.width}px`)
        leftPixelCount = leftPixelCount - spaceInBetween;
        staticDiv.classList.add('collidable')
        this.render.appendChild(container, staticDiv);
        this.staticDivs?.push(new baseDiv(staticDiv));
      }
    }

  }

  setupEvenStaticCircles(rowNumber : number) : void {
    let numberOfCirclesNeeded = (rowNumber) + 2;
    
    const container : HTMLElement = this.el.nativeElement.querySelector('.gameContainer');
    let middleForCircle = (this.containerWidth / 2);
    let spaceInBetween = this.width * 3;
    let leftPixelCount = middleForCircle - (spaceInBetween / 2);
    let rightPixelCount = middleForCircle + (spaceInBetween / 2);
    //4 because only even rows (so x2 to skip a row)
    let thisRowHeight = 100 + (rowNumber * (this.width * 3) )

    for(let i = 0; i<numberOfCirclesNeeded; i++){
      if(i % 2 == 0){
        const staticDiv = this.render.createElement('div');
        staticDiv.setAttribute('style', `left:${leftPixelCount}px; top: ${thisRowHeight}px; width: ${this.width}px; height: ${this.width}px`)
        leftPixelCount = leftPixelCount - spaceInBetween;
        staticDiv.classList.add('collidable')
        this.render.appendChild(container, staticDiv);
        this.staticDivs?.push(new baseDiv(staticDiv));
      }
      else{
        const staticDiv = this.render.createElement('div');
        staticDiv.setAttribute('style', `left:${rightPixelCount}px; top: ${thisRowHeight}px; width: ${this.width}px; height: ${this.width}px`)
        rightPixelCount = rightPixelCount + spaceInBetween;
        staticDiv.classList.add('collidable')
        this.render.appendChild(container, staticDiv);
        this.staticDivs?.push(new baseDiv(staticDiv));
      }
    }
  }

  findNewVelocties(dx: number, dy: number) : [number, number]{
    let returnArray : [number, number]= [0, 0]
    if (dx == 0){
      let randomValue = this.getRandomArbitrary(-1, 1) * 7;
      if (randomValue > -4 && randomValue < 4){
        randomValue = this.getRandomArbitrary(-1, 1) * 7;
      }
      returnArray[0] = randomValue;
    }
    else if(dx < 0){
      returnArray[0] = this.getRandomArbitrary(1, 3) * 4
    }
    else if (dx > 0){
      returnArray[0] = this.getRandomArbitrary(-3, 1) * 4;
    }

    if(dy > (this.width) - (this.width / 10)){
      returnArray[1] = this.getRandomArbitrary(1, 3) * 3
    }
    else if(dy > (this.width) - (this.width / 5)){
      returnArray[1] = this.getRandomArbitrary(1, 2) * 3
    }
    else if (dy < 0){
      returnArray[1] = -2;
    }
    else{
      returnArray[1] = 1;
    }

    return returnArray

  }

   getRandomArbitrary(min : number, max : number) {
    return Math.random() * (max - min) + min;
  }
  

}

class baseDiv {

  left : number
  top : number
  radius : number
  

 constructor(ref : HTMLElement){
  
  this.radius = ref.getBoundingClientRect().height / 2;
  let leftString : number = parseFloat(parseFloat(window.getComputedStyle(ref).getPropertyValue("left").replace(/px/g, '')).toFixed(2));
  this.left = leftString
  console.log(this.left);
  let topString : number = parseFloat(parseFloat(window.getComputedStyle(ref).getPropertyValue("top").replace(/px/g, '')).toFixed(2));
  this.top = topString
  console.log(window.getComputedStyle(ref).getPropertyValue("top").replace(/px/g, ''));

 }
}
 class movableDiv extends baseDiv{
  ref : HTMLElement
  downVelocity: number;
  horiVelocity: number;
  constructor(ref : HTMLElement){
    
    super(ref);
    this.ref = ref;
    this.downVelocity = 0;
    this.horiVelocity = 0;
  }

  onTick() : void {
      if (this.downVelocity < 5){
        this.downVelocity = this.downVelocity + 1
      }
      if (this.horiVelocity > 0){
        this.horiVelocity = this.horiVelocity - 1;
      }
      if (this.horiVelocity < 0){
        this.horiVelocity = this.horiVelocity + 1;
      }

      this.top = this.top + this.downVelocity;
      this.left = this.left + this.horiVelocity;
    }
}


