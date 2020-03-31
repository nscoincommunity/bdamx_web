import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService';
import { ToastrService } from 'ngx-toastr';
import { ChartType,ChartDataSets, ChartOptions } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-graphwebview',
  templateUrl: './graphwebview.component.html',
  styleUrls: ['./graphwebview.component.css']
})
export class GraphwebviewComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  balance = true;
  market = false;
  cryptoData = [];
  fiatData;
  currencies;
  public doughnutChartLabels: Label[] ;
  public doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType = 'doughnut';
  currencyStatus = false;
  
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
  // public lineChartPlugins = [pluginAnnotations];
  selectedType = '1';
  Market_chart : any = []

  ngOnInit() {
  	this.apiService.getPageHeader('Dashboard');
  	this.change(this.selectedType);
    this.apiService.loader(true);
    this.apiService.get_currency({}).subscribe((result:any)=>{
      if(result.data.length>0){
        this.apiService.loader(false);
        this.cryptoData = result.data.filter(items =>{return items.curnType == 1});
        this.fiatData   = result.data.filter(items=> {return items.curnType == 2});
        this.currencySelected(this.cryptoData[0].currencySymbol)
      }else{
        this.apiService.loader(false);
        this.currencyStatus = true
      }
      
    });

    // this.apiService.get_graph().subscribe((result:any)=>{
    //   this.lineChartData = result.data;
    // })

    this.apiService.get_marketgraph({id:1}).subscribe((result:any)=>{

      this.Market_chart = result.data;
      this.lineChartData = this.Market_chart;
      this.get_chartdata("ETH")
    })




    
  }

  get_chartdata(id){
    console.log(id)

    var datasss = this.Market_chart.filter(items =>{return items.label == id});
    this.lineChartData =datasss
    console.log(datasss)
  }

  currencySelected(value){
    this.currencies = value;
    switch (value) {
     case 'ETH': 
     var condition = 'eth_price';
     break;
     
     case 'BTC': 
     var condition = 'btc_price';
     break;
        
     case 'EOS': 
     var condition = 'eos_price';
     break;

     case 'USDT': 
     var condition = 'usdt_price';
     break;
  }
    this.fiatData.map(items=>{
      items.choosenPrice = items[condition];
    })
  }

   change(value){
   	this.apiService.SenData('custom/userbalance',{type:value}).subscribe((result:any)=>{
		this.doughnutChartLabels = result.name;
		this.doughnutChartData = [result.amount];
	})
   }
}
