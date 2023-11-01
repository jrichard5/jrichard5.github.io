import { HttpClient } from '@angular/common/http';
import { Component, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {CanvasJSAngularStockChartsModule} from '@canvasjs/angular-stockcharts'
import { stockDataPoints } from './stockGraphInterfaces/stockDataInterface';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-stock-graph',
  templateUrl: './stock-graph.component.html',
  styleUrls: ['./stock-graph.component.css']
})
export class StockGraphComponent implements OnInit, OnDestroy{

  stockData : stockDataPoints[] = []
  stockDataSub$ !: Subscription

  stockChart = {
    title:{
      text: "something"
    },
    axisX:{
      valueFormatString: "MM YYYY"
    },
    data: [{
      type: "line",
      
      dataPoints: []
    }]
  }

  constructor(private http: HttpClient){

  }
  

  ngOnInit(): void {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let theDay = new Date().getDay();
    if(theDay >= 28){
      theDay = 28;
    }
    let counter = 12;
    let endMonth = new Date(year, month, theDay);
    let startMonth = new Date(year, month-12, theDay);
    console.log(startMonth + "  " +endMonth);
    let startString = formatDate(startMonth, 'yyyy-MM-dd', 'en-US')
    let endString = formatDate(endMonth, 'yyyy-MM-dd', 'en-US')
    

    this.stockDataSub$ = this.http.get<any>(`https://api.marketdata.app/v1/stocks/candles/M/AAPL?from=${startString}&to=${endString}`)
    .subscribe({
      next: (data)=>{
        console.log(data);
        if(Array.isArray(data.c)){
          data.c.forEach((item : number) => {
            this.stockData.push({x: new Date(year, month-counter), y: item})
            counter = counter-1;
          })
        }
      },
      error(){
        alert("the api didn't get data :(, im noob programmer");
      },
      complete: ()  => {
        console.log(this.stockData);
      }
    })
      
      
      
      
    //   data => {
    //   this.stockData = data.c;
    // })
  }

  ngOnDestroy(): void {
    if (this.stockDataSub$){
      this.stockDataSub$.unsubscribe();
    }
  }

}
