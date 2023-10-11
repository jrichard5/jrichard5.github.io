import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReadJsonServiceService } from '../Services/read-json-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  email : string = "";
  phoneNumber : string = "";
  linkedInURL : string = "";
  githubURL : string = "";

  jsonSubscription$ !: Subscription
  

constructor(private json: ReadJsonServiceService){
}
  

  ngOnInit(): void {
    this.jsonSubscription$ = this.json.getAssetJsonFunction().subscribe(data => {
      this.email = data.email;
      this.phoneNumber = data.phoneNumber;
      this.linkedInURL = data.LinkedInURL;
      this.githubURL = data.GithubURL;
    });
  }

  ngOnDestroy(): void {
    if(this.jsonSubscription$){
      this.jsonSubscription$.unsubscribe();
    }
  }

}
