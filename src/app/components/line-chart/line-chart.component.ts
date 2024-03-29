import { Component, OnInit } from '@angular/core';
//import * as Highcharts from 'highcharts/highcharts';
//import HighchartsExporting from 'highcharts/modules/exporting';

// Initialize the exporting module
//HighchartsExporting(Highcharts);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnInit {
//   Highcharts: typeof Highcharts = Highcharts;

//   chartOptions: Highcharts.Options = {
//     title: {
//       text: 'Monthly Data'
//     },
//     xAxis: {
//       categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//     },
//     yAxis: {
//       title: {
//         text: 'Count'
//       }
//     },
//     series: [{
//       name: 'Count',
//       data: [10, 20, 15, 25, 30, 35, 40, 45, 50, 55, 60, 65] 
//     }] as Highcharts.SeriesOptionsType[],
//     credits: {
//       enabled: false
//     },
//     exporting: {
//       enabled: true
//     }
//   };

  constructor() { }

   ngOnInit(): void {
//     // Dynamically load the exporting module
//     import('highcharts/modules/exporting').then((HighchartsExporting) => {
//       HighchartsExporting.default(Highcharts);
//     });
  }

}
