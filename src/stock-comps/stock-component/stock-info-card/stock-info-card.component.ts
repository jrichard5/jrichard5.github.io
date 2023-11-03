import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { stockCardInfo } from '../stockInterfaces/stockCardInterface';

@Component({
  selector: 'app-stock-info-card',
  templateUrl: './stock-info-card.component.html',
  styleUrls: ['./stock-info-card.component.css']
})
export class StockInfoCardComponent implements OnInit {
  @Input()
  stockCardInfo : stockCardInfo = {"name": "", "price": 0, "quantity": 0}
  
  @Input()
  pastTotal : number = 0;

  @Output()
  codeSelected = new EventEmitter<string>();

  currentTotal : number = 0;
  deltaTotal : number = 0;

  constructor(){
    
  }
  ngOnInit(): void {
    this.currentTotal = this.stockCardInfo.price * this.stockCardInfo.quantity;
    this.deltaTotal = this.currentTotal - this.pastTotal;
  }


  emitStockCode(code : string){
    this.codeSelected.emit(code);
  }
}
