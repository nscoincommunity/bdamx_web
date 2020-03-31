import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService';
import { ToastrService } from 'ngx-toastr';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';


@Component({
  selector: 'app-block-fiat',
  templateUrl: './block-fiat.component.html',
  styleUrls: ['./block-fiat.component.css']
})
export class BlockFiatComponent implements OnInit {
	 exportAsConfig: ExportAsConfig = {
    type: 'xls', 
    elementId: 'myTableElementId'
   }
  constructor(
  	private exportAsService: ExportAsService,
  	private apiService: ApiService,
  	private toastr: ToastrService) { }
  currencyData=[]; 
  fromCurrency;
  toCurrency;
  amount; 
  price;
  currprice;
  currencyDetails :any= {};
  fee;
  feecal;
  totalamount;
  siteData:any;
  selectedFromFiat;
  selectedToFiat;
  marketPrice;
  exchangeData = [];
  allPairs =[];
   public doughnutChartLabels: Label[] ;
  public doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType = 'doughnut';
  feePercentage;
  receiveAmount;
 
  private donutColors=[
    {
      backgroundColor: [

      	'rgb(25,98,132)',
        'rgb(121,142,231)',
        'rgb(227,161,64)',
        'rgb(113,158,67)'
        
    ],
    // borderWidth: [10, 10, 10, 10, 10]
    }
  ];
  selectedType = '1';
  balance = true;
  market = false;
  pairData =[];

  currencyStatus : Boolean = false

  ngOnInit() {
  	this.apiService.getPageHeader('Exchange');
  	this.apiService.loader(true);
  	this.apiService.get_currency({}).subscribe((result:any)=>{
  		if(result.data.length>0){
			this.apiService.loader(false);
			this.currencyData = result.data;
			this.fromCurrencySelected(this.currencyData[0].currencySymbol);
			this.toCurrencySelected(this.currencyData[1].currencySymbol);
			this.pairData = this.currencyData.filter(items=>{return items.curnType === 1});	
			this.getPairDetails();
  		}else{
  			this.apiService.loader(false);
  			this.currencyStatus = true


  		}
  		
	});
	this.apiService.GetData('custom/exchangehistory').subscribe((result:any)=>{
		this.exchangeData = result.data.map(items=>{
      if(items.fees_type == 'percentage'){
       items.less_amount = items.price * items.fees/100
      }else{
        items.less_amount = items.price + items.fees;
      }
      return items;
    });
	});
	this.change(this.selectedType);
	this.apiService.get_allPairs().subscribe((result:any)=>{
		this.allPairs = result.data;
	})

	this.apiService.get_sitesettings().subscribe((result:any)=>{
      this.siteData = result['data'];
      
    });
		
   }

   fromCurrencySelected(value){
   	this.fromCurrency = value;
   	this.selectedFromFiat = false;
   	for(let items of this.currencyData){
   		if(this.fromCurrency === items.currencySymbol && items.curnType === 2){
   	
   			this.selectedFromFiat = true;
   		} 
   	}
   	this.getPairDetails();
   	if(this.amount){
   		this.amountcal(this.amount)
   	}
   	if(this.price){
   		this.pricecal({price:this.price})
   	}
   	
   }

    export() {
    
    this.exportAsService.save(this.exportAsConfig, 'exchange')
   
  }

   toCurrencySelected(value){
   	this.toCurrency = value;
   	this.selectedToFiat = false;
   	for(let items of this.currencyData){
   		if(this.toCurrency === items.currencySymbol && items.curnType === 2){
   			this.selectedToFiat = true;
   		} 
   	}
   	this.getPairDetails();
   	if(this.amount){
   		this.amountcal(this.amount)
   	}
   	if(this.price){
   		this.pricecal({price:this.price})
   	}
   	
   }

   change(value){
   	this.apiService.SenData('custom/userbalance',{type:value}).subscribe((result:any)=>{
      console.log(result,'resultdataaaaa')
		this.doughnutChartLabels = result.name;
		this.doughnutChartData = [result.amount];
	})
   }

	isNumberKey(event){
		 const charCode = (event.which) ? event.which : event.keyCode
		 if ((charCode > 34 && charCode < 41) || (charCode > 47 && charCode < 58) || (charCode == 46) || (charCode == 8) || (charCode == 9))
		 {
		  return true;
		 }
		  return false;	 
	}

	amountcal(amount){
	
	  var send=amount*this.marketPrice
	  if(amount!='' && amount!=undefined){
		  this.price=send.toFixed(8)
		  if(this.feePercentage == '%'){
		  	this.receiveAmount = this.price - (this.price*(this.currencyDetails.fee/100));
		  } else {
		  	this.receiveAmount = this.price - (this.price*this.currencyDetails.fee);
		  }
			
		  // this.fee=this.decimalrounds((this.price*this.feecal)/100,8)
		  // this.totalamount=this.price-this.fee
		}
	}
	pricecal(data){
	if(this.marketPrice){
		var rece=data.price/this.marketPrice;
	  if(data.price!='' && data.price!=undefined){
		this.amount=rece;
		this.fee=this.decimalrounds((data.price*this.feecal)/100,8)
		this.totalamount=data.price-this.fee;
		// if(this.price){
			
		// }	
	   }
	}
	
	}

	decimalrounds(value, length) {
        return this.apiService.rounds(+value, length);
  	};

  	getPairDetails(){
  		if(this.fromCurrency && this.toCurrency){
	   		this.apiService.pairs({pair:this.fromCurrency+'/'+this.toCurrency}).subscribe((result:any)=>{
	   			if(result.data){
	   				this.currencyDetails.max_amt = result.data.max_amt;
		   			this.currencyDetails.min_amt = result.data.min_amt;
		   			this.currencyDetails.fee = result.data.fee;
		   			this.currencyDetails.feeType = result.data.feeType;
		   			this.marketPrice = result.data.calculate_market_price;
		   			if(this.currencyDetails.feeType == 1){
		   				this.feePercentage = '%'
		   				if(this.price){
		   					this.receiveAmount = this.price - (this.price*(this.currencyDetails.fee/100));
		   				}
		   			} else {
		   				this.feePercentage = '';
		   				if(this.price){
		   					this.receiveAmount = this.price - (this.price*this.currencyDetails.fee);
		   				}
		   			}
	   			} else {
	   				this.currencyDetails.max_amt = 0;
		   			this.currencyDetails.min_amt = 0;
	   			}
	   		});
   		}
  	}

  	exchangeNow(){
  		
  		for(let items of this.allPairs){
  			if(items.pair === this.fromCurrency+'/'+this.toCurrency && !items.status){
  				this.toastr.error('Currently Exchange is disabled for this pair. Try with other Pairs');
  				return false;
  			}
  		}
  		if(this.amount && this.price){
  			var data={ 	
			  "pair":this.fromCurrency+'/'+this.toCurrency,
			  "amt":this.price,
			  "spendamt":this.amount
			  }
			this.apiService.SenData('custom/exchangepairs',data).subscribe((result:any)=>{
				if(result.status){
					this.toastr.success( 'Exchange request sent succesfully, amount will be credited to your wallet once admin approves.','Success');
				    this.price=""
				    this.amount="";
				    this.receiveAmount = '';
				    this.ngOnInit();
				} else {
					this.toastr.error(result.message);
				}
			})
  		} else {
  			this.toastr.error("Please fill the amount and price");
  		}
  	}

}
