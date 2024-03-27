import { Component } from '@angular/core';
//import { Chart } from 'angular-highcharts'; 
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  // lineChart = new Chart({
  //   chart: {
  //     type: 'line'
  //   },
  //   title: {
  //     text: 'Linechart'
  //   },
  //   credits: {
  //     enabled: false
  //   },
  //   series: [
  //     {
  //       name: "EMPLOYEES",
  //       type: "spline",
  //       data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
  //     },
  //     {
  //       type: "spline",
  //       data:[677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654],
  //       name: "YEAR",
  //       color: "#3183F5"
  //     }
  //   ]
    
  // });

  Highcharts: typeof Highcharts = Highcharts;
   
  chartOptions: Highcharts.Options = {
    series: [{
      data: [50, 40, 60, 45, 70, 42, 60],
      type: 'line'
    }]
  };
  
}
