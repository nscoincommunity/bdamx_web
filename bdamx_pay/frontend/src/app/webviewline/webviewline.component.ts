import { Component, OnInit } from '@angular/core';
import { ChartType,ChartDataSets, ChartOptions } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { ApiService } from '../services/apiService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-webviewline',
  templateUrl: './webviewline.component.html',
  styleUrls: ['./webviewline.component.css']
})
export class WebviewlineComponent implements OnInit {
	public lineChartData: ChartDataSets[] =[];
  public lineChartLabels: Label[] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
      yAxes: [
        {
          display: false
        },
        {
          id: 'y-axis-0',
          position: 'left',
          // display: false,
        },
        {
          id: 'y-axis-1',
          position: 'right',
          display: false,
          gridLines: {
            // display: false,
            // drawBorder: false,
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgb(25,98,132)',
      borderColor: 'rgb(25,98,132)',
      pointBackgroundColor: 'rgb(25,98,132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(25,98,132)'
    },
    { // dark grey
      backgroundColor: 'rgb(121,142,231)',
      borderColor: 'rgb(121,142,231)',
      pointBackgroundColor: 'rgb(121,142,231)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(121,142,231)'
    },
    { // red
      backgroundColor: 'rgb(227,161,64)',
      borderColor: 'rgb(227,161,64)',
      pointBackgroundColor: 'rgb(227,161,64)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(227,161,64)'
    },
    { // red
      backgroundColor: 'rgb(113,158,67)',
      borderColor: 'rgb(113,158,67)',
      pointBackgroundColor: 'rgb(113,158,67)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(113,158,67)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  	this.apiService.get_graph().subscribe((result:any)=>{
      this.lineChartData = result.data;
    })
  }

}
