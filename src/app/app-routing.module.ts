import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProviderComponent } from './components/provider/provider.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:DashboardComponent}, 
  {path: 'dashboard', component:DashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'provider',component:ProviderComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
