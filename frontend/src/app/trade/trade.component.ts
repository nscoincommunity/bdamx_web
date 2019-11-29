import { Component,Input, OnInit,NgZone, Inject } from '@angular/core';
//import { ServeService } from '../serve.service';
import { ApiService } from '../services/api.service';
import { Title } from '@angular/platform-browser';
import { NgModule, ViewChild, ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Socket } from 'ngx-socket-io';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';
import { DOCUMENT } from '@angular/common'; 
import {
    widget,
    onready,
    ChartingLibraryWidgetOptions,
    LanguageCode,
} from '../../assets/charting_library/charting_library.min';
import { Observable } from 'rxjs';
declare var $ : any;
declare const TradingView: any;

import * as Highcharts from 'highcharts';

// let noData = require('highcharts/modules/no-data-to-display');
// noData(Highcharts);

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {
public scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
  




  @ViewChild("container", { read: ElementRef }) container: ElementRef;
  @ViewChild('fullScreen') divRef:ElementRef;
  pair_from: String;
  pair_to: String;
  passingObject: any = "1m";
  temp: any;
  time: any;
  candleData: any[] = [];
  chart: any;
  Highcharts = Highcharts;
  exitFullScreen = false;
  openFullScreen = true;
	/*Chart end*/
  oneAtATime: boolean = true;
  isOpen = true;
  // hideHeader = false;
  shwsidemenu:any;
  pair: any;
  tradetype: any;
  pricetag: any;
  urlcon = '/trade/';
  TradeDetails: any = {};
  PairDetails: any = {};
  fromCurrency = '';
  toCurrency = '';
  pairss='';
  fromcurrencyName = '';
  tocurrencyName = '';
  price = 0;
  change = 0;
  high = 0;
  low = 0;
  volume = 0;
  values = 0;
  sellOrders = [];
  buyOrders = [];
  tradeHistory = [];
  PairDet = [];
  showpair = [];
  showLoader: any = false;
  buylimitbtn = false;
  buyinstantbtn = false;
  selllimitbtn = false;
  sellinstantbtn = false;
  show_login_btn=true;
  Chart;
  loader = "assets/images/loader.svg";
  activeOrder: any = [];
  userTradeHistory: any = [];
  usersHistory: any = [];
  TotDet: any = {'trade':0,'buy':0,'sell':0};
  FromDigit = 8;
  ToDigit = 8;
  buy_taker_fees = 0;
  buy_maker_fees = 0;
  sell_taker_fees = 0;
  sell_maker_fees = 0;
  marketprice;
  feesper = 0;
  takerfee;
  makerfee;
  buy_total = 0;
  sell_total = 0;
  frombal = 0;
  tobal = 0;
  minTrade;
  pair_id;
  // user_id = 0;
  user_id = localStorage.getItem('address');
  basecoin = localStorage.getItem('Basecoin');
  createEmit = 0;
  backurl;
  socket;
  styleExp = '';
  site_settings;
  pairid=''
  cancelOrders=[];
  searchkeyword='';
  allPairsList=[];
public scrollbarOptions3 = { };
tvWidget1;
screenAvailWidth = window.screen.availWidth;
orderType = {'buy':{'type':'limit','pricetag':'price'},'sell':{'type':'limit','pricetag':'price'}};
//new chart

//private Amchart: am4charts.XYChart;

bodyclass() {
    document.body.classList.toggle("trade-light-theme");
    if(document.body.classList.contains("trade-light-theme")){
        $(".trade_full_sec").addClass("trade_light_theme");
        this.widgetOptions["toolbar_bg"]='#ffffff';
        this.widgetOptions["studies_overrides"]={ "volume.volume.color.0": "#ffffff", "volume.volume.color.1": "#ffffff", "volume.lineheight": "91" };
        this.widgetOptions["overrides"]={
            "paneProperties.background": "#ffffff",
            "symbolWatermarkProperties.transparency": 90,
            "scalesProperties.textColor": "#AAA",
            "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
            "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
        };
      }
      else{
        $(".trade_full_sec").removeClass("trade_light_theme");
        this.widgetOptions["toolbar_bg"]='#131722';
        this.widgetOptions["studies_overrides"]={ "volume.volume.color.0": "#131722", "volume.volume.color.1": "#131722", "volume.lineheight": "91" };
        this.widgetOptions["overrides"]={
            "paneProperties.background": "#131722",
            "paneProperties.vertGridProperties.color": "#363c4e",
            "paneProperties.horzGridProperties.color": "#363c4e",
            "symbolWatermarkProperties.transparency": 90,
            "scalesProperties.textColor": "#AAA",
            "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
            "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
        };
    }   
    this.onready(this.widgetOptions);  
  }

  private _symbol: ChartingLibraryWidgetOptions['symbol'] = this.pairss;
  private _interval: ChartingLibraryWidgetOptions['interval'] = 'D';
  private _datafeedUrl = this.mainService.serviceHost+'/trade/chart';
  private _libraryPath: ChartingLibraryWidgetOptions['library_path'] = '/assets/charting_library/';
  private _chartsStorageUrl: ChartingLibraryWidgetOptions['charts_storage_url'] = 'https://saveload.tradingview.com';
  private _chartsStorageApiVersion: ChartingLibraryWidgetOptions['charts_storage_api_version'] = '1.1';
  private _clientId: ChartingLibraryWidgetOptions['client_id'] = 'tradingview.com';
  private _userId: ChartingLibraryWidgetOptions['user_id'] = "public_user_id"
  private _fullscreen: ChartingLibraryWidgetOptions['fullscreen'] = false;
  private _autosize: ChartingLibraryWidgetOptions['autosize'] = true;
  private _hide_side_toolbar: ChartingLibraryWidgetOptions['hide_side_toolbar'] = false;
  private _containerId: ChartingLibraryWidgetOptions['container_id'] = 'tv_chart_container';
  usd_estimatedvalue;


  @Input()
  set symbol(symbol: ChartingLibraryWidgetOptions['symbol']) {
      this._symbol = symbol || this._symbol;
  }

  @Input()
  set interval(interval: ChartingLibraryWidgetOptions['interval']) {
      this._interval = interval || this._interval;
  }

  @Input()
  set datafeedUrl(datafeedUrl: string) {
      this._datafeedUrl = datafeedUrl || this._datafeedUrl;
  }

  @Input()
  set libraryPath(libraryPath: ChartingLibraryWidgetOptions['library_path']) {
      this._libraryPath = libraryPath || this._libraryPath;
  }

  @Input()
  set chartsStorageUrl(chartsStorageUrl: ChartingLibraryWidgetOptions['charts_storage_url']) {
      this._chartsStorageUrl = chartsStorageUrl || this._chartsStorageUrl;
  }

  @Input()
  set chartsStorageApiVersion(chartsStorageApiVersion: ChartingLibraryWidgetOptions['charts_storage_api_version']) {
      this._chartsStorageApiVersion = chartsStorageApiVersion || this._chartsStorageApiVersion;
  }

  @Input()
  set clientId(clientId: ChartingLibraryWidgetOptions['client_id']) {
      this._clientId = clientId || this._clientId;
  }

  @Input()
  set userId(userId: ChartingLibraryWidgetOptions['user_id']) {
      this._userId = userId || this._userId;
  }

  @Input()
  set fullscreen(fullscreen: ChartingLibraryWidgetOptions['fullscreen']) {
      this._fullscreen = fullscreen || this._fullscreen;
  }

  @Input()
  set autosize(autosize: ChartingLibraryWidgetOptions['autosize']) {
      this._autosize = autosize || this._autosize;
  }

  @Input()
  set hide_side_toolbar(hide_side_toolbar: ChartingLibraryWidgetOptions['hide_side_toolbar']) {
      this._hide_side_toolbar = hide_side_toolbar || this._hide_side_toolbar;
  }  

  @Input()
  set containerId(containerId: ChartingLibraryWidgetOptions['container_id']) {
      this._containerId = containerId || this._containerId;
  }





    widgetOptions: ChartingLibraryWidgetOptions = {
      symbol                     : "ETH_BTC",
      datafeed                   : new (window as any).Datafeeds.UDFCompatibleDatafeed(this._datafeedUrl),
      interval                   : this._interval,
      container_id               : this._containerId,
      library_path               : this._libraryPath,
      locale                     :  'en',
      enabled_features           : ['study_templates'],
      charts_storage_url         : this._chartsStorageUrl,
      charts_storage_api_version : this._chartsStorageApiVersion,
      client_id                  : this._clientId,
      user_id                    : this._userId,
      fullscreen                 : this._fullscreen,
      autosize                   : this._autosize,
      toolbar_bg: '#ffffff',
      hide_side_toolbar:this._hide_side_toolbar,
      // allow_symbol_change:true,
      studies_overrides: { "volume.volume.color.0": "#ffffff", "volume.volume.color.1": "#ffffff", "volume.lineheight": "91" },                
      overrides: {
        "paneProperties.background": "#ffffff",
        "paneProperties.vertGridProperties.color": "#363c4e",
        "paneProperties.horzGridProperties.color": "#363c4e",
        "symbolWatermarkProperties.transparency": 90,
        "scalesProperties.textColor": "#AAA",
        "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
        "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
      },

      // disabled_features:[
      // "use_localstorage_for_settings",'border_around_the_chart','header_compare','scales_context_menu','compare_symbol','header_symbol_search','border_around_the_chart','go_to_date','show_dom_first_time',"volume_force_overlay", "header_saveload", "timeframes_toolbar"
      // ]

      disabled_features: ['display_market_status','header_compare','scales_context_menu','compare_symbol','header_symbol_search','border_around_the_chart','go_to_date','show_dom_first_time', "left_toolbar", "header_saveload", "timeframes_toolbar"]
  };


      chartOptions = {

      series: [{
      data: []
      }],

      title:'charts',
      chart: {
      backgroundColor: '#0B1433',
      },
    xAxis: {
      lineWidth: 0,
      minorGridLineWidth: 0,
      minorTickLength: 0,
      tickLength: 0,
      visible: false
      },
      tooltip: { enabled: true,
        useHtml:true,
       formatter: function() {
                    return '</b><br/>'+
                     this.y;
            } },
      legend: {
                enabled: false
            },
      yAxis: {
      color:'white',
      lineWidth: 0,
      gridLineWidth:0,
      visible: false
      },
      };

  constructor(private mysocket: Socket,
    private toastr: ToastrService,
    private router: Router,
    private service: ApiService,
  	private route: ActivatedRoute,
	  private titleService: Title,
    private spinner: NgxSpinnerService,
    private mainService: ApiService,
    private zone: NgZone,
     @Inject(DOCUMENT) private document){


    }

    supplychainamount:any
    public scrollbarOptions1={};
    ngOnInit() {
      var _this = this;
    $(function() {
      $('input').on('input', function(event) {
        if(event.target.className!='form-control search'){
        this.value = this.value
        .replace(/[^\d.]/g, '')             
        .replace(/(^[\d]{8})[\d]/g, '$1')   
        .replace(/(\..*)\./g, '$1')         
        .replace(/(\.[\d]{8})./g, '$1');
        }
        else{
          _this.searchkeyword = (this.value).toLowerCase();
          // for (var i = 0; i < _this.allPairsList.length; i++) {
          //   if(_this.allPairsList[i].currency == _this.pair_to)
          //   {
          //   console.log('pairs',_this.allPairsList[i],_this.pair_to)
              _this.updatePairDetails(_this.allPairsList);
          //   }
          // }
        }
      });
    });

    if(this.screenAvailWidth > 1200){
      this.scrollbarOptions1 = { axis: 'y', theme: 'minimal-dark' };
    }
    else{
      this.scrollbarOptions1 = { axis: 'x', theme: 'minimal-dark' };
    }
    this.spinner.show();
    if(localStorage.getItem('Basecoin') == 'BTC'){
      this.service.get_requestData('/BdAMx4fdex/getusr',{'address':this.user_id}).subscribe((res:any)=>{
        if(res){
          if(res.status == 0){
            this.logoutuser()
          }
          else{
            return true
          }
        }
      })
    }    

    if(this.user_id == null || this.user_id == undefined || !this.user_id ){
      this.show_login_btn = false;
    } 


    function getLanguageFromURL(): LanguageCode | null {
        const regex = new RegExp('[\\?&]lang=([^&#]*)');
        const results = regex.exec(location.search);

        return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' ')) as LanguageCode;
    }

    // var sitesettings = JSON.parse(localStorage.getItem('site_setting'))
    // this.site_settings=sitesettings.site_logo;

		this.viewcharts()


    this.mainService.get_Data('/trade/PairsGet').subscribe((resData:any) => {
      var getdet = resData.Message;
      if (resData.status) {
        if(resData.Message.length > 0)
        {
          this.allPairsList = resData.Message;
          this.updatePairDetails(resData.Message);
        }
      }
      this.spinner.hide();
    });

    this.Triggersocket('joined').subscribe(res => {
      // console.log('success-completed');
    })
    this.Triggersocket('createResponse').subscribe(res => {
			this.buylimitbtn = false;
			this.buyinstantbtn = false;
			this.selllimitbtn = false;
			this.sellinstantbtn = false;
    	
      if(res.user_id == this.user_id && res.pair == this.pair_id && this.createEmit == 1)
      {
        if(res.success == true){
        this.toastr.success(res.msg,'Success')
        }
        else{
        this.toastr.error(res.msg,'Error')
        }
        this.createEmit = 0;
        if(res.status == 1)
        {
          if(res.type=='buy')
          {
              this.TradeDetails.buy_amount = '';
              this.TradeDetails.buy_price = '';
              this.buy_maker_fees = 0;
              this.buy_taker_fees = 0;
              this.buy_total = 0;
          }
          else
          {
            	this.TradeDetails.sell_amount = '';
              this.TradeDetails.sell_price = '';
              this.sell_maker_fees = 0;
              this.sell_taker_fees = 0;
              this.sell_total = 0;
          }
        }
        else
        {
          this.showLoader = false;
          if(res.msg=='Not a valid pair')
          {
            this.router.navigate(['/']);
          }
        }
      }
    })
    this.Triggersocket('pairResponse').subscribe(res => {
      if(res._id == this.pair_id)
      {
      	this.TotDet = {'trade':0,'buy':0,'sell':0};
        this.PairDetails = res;
        this.updateCurrentPair();
        if(res.price>0)
        {
          this.marketprice = res.price;
        }
        else
        {
          this.marketprice = res.marketPrice;
        }
      }
    })
     this.Triggersocket('userResponse').subscribe(res => {
      if(res.userId == this.user_id && res.pairid == this.pair_id)
      {
        this.showLoader = false;
        this.frombal = res.FromBal;
        this.tobal = res.ToBal;
        this.activeOrder = res.activeOrder;
        this.userTradeHistory = res.userTradeHistory;
        this.updateUserHistory();
      }
    })

    this.Triggersocket('emitPairsResponse').subscribe(res => {
      if(res.trade.length > 0)
      {
        this.allPairsList = res.trade;
        this.updatePairDetails(res.trade);
      }
    })
  }
  isHaving(val) { return typeof val[0] != 'undefined'; }
  updateCurrentPair()
  {
    var req = { 
      'userId':this.user_id,
      'pairid':this.pairid
    }
    this.mainService.get_requestData('/trade/get_cancelled',req).subscribe((resData:any) => {
      this.cancelOrders = resData;
    });
    this.fromCurrency = this.PairDetails.fromCurrency.currencySymbol;
    this.toCurrency = this.PairDetails.toCurrency.currencySymbol;
    this.fromcurrencyName = this.PairDetails.fromCurrency.currencyName;
    this.tocurrencyName = this.PairDetails.toCurrency.currencyName;
    if(this.PairDetails.price > 0){
      this.price = this.PairDetails.price;
    }
    else{
     this.price = this.PairDetails.marketPrice; 
    }
    this.change = this.PairDetails.change;
    this.high = this.PairDetails.high;
    this.low = this.PairDetails.low;
    this.volume = this.PairDetails.volume;
    this.values = this.PairDetails.value;
    this.sellOrders = this.PairDetails.sellOrders;
    this.buyOrders = this.PairDetails.buyOrders;
    this.tradeHistory = this.PairDetails.tradeHistory;
    let get_pair_data = {
        pair:this.fromCurrency+"_"+this.toCurrency,
        currency:this.basecoin!=null ? this.basecoin : "BTC"  
      };
      //console.log("jegana",get_pair_data)
    this.sidechart(get_pair_data)



  }
  sidechart(get_pair_data){
      this.mainService.get_requestData('/get_pair_chart',get_pair_data).subscribe((get_chart:any)=> {

      if(get_chart.status){

      this.supplychainamount = get_chart.currencydata.circulating_supply
      // this.chartOptions = {
      //   series: [{
      //   data: get_chart.data
      //   }]
      // }  

      this.chartOptions = {

      series: [{
      data: get_chart.data
      }],

      title:'charts',
      chart: {
      backgroundColor: '#0B1433',
      },
    xAxis: {
      lineWidth: 0,
      minorGridLineWidth: 0,
      minorTickLength: 0,
      tickLength: 0,
      visible: false
      },
      tooltip: { enabled: true,
        useHtml:true,
       formatter: function() {
                    return '</b><br/>'+
                     this.y;
            } },
      legend: {
                enabled: false
            },
      yAxis: {
      color:'white',
      lineWidth: 0,
      gridLineWidth:0,
      visible: false
      },
      };

      // this.chartOptions = {

      // series: [{
      // data: get_chart.data
      // }],

      // title:'charts',
      // chart: {
      // backgroundColor: '#0B1433',
      // },
      // xAxis: {
      // lineWidth: 0,
      // minorGridLineWidth: 0,
      // minorTickLength: 0,
      // tickLength: 0
      // },
      // yAxis: {
      // color:'white',
      // lineWidth: 0,
      // gridLineWidth:0,
      // },

      // };




      }


      });
  }
  viewcharts(){
    this.route.params.subscribe(params => {
      this.pair = params['pair'];
      if(params['pair']!=undefined && (this.pair.split('_')[1] == 'BTC' || this.pair.split('_')[1] == 'EOS' || this.pair.split('_')[1] == 'ETH')){
        // var element4 = document.getElementById(this.pair.split('_')[1]);
        // element4.className = element4.className.replace(/\bgradient-btn-border\b/g, "gradient-btn");        
      }      
      let pairs = {pair:params['pair']};
      let get_pair_data = {
        pair:params['pair'],
        currency:this.basecoin!=null ? this.basecoin : "BTC"  
      };
      this.showLoader = true;



      // console.log("jeganathan","BINANCE:"+this.pair.split('_')[0]+
      // this.pair.split('_')[1]+"")
      // var widgetOptions =
      // {

      // "symbol" : "BINANCE:"+this.pair.split('_')[0]+
      // this.pair.split('_')[1]+"",
      // "interval": "D",
      // "timezone": "Etc/UTC",
      // "hide_legend": true,
      // "theme": 'dark',
      // "style": "1",
      // "locale": "in",
      // "toolbar_bg": "#072548",
      // "enable_publishing": false,
      // "allow_symbol_change": true,
      // "container_id": "tradingview_676bb",
      // }
      // ;
      // this.tvWidget1 = new TradingView.widget(widgetOptions);





     this.sidechart(get_pair_data)

      this.mainService.get_requestData('/trade/checkPair',pairs).subscribe((value:any)=> {
        if (!value.status) {
          this.toastr.error('Not a valid pair', 'Oops!');
          this.router.navigate(['/']);
        }
        else{
          // var element4 = document.getElementById(value.Message.toCurrency.currencySymbol);
          // element4.className = element4.className.replace(/\bgradient-btn-border\b/g, "gradient-btn");           
          this.PairDetails = value.Message;
          this.pairid = this.PairDetails.fromCurrency._id+'_'+this.PairDetails.toCurrency._id;
          this.pairss = this.PairDetails.fromCurrency.currencySymbol+'_'+this.PairDetails.toCurrency.currencySymbol;
          this.updateCurrentPair();
          this.TradeDetails.buy_price = this.price.toFixed(8);
          this.TradeDetails.sell_price = this.price.toFixed(8);
          this.pair_from = this.PairDetails.fromCurrency.currencySymbol;
          this.pair_to = this.PairDetails.toCurrency.currencySymbol;
          if(this.PairDet.length > 0)
          {
            this.updatePairDetails(this.PairDet);
          }
          if(this.pair != this.PairDetails.pair)
          {
            this.router.navigate(['/trade/'+this.PairDetails.pair]);
          }
          if(value.Message.price>0)
          {

           this.marketprice = value.Message.price;
          }
          else
          {
            this.marketprice = value.Message.marketPrice;
          }
          this.feesper = value.Message.feeType;
          this.takerfee = value.Message.takerFee;
          this.makerfee = value.Message.makerFee;
          this.minTrade = value.Message.minTrade;
          this.pair_id = value.Message._id;
          if(document.body.classList.contains("trade-light-theme")){
              $(".trade_full_sec").addClass("trade_light_theme");
              this.widgetOptions["toolbar_bg"]='#ffffff';
              this.widgetOptions["studies_overrides"]={ "volume.volume.color.0": "#ffffff", "volume.volume.color.1": "#ffffff", "volume.lineheight": "91" };
              this.widgetOptions["overrides"]={
                  "paneProperties.background": "#ffffff",
                  "symbolWatermarkProperties.transparency": 90,
                  "scalesProperties.textColor": "#AAA",
                  "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
                  "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
              };
            }
            else{
              $(".trade_full_sec").removeClass("trade_light_theme");
              this.widgetOptions["toolbar_bg"]='#131722';
              this.widgetOptions["studies_overrides"]={ "volume.volume.color.0": "#131722", "volume.volume.color.1": "#131722", "volume.lineheight": "91" };
              this.widgetOptions["overrides"]={
                  "paneProperties.background": "#131722",
                  "paneProperties.vertGridProperties.color": "#363c4e",
                  "paneProperties.horzGridProperties.color": "#363c4e",
                  "symbolWatermarkProperties.transparency": 90,
                  "scalesProperties.textColor": "#AAA",
                  "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
                  "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
              };
          }          
          this.widgetOptions['symbol'] = this.pairss;
          this.onready(this.widgetOptions);
              /*socket*/
              this.backurl = this.mainService.serviceHost;
              var datas = {"userid":this.user_id,"pairid":this.pair_id}
              this.socket = io(this.backurl);

              this.socket = io.connect(this.backurl);
              this.checkSocketIoConnect(this.backurl,5000).then(function() {
                // console.log('succeed');
              }, function(reason) {
                console.log('failure',reason);
              });
              this.Emitsocket('join',datas);
              this.Emitsocket('joined',datas);
              if(this.user_id)
              {
                var datas1 = {"userid":this.user_id,"pairid":this.pair_id,"fromcurn":this.PairDetails.fromCurrency._id,"tocurn":this.PairDetails.toCurrency._id}
                this.Emitsocket('userEmit',datas1);
              }


        }
      });
    });

  }

  updatePairDetails(pairlists) {
    this.PairDet = [];
    this.showpair = [];
    var j = 1;
    if(pairlists.length > 0)
    {
      var z=0;
      var pushData=[];
      for (var i = 0; i < pairlists.length; i++) {
        if(typeof pairlists[i] != 'undefined' && typeof pairlists[i] != undefined)
        {
          if(pairlists[i].currency == this.pair_to)
          {
            for(var k=0;k<pairlists[i].pairs.length;k++){
              var pairsDetail = (pairlists[i].pairs[k].fromCurrency.currencySymbol+'/'+pairlists[i].pairs[k].toCurrency.currencySymbol).toLowerCase();
              if(this.searchkeyword=='' || pairsDetail.includes(this.searchkeyword)==true){
                var data={
                  'buyOrders':pairlists[i].pairs[k].buyOrders,
                  'calculate_market_price':pairlists[i].pairs[k].calculate_market_price,
                  'change':pairlists[i].pairs[k].change,
                  'fee':pairlists[i].pairs[k].fee,
                  'feeType':pairlists[i].pairs[k].feeType,
                  'fromCurrency':pairlists[i].pairs[k].fromCurrency,
                  'high':pairlists[i].pairs[k].high,
                  'low':pairlists[i].pairs[k].low,
                  'makerFee':pairlists[i].pairs[k].makerFee,
                  'marketPrice':pairlists[i].pairs[k].marketPrice,
                  'minTrade':pairlists[i].pairs[k].minTrade,
                  'option':pairlists[i].pairs[k].option,
                  'pair':pairlists[i].pairs[k].pair,
                  'price': pairlists[i].pairs[k].price,
                  'percentage':pairlists[i].pairs[k].percentage,
                  'percentage_amount':pairlists[i].pairs[k].percentage_amount,
                  'sellOrders':pairlists[i].pairs[k].sellOrders,
                  'status':pairlists[i].pairs[k].status,
                  'takerFee':pairlists[i].pairs[k].takerFee,
                  'toCurrency':pairlists[i].pairs[k].toCurrency,
                  'tradeHistory':pairlists[i].pairs[k].tradeHistory,
                  'usdprice':pairlists[i].pairs[k].usdprice,
                  'volume':pairlists[i].pairs[k].volume,
                  '_id':pairlists[i].pairs[k]._id,
                }
                // if(pairlists[i].pairs[k].fromCurrency.currencySymbol == this.pair_from){
                //   pushData[0] = data
                // }
                // else{
                  pushData[z] = data 
                  z++;             
                //}
              }             
            }
            var final_push={
              'currency':pairlists[i].currency,
              'pairs':pushData
            }
            this.PairDet[0] = final_push;
            // this.PairDet[0] = pairlists[i];
          }
          else
          {
            this.PairDet[j] = pairlists[i];
            j++;
          }
        }
      } 
      //console.log('pushData',pushData)
            this.showpair=pushData
    }
  }






  
  checkSocketIoConnect(url, timeout) {
		return new Promise(function(resolve, reject) {
		    var errAlready = false;
		    timeout = timeout || 5000;
		    var socket = io(url, {reconnection: false, timeout: timeout});

		    // success
		    socket.on("connect", function() {
		        clearTimeout(timer);
		        resolve();
		        socket.close();
		    });

		    // set our own timeout in case the socket ends some other way than what we are listening for
		    var timer = setTimeout(function() {
		        timer = null;
		        error("local timeout");
		    }, timeout);

		    // common error handler
		    function error(data) {
		        if (timer) {
		            clearTimeout(timer);
		            timer = null;
		        }
		        if (!errAlready) {
		            errAlready = true;
		            reject(data);
		            socket.disconnect();
		        }
		    }

		    // errors
		    socket.on("connect_error", error);
		    socket.on("connect_timeout", error);
		    socket.on("error", error);
		    socket.on("disconnect", error);
		});
	}
  updateUserHistory() {
    this.usersHistory = [];
    var j = 0;
    for(var i=0;i<this.userTradeHistory.length;i++)
    {
      if(this.user_id == this.userTradeHistory[i].buyerUserid)
      {
        let object = {datetime:this.userTradeHistory[i].datetime,type:'Buy',filledAmount:this.userTradeHistory[i].filledAmount,tradePrice:this.userTradeHistory[i].tradePrice,fee:this.userTradeHistory[i].buyFee};
        this.usersHistory[j] = object;
        j++;
      }
      if(this.user_id == this.userTradeHistory[i].sellerUserid)
      {
        let object = {datetime:this.userTradeHistory[i].datetime,type:'Sell',filledAmount:this.userTradeHistory[i].filledAmount,tradePrice:this.userTradeHistory[i].tradePrice,fee:this.userTradeHistory[i].sellFee};
        this.usersHistory[j] = object;
        j++;
      }
    }
  }
  rounds(n) {
    n = n.toString();
    n = n.slice(0, (n.indexOf("."))+9);
    return n
  }
 	rounds1(n) {
    n = n.toString();
    n = n.slice(0, (n.indexOf("."))+3);
    return n
  }

  roundsof(n,decimal) {
    
    n = n.toString();
    n = n.slice(0, (n.indexOf("."))+(decimal+1));
    return n
  }

  capitalizeFirstLetter(str) {
  	return str[0].toUpperCase() + str.slice(1);
  }
  cancelOrder(orderId,keyCancel){
  	this.styleExp = 'none';
    let order = {orderId:orderId,userId:this.user_id};
    this.showLoader = true;
  	this.mainService.get_requestData('/trade/cancelOrder',order).subscribe((value:any) => {
      this.showLoader = false;
        if (!value.status) {
          this.toastr.error(value.Msg, 'Oops!');
        }
        else{
          this.activeOrder.splice(keyCancel, 1);
          this.toastr.success(value.Msg, 'Success');
        }
        this.styleExp = '';
    });
  }

  calculateTotal(value,type,typeindex) {
    if(typeindex == 0)
    {
      this.TotDet[type] = 0;
    }
    this.TotDet[type] = this.TotDet[type] + value;
    // return this.rounds(value);
    return value.toFixed(8);
  }
  
  change_type(TradeType,OrderType)
  {
    this.orderType[OrderType].type = TradeType;
   

    if(TradeType == "stop"){
      this.orderType[OrderType].pricetag = 'Stop Price';
    }
    else{
      this.orderType[OrderType].pricetag = 'Price';
    }
    this.calculation(TradeType,OrderType)
  }

  placeOrder(placeAmount,placePrice,placeType,index)
  {
    var amt = 0
    if(placeType == 'sell'){
      var selltab=document.getElementById('selltab');
      selltab.click();
      var sell_limittab=document.getElementById('sell_limittab');
      sell_limittab.click();
      for(var i=0;i<=index;i++){
        amt = amt + ( this.buyOrders[i].Amount - this.buyOrders[i].filledAmount );
      }
    }
    else{
      var buytab=document.getElementById('buytab');
      buytab.click();
      var buy_limittab=document.getElementById('buy_limittab');
      buy_limittab.click();
      for(var i=0;i<=index;i++){
        amt = amt + (this.sellOrders[i].Amount - this.sellOrders[i].filledAmount)
      }      
    }
    
    this.change_type('limit',placeType);
    var getAmount = placeType+"_amount";
    var getPrice = placeType+"_price";
    this.TradeDetails[getAmount] = (amt).toFixed(8);
    this.TradeDetails[getPrice] = placePrice;
    this.calculation('limit',placeType);
  }

  calculation(TradeType,OrderType){
    
    var getAmount = OrderType+"_amount";
    var getPrice = OrderType+"_price";
    var Orderamount = this.TradeDetails[getAmount];
    var Orderprice = this.TradeDetails[getPrice];
    var marketprice = +this.marketprice;
    var feeper  = +this.feesper;

    var takerFees = +this.takerfee;
    var makerFees = +this.makerfee;

    if(TradeType == 'instant')
    {
      var placedPrice = +marketprice;
    }
    else
    {
      var placedPrice = +Orderprice;
    }
    if(OrderType == 'buy')
    {
      var tot   = (parseFloat(Orderamount)* (placedPrice))
      if(this.feesper == 1)
      {
        var tak_fees  = (((parseFloat(Orderamount)*(takerFees)/100))).toFixed(this.FromDigit);
        var mak_fees  = (((parseFloat(Orderamount)*(makerFees)/100))).toFixed(this.FromDigit);
      }
      else{
        var tak_fees  = (takerFees).toFixed(this.FromDigit);
        var mak_fees   = (makerFees).toFixed(this.FromDigit);
      }
      var TotS   = tot.toString();
      if(Orderamount!="" && Orderamount!=0 && !isNaN(Orderamount)&&TotS.indexOf("e")==-1)
      {
        this.buy_total = +tot;
        this.buy_taker_fees = +tak_fees;
        this.buy_maker_fees = +mak_fees;
      }
      else
      {
        if(TotS.indexOf("e")>-1)
        {
          this.toastr.error('Total is below the minimum trade amount', 'Error');
          return false;
        }
        this.buy_total = +0;
        this.buy_taker_fees = +0;
        this.buy_maker_fees = +0;
      }
    }
    else{
      var tot   = (parseFloat(Orderamount)* (placedPrice))
      if(this.feesper == 1)
      {
        var tak_fees  = (((parseFloat(Orderamount)* (placedPrice)*(takerFees)/100))).toFixed(this.ToDigit);
        var mak_fees  = (((parseFloat(Orderamount)* (placedPrice)*(makerFees)/100))).toFixed(this.ToDigit);
      }
      else{
        var tak_fees  = (makerFees).toFixed(this.ToDigit);
        var mak_fees  = (takerFees).toFixed(this.ToDigit);
      }
      var TotS   = tot.toString();
      if(Orderamount!="" && Orderamount!=0 && !isNaN(Orderamount)&&TotS.indexOf("e")==-1)
      {
        this.sell_total = +tot;
        this.sell_taker_fees = +tak_fees;
        this.sell_maker_fees = +mak_fees;
      }
      else
      {
        if(TotS.indexOf("e")>-1)
        {
          this.toastr.error('Total is below the minimum trade amount', 'Error');
          return false;
        }
        this.sell_total = +0;
        this.sell_taker_fees = +0;
        this.sell_maker_fees = +0;
      }
    }
	}
	order_placed(TradeType,OrderType)
	{
	  if(!this.user_id)
	  {
      this.openLoginPopup()
	    return false;
	  }
    else{
     if(this.pair_to == 'BTC'){
      if(OrderType == 'buy' && this.basecoin != 'BTC'){
        var button=document.getElementById('swap_btn');
        button.click();
        return false
      }
      else if(OrderType == 'sell' && this.basecoin == 'BTC'){
        var button=document.getElementById('swap_btn');
        button.click();
        return false        
      }
     } 
     else{
      if(this.pair_to != localStorage.getItem('Basecoin')){
        var button=document.getElementById('swap_btn');
        button.click();
        return false
      }
     }
    }
		var getAmount = OrderType+"_amount";
		var getPrice = OrderType+"_price";
		var Orderamount = this.TradeDetails[getAmount];
		var Orderprice = this.TradeDetails[getPrice];

		if(OrderType == 'buy')
		{
	 	 var totget = this.buy_total
		}
		else{
		  var totget = this.sell_total
		}

		if(TradeType != 'instant')
		{

		  if(isNaN(Orderamount) || isNaN(totget))
		  {
		    this.toastr.error('Please enter valid amount and price', 'Error');
		    return false;

		  }
		  else if(Orderamount == "" || Orderamount <= 0 || totget <= 0)
		  {
		   this.toastr.error('Please enter valid amount and price', 'Error');
		   return false;
		 	}
		}
		else{

		  if(isNaN(Orderamount))
		  {
		    this.toastr.error('Please enter valid amount');
		    return false;
		  }
		  else if(Orderamount=="" || Orderamount<=0)
		  {
		   this.toastr.error('Please enter valid amount and price', 'Error');
		   return false;
		 }
		}
		return this.order_confirm(TradeType,OrderType);
	}

	order_confirm(TradeType,OrderType)
	{
		var marketprice = this.marketprice;
		var getAmount = OrderType+"_amount";
		var getPrice = OrderType+"_price";
		var Orderamount = this.TradeDetails[getAmount];
		var Orderprice = this.TradeDetails[getPrice];

		if(TradeType == "instant")
		{
		 var getpriceval = marketprice;
		}
		else{
			var  getpriceval = Orderprice;
			if(TradeType=='stop')
			{
			  var  Priceval = Orderprice;
			  if(OrderType=='buy')
			  {
			    if(parseFloat(Priceval)<=parseFloat(marketprice))
			    {
			      this.toastr.error('Please enter greater than current market price');

			      return false;
			    }
			  }
			  else
			  {
			    if(parseFloat(Priceval)>=parseFloat(marketprice))
			    {
			      this.toastr.error('Please enter less than current market price');

			      return false;
			    }
			  }
			}
		}
		var multiply  = parseFloat(Orderamount)*parseFloat(getpriceval);

		if(multiply>0)
		{
		  var tot = multiply;
		}
		else
		{
		  var tot = 0;
		}

		if((tot) < (this.minTrade)){
		 this.toastr.error(("Total trade amount must be")+' '+ parseFloat(this.minTrade));
		 return false;
		}

		var mul = (tot).toFixed(8);

		if(OrderType=="buy")
		{

		  var to_currency1 = this.rounds(this.tobal);
		  if(parseFloat(mul) > parseFloat(to_currency1))
		  {
		    this.toastr.error("Insufficient balance");
		    return false;
		  }
		  else
		  {
		    return this.executeOrder(TradeType,OrderType);
		  }

		}
		else
		{
		  var from_currency1 = this.rounds(this.frombal);
		  if(parseFloat(from_currency1) < parseFloat(Orderamount))
			{
			 this.toastr.error("Insufficient balance");
			 return false;
			}
			else
			{
			  return this.executeOrder(TradeType,OrderType);
			}

		}
	}
	executeOrder(TradeType,OrderType){

	  var getAmount = OrderType+"_amount";
	  var getPrice = OrderType+"_price";
	  var Orderamount = this.TradeDetails[getAmount];
	  var Orderprice = this.TradeDetails[getPrice];
	  this.calculation(TradeType,OrderType);
	  var takerFees = +this.takerfee;
	  if(TradeType=='instant')
	  {
	    var price = this.marketprice;
	    if((OrderType=='buy' && this.PairDetails.sellOrders.length == 0) || (OrderType=='sell' && this.PairDetails.buyOrders.length == 0))
	    {
	      if(OrderType=='buy')
	      {
	        var OrderType1 = 'Sell';
	      }
	      else
	      {
	        var OrderType1 = 'Buy';
	      }
	      this.toastr.error("No "+OrderType1+" orders available!");
	      return false;
	    }
	  }
	  else
	  {
	    var price = Orderprice;
	  }
	  const data: any = {};

    if(OrderType == 'buy'){
      if(TradeType == 'instant'){
        this.buyinstantbtn = true;

      }
      else{
        this.buylimitbtn = true;

      }
    }
    else{
      if(TradeType == 'instant'){
        this.sellinstantbtn = true;

      }
      else{
        this.selllimitbtn = true;
      }
    }
	  data.amount=parseFloat(Orderamount);
	  data.price=parseFloat(price);
	  data.pair=(this.pair_id);
	  data.ordertype=TradeType;
	  data.type=OrderType;
	  data.user_id=(this.user_id);
	  this.showLoader = true;
	  this.createEmit = 1;
	  this.Emitsocket('createOrder', data);
	}

	/*Static socket function*/
	Emitsocket(name,content) {
	  this.socket.emit(name,content);
	}

	Triggersocket(key) {
	  return this.mysocket
	  .fromEvent<any>(key)
	  .map( data => data );
	}

	change_pair(pair)
	{
	 this.router.navigate([this.urlcon+pair]);
	}

	assign_market_price(val,type){
		this.TradeDetails[val] = this.marketprice.toFixed(8);
		if(type=='buy' && this.TradeDetails.buy_amount){
      var buytot = this.marketprice * this.TradeDetails.buy_amount
			this.buy_total = +buytot.toFixed(8);
		}
		else if(type=='sell' && this.TradeDetails.sell_amount){
      var selltot = this.marketprice * this.TradeDetails.sell_amount;
			this.sell_total = +selltot.toFixed(8);
		}
		else{
			return true
		}
	}
	bid_price(val,type){
		if(this.buyOrders.length != 0){
			this.TradeDetails[val] = this.buyOrders[0]._id.toFixed(8);
			if(type=='buy' && this.TradeDetails.buy_amount){
        var buytot = this.buyOrders[0]._id * this.TradeDetails.buy_amount;
				this.buy_total = +buytot.toFixed(8);
			}
			else if(type=='sell' && this.TradeDetails.sell_amount){
        var selltot = this.buyOrders[0]._id * this.TradeDetails.sell_amount;
				this.sell_total = +selltot.toFixed(8);
			}
			else{
				return true
			}
		}
		else{
			this.assign_market_price(val,type);
		}
	}
	ask_price(val,type){
		if(this.sellOrders.length != 0){
			this.TradeDetails[val] = this.sellOrders[0]._id.toFixed(8);
			if(type=='buy' && this.TradeDetails.buy_amount){
        var buytot = this.sellOrders[0]._id * this.TradeDetails.buy_amount;
				this.buy_total = +buytot.toFixed(8);
			}
			else if(type=='sell' && this.TradeDetails.sell_amount){
        var selltot = this.sellOrders[0]._id * this.TradeDetails.sell_amount;
				this.sell_total = +selltot.toFixed(8);
			}
			else{
				return true
			}
		}
		else{
			this.assign_market_price(val,type);
		}
	}

	buy_percentage(percentage){
    if(this.user_id){
      var takerFees = +this.takerfee;
      var makerFees = +this.makerfee;      
      var total = ((+percentage) * +this.tobal) / 100;
  		var amt = total / +this.marketprice;
  		this.TradeDetails.buy_price = this.marketprice.toFixed(8);
  		this.TradeDetails.buy_amount = amt.toFixed(8);
  		this.buy_total = +total.toFixed(8) ;
      var tak_fees  = (((parseFloat(this.TradeDetails.buy_amount)*(takerFees)/100))).toFixed(this.FromDigit);
      var mak_fees  = (((parseFloat(this.TradeDetails.buy_amount)*(makerFees)/100))).toFixed(this.FromDigit);
      this.buy_taker_fees = +tak_fees;
      this.buy_maker_fees = +mak_fees; 
    }
    else{
      return true
    }
  }
	sell_percentage(percentage){
    if(this.user_id){
      var takerFees = +this.takerfee;
      var makerFees = +this.makerfee;        
  		var total = ((+percentage) * +this.frombal) / 100;
      var tot = total * this.marketprice
    	this.TradeDetails.sell_price = this.marketprice.toFixed(8);
  		this.TradeDetails.sell_amount = total.toFixed(8);
  		this.sell_total = +tot.toFixed(8);
      var tak_fees  = (((parseFloat(this.TradeDetails.sell_amount)* (this.TradeDetails.sell_price)*(takerFees)/100))).toFixed(this.ToDigit);
      var mak_fees  = (((parseFloat(this.TradeDetails.sell_amount)* (this.TradeDetails.sell_price)*(makerFees)/100))).toFixed(this.ToDigit);
      this.sell_taker_fees = +tak_fees;
      this.sell_maker_fees = +mak_fees;      
    }
    else{
      return true
    }
  }

  findindex(data){
    for(var i=0;i<this.PairDet.length;i++){
      if(this.PairDet[i].currency == data){
        this.PairDet = this.array_move(this.PairDet,i,0);
      }
    }
  }

  array_move(arr, old_index, new_index) {
      if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;
          while (k--) {
              arr.push(undefined);
          }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      return arr; // for testing
  };

  onready = (widgetOptions) => {
    
    const tvWidget = new widget(widgetOptions);
    tvWidget.onChartReady(() => {
        const button = tvWidget.createButton()
            .attr('title', 'Click to show a notification popup')
            .addClass('apply-common-tooltip')
            .on('click', () => tvWidget.showNoticeDialog({
                title: 'Notification',
                body: 'TradingView Charting Library API works correctly',
                callback: () => {
                    // console.log('Noticed!');
                },
            }));

        // button[0].innerHTML = 'Check API';
        //button[0].innerHTML = '';
    });
  };  

  logoutuser_swap(){
    localStorage.removeItem('address');   
    localStorage.removeItem('original_address');    
    localStorage.removeItem('Basecoin');    
    localStorage.removeItem('addresstype');
    localStorage.removeItem('derivationPath');
    this.openLoginPopup();    
  }

  logoutuser(){
    localStorage.removeItem('address');   
    localStorage.removeItem('original_address');    
    localStorage.removeItem('Basecoin');    
    localStorage.removeItem('addresstype');
    localStorage.removeItem('derivationPath');
    // var button2=document.getElementById('cls_mdl');
    // button2.click();
    // this.router.navigate(['/']);
  }

  routeto(link,id){
    
    var element1 = document.getElementById(this.pair_to.toString());
    // element1.classList.remove("gradient-btn");
    // element1.classList.add("gradient-btn-border");
    var element4 = document.getElementById(id);
    //element4.className = element4.className.replace(/\bgradient-btn-border\b/g, "gradient-btn");     
    this.router.navigate([link]);
  }

  openLoginPopup(){
    
      var button = document.getElementById('wallet_btn');
      button.click(); 
      const button1 = document.getElementById(this.pair_to+'_login');
      button1.click();     
      const button2 = document.getElementById('move_next');
      button2.click();      
      return false;

  }

//   openFullscreen() {
//   // Use this.divRef.nativeElement here to request fullscreen
//   const elem = this.divRef.nativeElement;

//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.msRequestFullscreen) {
//     elem.msRequestFullscreen();
//   } else if (elem.mozRequestFullScreen) {
//     elem.mozRequestFullScreen();
//   } else if (elem.webkitRequestFullscreen) {
//     elem.webkitRequestFullscreen();
//   }
// }

 openFullscreen() {
  this.exitFullScreen = true;
  this.openFullScreen = false;
  var element = document.documentElement as HTMLElement & {
    mozRequestFullScreen(): Promise<void>;
    webkitRequestFullscreen(): Promise<void>;
    msRequestFullscreen(): Promise<void>;};
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else {
    console.log('Fullscreen API is not supported.');
  }
};

 exitFullscreen() {
  this.openFullScreen = true;
  this.exitFullScreen = false;
  const docWithBrowsersExitFunctions = document as Document & {
    mozCancelFullScreen(): Promise<void>;
    webkitExitFullscreen(): Promise<void>;
    msExitFullscreen(): Promise<void>;
  };
  if (docWithBrowsersExitFunctions.exitFullscreen) {
    docWithBrowsersExitFunctions.exitFullscreen();
  } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) {
    docWithBrowsersExitFunctions.webkitExitFullscreen();
  } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) {
    docWithBrowsersExitFunctions.mozCancelFullScreen();
  } else if (docWithBrowsersExitFunctions.msExitFullscreen) {
    docWithBrowsersExitFunctions.msExitFullscreen();
  } else {
    console.log('Fullscreen API is not supported.');
  }
};




}
