import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { EmbedVideoService } from 'ngx-embed-video';
import { Title } from '@angular/platform-browser';
import * as Highcharts from 'highcharts';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import * as Exporting from 'highcharts/modules/exporting';
//import * as Highcharts from 'highcharts';
// import { ChunksPipe } from '../services/chunksPipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // providers:[ChunksPipe]
})
export class HomeComponent implements OnInit {
	currencyData = [];
	pairData = [];
	selectedCurrency;
	searchText;
	usdVal={};
	newsContent=[];
	recommended = [];
	cmsContent ={};
  featureContent = [];
  resData;
  video_html;
  data=[];
  asc = 'asc';
  type;
  constructor(private apiService: ApiService,private embedService: EmbedVideoService, private title:Title, private router:Router, private mysocket: Socket ) { }

  ngOnInit() {

    this.apiService.get_meta({keyword:'Home'}).subscribe((result:any)=>{
      this.title.setTitle('BDAMX-'+result.data.title)
    });

    this.apiService.loader(true);
  	this.apiService.get_USDValues().subscribe((resData:any) =>{ 
  		resData.map(items=>{
  			this.usdVal[items.currencySymbol] = items.EstimatedUSD;
  		});
  	});

    this.apiService.get_pairs().subscribe(resData => {
    	if(resData['status']){
        this.apiService.loader(false);
        var currencyDetails  = resData['Message'];
    		this.currencyData = JSON.parse(JSON.stringify(currencyDetails));;
        currencyDetails.push({'currency':'BTC', 'pairs':[currencyDetails[0].pairs[1]]});
    		currencyDetails.map(items=>{
    			// items.pairs.map(pairDetails=>{
            var pairDetails = items.pairs[0];
            if(this.recommended.length <=3){
              this.apiService.get_USDValues().subscribe((resData:any) =>{ 
                resData.map(items=>{
                  if(pairDetails.pair.split('_')[0] === items.currencySymbol){
                    pairDetails.usdEql = items.EstimatedUSD * pairDetails.marketPrice
                  }
                })
              });
              this.recommended.push(pairDetails);
            }
          // });
					
    		})
    		this.loadPairs(this.currencyData[0]);
    	}
    });

    this.apiService.get_news().subscribe(resData=>{
    	this.newsContent = resData['data'];
    });

    this.apiService.get_features().subscribe(resData=>{
    	this.featureContent = resData['data'];
    });

    this.apiService.get_sitesettings().subscribe((resData:any)=>{
      this.video_html = this.embedService.embed(resData.data.home_video,{
          query: { portrait: 0},
          attr: { width: 540, height: 300 }       
        });
    });

    this.apiService.get_cms_home().subscribe((resData:any)=>{
      resData.data.map(items=>{
        this.cmsContent[items.page_name] = items['page_content'];
      })
      
    });
     
  }

  sorting(property){
    this.asc = this.asc === 'asc' ? 'desc' : 'asc';
    this.type = property;
  }

  loadPairs(currencyPairs){
  	this.selectedCurrency = currencyPairs.currency;
  	this.pairData = currencyPairs.pairs;
    for(let items in this.pairData){
      this.chartData(this.pairData[items]._id, items);
    }
  }

  tradeView(pairData){
    this.router.navigateByUrl('/trade/'+pairData.pair);
  }

  search(value){
  	console.log(value);
  }

  chartData(pair,i){
    this.apiService.get_chartData({pair:pair}).subscribe(result=>{
      console.log("chart result",result)
      this.getChartData(result['data'],i);
    })
  }
  trade_navigate(){

      if(localStorage.getItem('Basecoin')){
        if(localStorage.getItem('Basecoin') == 'BTC'){
          this.router.navigate(['/trade/ETH_BTC']);
        }else if(localStorage.getItem('Basecoin') == 'ETH'){
          this.router.navigate(['/trade/OMG_ETH']);
        }else if(localStorage.getItem('Basecoin') == 'EOS'){
          this.router.navigate(['/trade/KASDAC_EOS']);
        }else{
          this.router.navigate(['/trade/ETH_BTC']);
        }

      }else{
        this.router.navigate(['/trade/ETH_BTC']);
      }
}


getChartData (data:any, i) {
 
      if(data.length == 0){
        data=[0,0,0,0,0,0,0]
      }
      if(i){
         Highcharts.chart('containerChart'+i, {
          colors: ['#989fa6'],
            chart: {
              backgroundColor: '#383848',
                zoomType: 'x'
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'datetime',
                visible: false
            },
            yAxis: {
              visible: false,
                title: {
                    text: ''
                },
            },
             credits: {
              enabled: false
              },
              tooltip: { enabled: false },
              // labels: {
              // enabled: false
              // },
            legend: {
                enabled: false
            },
            plotOptions: {
              line:{
                marker:{enabled:false}
              }
            },
            series: [{
                data:  data,
              type: undefined,}]
        })
      }
       

    }




}