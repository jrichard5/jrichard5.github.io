import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-static-top-nav-bar',
  templateUrl: './static-top-nav-bar.component.html',
  styleUrls: ['./static-top-nav-bar.component.css']
})
export class StaticTopNavBarComponent implements OnDestroy {
ngOnDestroy(): void {
  console.log("desotyred!!!!!!")
}

private scrollById(idName : string){
  let vertPostion = 0
  if (document.getElementById(idName)){
    vertPostion = (document.getElementById(idName)!.offsetTop - 50)
  }
  window.scrollTo(0, vertPostion);
}

scrollToExtraInfo() {
  this.scrollById("ExtraInfoDataTarget");
}
scrollToProjects() {
 this.scrollById("ProjectsDataTarget")
}
scrollToStockCharts() {
 this.scrollById("StockChartsDataTarget")
}
scrollToResume() {
 this.scrollById("ResumeDataTarget")
}

}
