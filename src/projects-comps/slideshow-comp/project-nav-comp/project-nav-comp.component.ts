import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project-nav-comp',
  templateUrl: './project-nav-comp.component.html',
  styleUrls: ['./project-nav-comp.component.css']
})
export class ProjectNavCompComponent {
  @Input()
  projectNames : string[] = [];

  @Output()
  titleSelected = new EventEmitter<string>();

  selectTitle(title : string){
    {this.titleSelected.emit(title)}
  }
}
