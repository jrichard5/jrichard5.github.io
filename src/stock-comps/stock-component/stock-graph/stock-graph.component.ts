import { HttpClient } from '@angular/common/http';
import { Component, HostListener, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { stockDataPoints } from './stockGraphInterfaces/stockDataInterface';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-stock-graph',
  templateUrl: './stock-graph.component.html',
  styleUrls: ['./stock-graph.component.css']
})
export class StockGraphComponent implements OnInit, OnDestroy{

  stockData : stockDataPoints[] = []
  stockDataSub$ !: Subscription;
  chart: any;
  is3SecondLoad : boolean = false;


  stockChart = {
    title:{
      text: "something"
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

  constructor(private http: HttpClient){

  }
  

  ngOnInit(): void {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let theDay = new Date().getDate();
    if(theDay >= 28){
      theDay = 28;
    }
    let counter = 12;
    let endMonth = new Date(year, month, theDay);
    let startMonth = new Date(year, month-12, theDay);
    console.log(startMonth + "  " +endMonth);
    let startString = formatDate(startMonth, 'yyyy-MM-dd', 'en-US')
    let endString = formatDate(endMonth, 'yyyy-MM-dd', 'en-US')
    

    
    
    while(counter > 0){
      this.stockData.push({x: new Date(year, month-counter), y: counter})
      counter = counter-1;
    };

    setTimeout(() => {this.is3SecondLoad = true;}, 3000);
    

    // this.stockDataSub$ = this.http.get<any>(`https://api.marketdata.app/v1/stocks/candles/M/AAPL?from=${startString}&to=${endString}`)
    // .subscribe({
    //   next: (data)=>{
    //     console.log(data);
    //     if(Array.isArray(data.c)){
    //       data.c.forEach((item : number) => {
    //         this.stockData.push({x: new Date(year, month-counter), y: item})
    //         counter = counter-1;
    //       })
    //     }
    //   },
    //   error(){
    //     alert("the api didn't get data :(, im noob programmer");
    //   },
    //   complete: ()  => {
    //     console.log(this.stockData);
        
    //   }
    // })
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
  }

}
