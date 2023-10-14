import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from 'src/start-page-comps/about-me/about-me.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutMeComponent},
  {path: 'projects', loadChildren: ()=>import('../projects-comps/projects-comps.module').then(m => m.ProjectsCompsModule)},
  {path: 'stocks', loadChildren: ()=>import('../stock-comps/stock-comps.module').then(m => m.StockCompsModule)},
  {path: 'game', loadChildren: ()=>import('../game-comps/game-comps.module').then(m => m.GameCompsModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
