import { Component, OnInit } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrl: './column-chart.component.scss'
})
export class ColumnChartComponent implements OnInit {

  // Initialize Highcharts
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
        type: 'column'
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
        name: 'Count',
        data: counts
      }] as Highcharts.SeriesOptionsType[]
    };
  }

}
