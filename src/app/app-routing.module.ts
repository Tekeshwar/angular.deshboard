import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProviderComponent } from './components/provider/provider.component';
import { HomeComponent } from './components/home/home.component';
import { ProviderResolverService } from './services/provider-resolver.service';

const routes: Routes = [
  {path:'',component:DashboardComponent}, 
  {
    path: 'dashboard',
    component:DashboardComponent,
    resolve:{
      providerCountList: ProviderResolverService
    }
  },
  {path:'home',component:HomeComponent},
  {path:'provider',component:ProviderComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
