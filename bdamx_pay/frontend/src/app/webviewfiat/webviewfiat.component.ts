import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ApiService } from '../services/apiService';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-webviewfiat',
  templateUrl: './webviewfiat.component.html',
  styleUrls: ['./webviewfiat.component.css']
})
export class WebviewfiatComponent implements OnInit {

public doughnutChartLabels: Label[] ;
  public doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType = 'doughnut';

  private donutColors=[
    {
      backgroundColor: [

      	'rgb(25,98,132)',
        'rgb(121,142,231)',
        'rgb(227,161,64)',
        'rgb(113,158,67)'
        
    ]
    }
  ];
  constructor(private apiService: ApiService,private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
  	var type = this.activatedRoute.snapshot.paramMap.get('type')
  	this.apiService.SenData('custom/userbalance',{type:type}).subscribe((result:any)=>{
		this.doughnutChartLabels = result.name;
		this.doughnutChartData = [result.amount];
	})
  }

}
