import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ProviderService } from '../../services/provider.service';
import { ProviderTermCount } from '../../Models/ProviderTermCount';
import { ProviderResolverService } from '../../services/provider-resolver.service';
import { ActivatedRoute } from '@angular/router';
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
  providersList: ProviderTermCount[] | undefined;
  $mctN_ID :string[]=[];
  $month: string[] =[];
  $npi: string[] =[];
  $valuE1: string[] =[];


  constructor(private route:ActivatedRoute, private providerSrvice:ProviderService ) {
    this.providersList = this.route.snapshot.data['providerCountList'];
    console.log(this.providersList?.map(obj=> parseInt(obj.mctN_ID)));
   }

  ngOnInit(): void {
   
    //this.loadChartData();
    this.loadChart();
    
  }

  loadChartData(){
    // this.providerSrvice.getTurmCount().subscribe({
    //   next: (res: ProviderTermCount[]) => {
    //   this.providersList = res;
    //   this.$mctN_ID = res.map(obj => obj.mctN_ID);
    //   this.$month = res.map(obj => obj.month);
    //   this.$npi = res.map(obj => obj.npi);
    //   this.$valuE1 = res.map(obj => obj.valuE1);
      
    //   console.log(this.$mctN_ID);
    //     this.loadChart();
    //   },
    //   error: (error: any) => {
    //     console.error('Error loading providers:', error);        
    //   }
    // });


  }

  loadChart(){
   
    console.log(this.$mctN_ID);
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
        //data: [10, 20, 25, 30, 35, 40, 45, 15, 40],
        //data: [10, 20],
        //data: this.$mctN_ID.map(obj=> parseInt(obj)),
        data: this.providersList?.map(obj=> parseInt(obj.mctN_ID)),
        step: 'right',
        name: 'mctN_ID'
    }, {
        //data: [35, 30, 40, 150, 60, 170, 80, 185, 90],
        //data : this.$npi.map(obj=> parseInt(obj)),
        data: this.providersList?.map(obj=> parseInt(obj.npi)),
        step: 'center',
        name: 'NIP'
    }, {
       // data: [100, 200, 300, 400, 500, 600, 700, 800, 900],
       //data : this.$valuE1.map(obj=> parseInt(obj)),
       data: this.providersList?.map(obj=> parseInt(obj.npi)),
        step: 'left',
        name: 'valuE1'
    }]as Highcharts.SeriesOptionsType[]
    };
  }

}
