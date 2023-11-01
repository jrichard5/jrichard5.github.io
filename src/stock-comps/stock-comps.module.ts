import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockCompsRoutingModule } from './stock-comps-routing.module';
import { StockComponentComponent } from './stock-component/stock-component.component';
import { StockInfoCardComponent } from './stock-component/stock-info-card/stock-info-card.component';
import { HttpClientModule } from '@angular/common/http';
import { StockGraphComponent } from './stock-component/stock-graph/stock-graph.component';


@NgModule({
  declarations: [
    StockComponentComponent,
    StockInfoCardComponent,
    StockGraphComponent
  ],
  imports: [
    CommonModule,
    StockCompsRoutingModule,
    HttpClientModule
  ]
})
export class StockCompsModule { }
