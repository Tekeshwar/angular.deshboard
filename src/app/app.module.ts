import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { Chart } from 'angular-highcharts';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MaterialModule } from './material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card"
import { MatSidenavModule } from '@angular/material/sidenav';
import { HighchartsChartModule } from 'highcharts-angular';
import { ProviderComponent } from './components/provider/provider.component';
import { ProviderService } from './services/provider.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './components/home/home.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ColumnChartComponent } from './components/column-chart/column-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenubarComponent,
    ProviderComponent,
    HomeComponent,
    LineChartComponent,
    ColumnChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,   
     HighchartsChartModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule
    
     
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    ProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
