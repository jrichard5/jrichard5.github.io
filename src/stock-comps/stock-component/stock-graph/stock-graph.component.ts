import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input, LOCALE_ID, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, shareReplay } from 'rxjs';
import { stockDataPoints } from './stockGraphInterfaces/stockDataInterface';
import { formatDate } from '@angular/common';
import { stockSubscriptionItem } from './stockGraphInterfaces/stockSubscriptionItem';

@Component({
  selector: 'app-stock-graph',
  templateUrl: './stock-graph.component.html',
  styleUrls: ['./stock-graph.component.css']
})
export class StockGraphComponent implements OnInit, OnChanges, OnDestroy{

  stockData : stockDataPoints[] = []
  stockDataSubscriptionArray : stockSubscriptionItem[] = [];
  stockDataSub$ !: Subscription;
  chart: any;
  is3SecondLoad : boolean = false;

  @Input()
  codeForGraph : string = "";


  stockChart = {
    title:{
      text: ""
    },
    theme: "dark1",
    axisX:{
      valueFormatString: "MMM YYYY"
    },
    data: [{
      type: "line",
      
      dataPoints: this.stockData
    }]
  }



  constructor(private http: HttpClient){

  }

  initComplete(){
    //console.log(this.stockData);

    // const myPromise : Promise<void> = new Promise( resolve => {
    //   setTimeout(() => {
    //     this.is3SecondLoad = true;
    //     console.log("inside my prmoise")
    //     resolve();
    //   }, 2500)
    // })
    // myPromise;

    setTimeout(() => {
      this.is3SecondLoad = true;
      console.log("inside my prmoise")
    }, 2500)
  }

  updateComplte(){
    this.updateChart();
  }

  getAPIString(completeFunction : () => void){
    
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let theDay = new Date().getDate();
    if(theDay >= 28){
      theDay = 28;
    }
    let counter = 12;
    let endMonth = new Date(year, month, theDay);
    let startMonth = new Date(year, month-12, theDay);
    let startString = formatDate(startMonth, 'yyyy-MM-dd', 'en-US')
    let endString = formatDate(endMonth, 'yyyy-MM-dd', 'en-US')

    let urlForMarketDataAPI = `https://api.marketdata.app/v1/stocks/candles/M/${this.codeForGraph}?from=${startString}&to=${endString}`

    // while(counter > 0){
    //   this.stockData.push({x: new Date(year, month-counter), y: counter})
    //   counter = counter-1;
    // };
    if(this.codeForGraph == "VIX"){
      urlForMarketDataAPI = `https://api.marketdata.app/v1/indices/candles/M/VIX?from=${startString}&to=${endString}`
    }

    if (!this.stockDataSubscriptionArray.some( item => item.urlString == urlForMarketDataAPI )){
      this.stockDataSubscriptionArray.push(
        {
          urlString: urlForMarketDataAPI, 
          sub: this.http.get<any>(urlForMarketDataAPI).pipe(shareReplay(10))
        })
    }
    else{
      
    }

    var foundSub = this.stockDataSubscriptionArray.find(item => item.urlString == urlForMarketDataAPI)?.sub ?? this.http.get<any>(urlForMarketDataAPI)

    this.stockDataSub$ =  foundSub
    .subscribe({
      next: (data)=>{
        for(let i = 0; i < data.c.length; i++){
          let something = new Date(data.t[i] * 1000)
          console.log(`Price: ${data.c[i]} at ${something.toString()}`)
        }
        
        if(Array.isArray(data.c)){
          data.c.forEach((item : number) => {
            this.stockData.push({x: new Date(year, month-counter), y: item})
            counter = counter-1;
          })
        }

        this.stockChart.data[0].dataPoints = this.stockData
        this.stockChart.title = {text: this.codeForGraph};
      },
      error(){
        alert("the api didn't get data :(, im noob programmer");
      },
      complete: () => {
        completeFunction.bind(this)();
      }
  })
    
  }


  ngOnChanges(changes: SimpleChanges): void {
    if(changes["codeForGraph"].firstChange){
      return;
    }
    if (changes['codeForGraph'].previousValue != changes['codeForGraph'].currentValue){
      this.stockData =  []
      this.getAPIString(this.updateChart)

      console.log(`on changes changed to ${this.codeForGraph}`);
      
    }
    
  }
  

  ngOnInit(): void {
    this.getAPIString(this.initComplete)
  }

  ngOnDestroy(): void {
    if (this.stockDataSub$){
      this.stockDataSub$.unsubscribe();
    }
  }

  getChartInstance(chart: object){
    this.chart = chart;
  }
  updateChart(){
    this.chart.render();
    console.log("inside then")
  }

}


  // stockChart = {
  //   title:{
  //     text: "something"
  //   },
  //   theme: "dark1",
  //   charts: [{
  //     axisX:{
  //       valueFormatString: "MMM YYYY"
  //     },
  //   data: [{
  //     type: "line",
      
  //     dataPoints: this.stockData
  //   }]
  // }]
    
  // }