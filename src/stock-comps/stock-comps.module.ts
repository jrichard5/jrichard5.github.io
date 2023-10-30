import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockCompsRoutingModule } from './stock-comps-routing.module';
import { StockComponentComponent } from './stock-component/stock-component.component';
import { StockInfoCardComponent } from './stock-component/stock-info-card/stock-info-card.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StockComponentComponent,
    StockInfoCardComponent
  ],
  imports: [
    CommonModule,
    StockCompsRoutingModule,
    HttpClientModule
  ]
})
export class StockCompsModule { }
