import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProviderComponent } from './components/provider/provider.component';
import { HomeComponent } from './components/home/home.component';
import { ProviderResolverService } from './services/provider-resolver.service';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },  
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      providerCountList: ProviderResolverService,
    },
    canActivate: [authGuard],
  },
  { path: 'home', component: HomeComponent },
  { path: 'provider', component: ProviderComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
