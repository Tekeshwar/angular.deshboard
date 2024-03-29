import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
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

Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  constructor() { }

  ngOnInit(): void {
   
    const data = [
      { month: 'January', count: 10 },
      { month: 'February', count: 15 },
      { month: 'March', count: 8 },
      { month: 'April', count: 10 },
      { month: 'May', count: 15 },
      { month: 'June', count: 8 },
      { month: 'July', count: 10 },
      { month: 'August', count: 15 },
      { month: 'September', count: 8 },
      { month: 'October', count: 10 },
      { month: 'November', count: 15 },
      { month: 'December', count: 8 }
      
    ];

    // Prepare data for Highcharts
    const categories = data.map(item => item.month);
    const counts = data.map(item => item.count);

    // Set up chart options
    this.chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Month-wise Count'
      },
      xAxis: {
        categories: categories,
        title: {
          text: 'Month'
        }
      },
      yAxis: {
        title: {
          text: 'Count'
        }
      },
      series: [{
        data: [10, 20, 25, 30, 35, 40, 45, 15, 40],
        step: 'right',
        name: 'Right'
    }, {
        data: [35, 30, 40, 150, 60, 170, 80, 185, 90],
        step: 'center',
        name: 'Center'
    }, {
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        step: 'left',
        name: 'Left'
    }]as Highcharts.SeriesOptionsType[]
    };
  }

}
