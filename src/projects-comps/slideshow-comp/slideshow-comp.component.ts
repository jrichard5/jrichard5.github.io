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


  descIntoArray(desc : string) : string[] {
    let newString = desc.trimEnd();
    if(newString.endsWith(".")){
      newString = newString.slice(0,-1);
    }
    return newString.split(".");
  }


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

}
