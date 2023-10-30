import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponentComponent } from './stock-component/stock-component.component';

const routes: Routes = [
  {path: '', component: StockComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockCompsRoutingModule { }
