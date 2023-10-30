import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReadJsonServiceService } from 'src/common-comps/Services/read-json-service.service';
import { project } from '../Interface/projectData'
import { Subscription, delay } from 'rxjs';
import { slideShowCard } from '../Interface/slideShowCard';

@Component({
  selector: 'app-slideshow-comp',
  templateUrl: './slideshow-comp.component.html',
  styleUrls: ['./slideshow-comp.component.css']
})
export class SlideshowCompComponent implements OnInit, OnDestroy {

  projects: project[] = [];
  projectTitles: string[] = [];
  jsonSubscription$ !: Subscription;
  isFiveSecLoad : boolean = false;
  currentProject : project | undefined;
  currentSlide : slideShowCard | undefined;
  currentDescriptionArray : string[] = []
  currentIndex : number = 0;


  constructor(private json: ReadJsonServiceService){
    setTimeout( ()=> {this.isFiveSecLoad = true}, 500) 
  }
 
  ngOnInit(): void {
    this.jsonSubscription$ = this.json.getAssetJsonFunction().subscribe((data) =>{
      this.projects = data.projects;
      this.projectTitles = this.projects.map(project => project.projectTitle)
      this.currentProject = this.projects[0];
      this.currentSlide = this.currentProject.slideshow[0];
      this.currentDescriptionArray = this.descIntoArray(this.currentSlide.description);
    });
  }

  ngOnDestroy(): void {
    if (this.jsonSubscription$){
      this.jsonSubscription$.unsubscribe();
    }
  }


  //#region event handlers

  titleSelectedHandler(title : string){
    this.currentProject = this.projects.find((project) => project.projectTitle == title);
    this.currentIndex = 0;
    this.assignNewSlideValues();

  }
  leftButtonHandler(){
    if(this.currentProject){
      if (this.currentIndex > 0){
        this.currentIndex--;
        this.assignNewSlideValues();
      }
      else{
        this.currentIndex = this.currentProject.slideshow.length - 1;
        this.assignNewSlideValues();
      }
    }
  }

  rightButtonHandler(){
    if(this.currentProject){
      // 16 = length.  so 15 = max index.  15-1 then plus +1 = 15
      if (this.currentIndex + 1 < this.currentProject.slideshow.length){
        this.currentIndex++;
        this.assignNewSlideValues();
      }
      else{
        this.currentIndex = 0;
        this.assignNewSlideValues();
      }
    }
  }

  
  //#endregion

  //#region private/helper functions
  //private / helper functions
  private descIntoArray(desc : string) : string[] {
    let newString = desc.trimEnd();
    if(newString.endsWith(".")){
      newString = newString.slice(0,-1);
    }
    return newString.split(".");
  }

  private assignNewSlideValues(){
    if(this.currentProject){
      this.currentSlide = this.currentProject.slideshow[this.currentIndex];
      this.currentDescriptionArray = this.descIntoArray(this.currentSlide.description);
    }
  }

  enlargeImg(){
    let img = document.getElementById("pic");
    img?.classList.toggle("enlarge");
    let Ux = document.getElementById("UXTextHelp");
    Ux?.classList.toggle("hide");
  }
  //#endregion
}
