import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReadJsonServiceService } from '../Services/read-json-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
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
