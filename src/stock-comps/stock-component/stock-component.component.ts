import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReadJsonServiceService } from 'src/common-comps/Services/read-json-service.service';
import { stockCardInfo } from './stockInterfaces/stockCardInterface';
import { HttpClient } from '@angular/common/http';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-stock-component',
  templateUrl: './stock-component.component.html',
  styleUrls: ['./stock-component.component.css']
})
export class StockComponentComponent implements OnInit, OnDestroy {

  aaplInfoPast : stockCardInfo = {"name": "", "price": 0, "quantity": 0}
  vixInfoPast : stockCardInfo = {"name": "", "price": 0, "quantity": 0}

  aaplPastTotal : number = 0;
  vixPastTotal : number = 0;

  aaplInfoCurrent : stockCardInfo = {"name": "", "price": 0, "quantity": 0}
  vixInfoCurrent : stockCardInfo = {"name": "", "price": 0, "quantity": 0}

  jsonSubscription$ !: Subscription
  marketDataSub$ !: Subscription
  marketDataSub2$ !: Subscription

  showCards : boolean = true;

  constructor(private json: ReadJsonServiceService, private http : HttpClient){

  }
  
  helperfunction(){
    this.showCards = true;
  }

  ngOnInit(): void {
    this.jsonSubscription$ = this.json.getAssetJsonFunction().subscribe(data => {
      this.aaplInfoPast = data.AppleStocks;
      this.vixInfoPast = data.VixStocks;
      this.aaplInfoCurrent.name = this.aaplInfoPast!.name;
      this.aaplInfoCurrent.quantity = this.aaplInfoPast!.quantity;
      this.vixInfoCurrent.name = this.vixInfoPast!.name;
      this.vixInfoCurrent.quantity = this.vixInfoPast!.quantity;
      this.aaplPastTotal = this.aaplInfoPast.price * this.aaplInfoPast.quantity;
      this.vixPastTotal = this.vixInfoPast.price * this.vixInfoPast.quantity;
    }
    );

    
    
    // this.marketDataSub$ = this.http.get<any>('https://api.marketdata.app/v1/stocks/quotes/AAPL/').subscribe(data => {
    //   this.aaplInfoCurrent.price = data.mid;
    //   console.log(data);
    // })

    // this.marketDataSub2$ = this.http.get<any>('https://api.marketdata.app/v1/stocks/quotes/VIX/').subscribe(data => {
    //   this.vixInfoCurrent.price = data.mid;
    //   console.log(data);
    // })


    // this.jsonSubscription$ = this.json.getAssetJsonFunction().subscribe({
    //   next: () =>{
    //     this.helperfunction();
    //     this.aaplInfoCurrent;
    //   },
    //   complete: () =>{
    //     this.aaplInfoCurrent;
    //   }
    //   // next(value) {
    //   //   console.log("hi")
    //   // },
    //   // error(){},
    //   // complete(){} 
    // });
  }

  ngOnDestroy(): void {
    if(this.jsonSubscription$){
      this.jsonSubscription$.unsubscribe();
    }
    if(this.marketDataSub$){
      this.marketDataSub$.unsubscribe();
    }
    if(this.marketDataSub2$){
      this.marketDataSub2$.unsubscribe();
    }
  }


  currentPriceClickHandler(){
    let currentPriceDiv = document.getElementById("currentPriceDiv");
    let currentPriceCard = document.querySelector("#currentPriceDiv")?.querySelectorAll("app-stock-info-card")
    let totalButton = document.querySelector("#currentPriceDiv")?.querySelector("button");
    this.showCards = false;
    
    if (currentPriceDiv){
      currentPriceDiv.style.width = "25%";
      currentPriceCard?.forEach((card) => {
        (card as HTMLElement).style.margin = "3% 0%";
      })
    }
    if (totalButton){
      totalButton.style.display = "relative";
      totalButton.style.opacity = "1";
    }
  }

  reverseStyleChilkHandler(){
    let currentPriceDiv = document.getElementById("currentPriceDiv");
    let currentPriceCard = document.querySelector("#currentPriceDiv")?.querySelectorAll("app-stock-info-card")
    let totalButton = document.querySelector("#currentPriceDiv")?.querySelector("button");
    this.showCards = true;
    if (currentPriceDiv){
      currentPriceDiv.style.width = "100%";
      currentPriceCard?.forEach((card) => {
        (card as HTMLElement).style.margin = "10% 0%";
      })
    }
    if (totalButton){
      totalButton.style.display = "hidden";
      totalButton.style.opacity = "0";
    }
  }

  
}
