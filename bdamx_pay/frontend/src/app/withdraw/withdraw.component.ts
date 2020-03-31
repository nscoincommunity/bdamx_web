import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService';
import { ToastrService } from 'ngx-toastr';
import { FormsModule,NgForm }   from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';


@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
	currencyData = [];
	withdraw:any={};
	minwithamt;
	maxwithamt;
	withdrawfee;
	enableTFA;
	currencyId;
	receiveAmount;
	withdrawHistory =[];
	userName;
	userEmail;
  currencyType;
  bankList = [];
  bankDetails = [];
  walletBalance;
  bankId;
  siteData;
  exportAsConfig: ExportAsConfig = {
    type: 'xls', // the type you want to download
    elementId: 'myTableElementId', 
  //   options: { // html-docx-js document options
  //   orientation: 'landscape',
  //   margins: {
  //     top: '20'
  //   }
  // }// the id of html/table element
  }
  constructor(
  	private apiService: ApiService,
  	private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private exportAsService: ExportAsService) { }

  currencyStatus : Boolean = false
  ngOnInit() {
    this.apiService.getPageHeader('Withdraw');
    this.apiService.loader(true);
  	this.apiService.get_currency({type:1}).subscribe((result:any)=>{
      if(result.data.length>0){
      this.apiService.loader(false);
  		this.currencyData = result.data;
      this.apiService.currencyWithdraw.subscribe(result=>{
        if(result){
          this.currencySelected(result);
        } else {
          this.currencySelected(this.currencyData[0].currencySymbol);
        }
      });
    }else{
      this.apiService.loader(false);
        this.currencyStatus = true
  		// this.currencySelected(this.currencyData[0].currencySymbol);
    }
  	});

     // this.activatedRoute.paramMap.subscribe(params => {
     //  console.log(params,'paramsss')
      if(this.activatedRoute.snapshot.paramMap.get('id')){
        const data = {
          id:this.activatedRoute.snapshot.paramMap.get('id'),
          status:this.activatedRoute.snapshot.paramMap.get('status')
        }
        this.withdrawStatus(data);
      }

      this.apiService.get_sitesettings().subscribe((result:any)=>{
      this.siteData = result['data'];
      
    });
     // });
  }

 export() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, 'withdraw')
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    // this.exportAsService.get(this.config).subscribe(content => {
    //   console.log(content);
    // });
  }

  currencySelected(value){
  	this.withdraw.currencyName = value;
  	localStorage.setItem('selectedCurrency',value);
  	for(let items of this.currencyData){
  		if(items.currencySymbol === value){
  			this.minwithamt = items.minwithamt;
  			this.maxwithamt = items.maxwithamt;
  			this.withdrawfee = items.withdrawfee;
  			this.currencyId = items._id;
        this.currencyType = items.curnType;
  		}
  	}
  	this.apiService.GetData('custom/getuser').subscribe((result:any)=>{
  		let userData = result.data;
  		this.userName = userData.user_name;
  		this.userEmail = userData.email;
  		this.enableTFA = userData.tfaenable;
      this.apiService.SenData('custom/withdrawhistory',{currency:this.withdraw.currencyName}).subscribe((resData:any)=>{
        if(resData.status){
          let withdrawData = resData.data.map(items=>{
            items.userName = this.userName;
            items.userEmail = this.userEmail;
            return items;
          });
          this.withdrawHistory = withdrawData;
        }; 
      })
  	});
  	// this.apiService.SenData('custom/withdrawhistory',{currency:this.withdraw.currencyName}).subscribe((result:any)=>{
  	// 	if(result.status){
  	// 		let withdrawData = result.data.map(items=>{
  	// 			items.userName = this.userName;
  	// 			items.userEmail = this.userEmail;
  	// 			return items;
  	// 		});
  	// 		this.withdrawHistory = withdrawData;
  	// 	}; 
  	// })

    this.apiService.SenData('custom/walletbalance',{ currencyId:this.currencyId}).subscribe((result:any)=>{
      if(result.data.wallet[0] && result.data.wallet[0].amount){
        this.walletBalance = result.data.wallet[0].amount;
      }else{
        this.walletBalance = 0;
      }
      
    });
    

    if(this.currencyType == 2){
      this.apiService.SenData('fiat/getuserbank',{currency:this.withdraw.currencyName}).subscribe((result:any)=>{
        this.bankList = result.data;
        if(this.bankList && this.bankList.length > 0){
          this.bankSelected(this.bankList[0].bank)
        } else {
          this.router.navigateByUrl('/bankdetail');
          this.toastr.error('Please Add Your bank details for Selected Currency');
        }
        
      })
    }
  }

  ontypeChange(value){
  	this.receiveAmount = value - ((this.withdrawfee /100)*value);
   }

  bankSelected(value){
    this.withdraw.bankName = value
    for(let items of this.bankList){
      if(items.bank === value){
        this.bankId = items._id;
      }
    }
    this.apiService.SenData('fiat/getuserbankdetails',{currency:this.withdraw.currencyName,bank:value}).subscribe((result:any)=>{
      this.bankDetails = result.data;
    })

  }

  withdrawStatus(data){
    this.apiService.SenData('fiat/updatewithstatus',data).subscribe((result:any)=>{
      if(result.data.user_status == '0'){
        if(data.status == 'approve'){
          this.toastr.success('Request Approved Successfully!');
        }else{
          this.toastr.success('Request Rejected Successfully!');
        }
        
      } else {
        if(result.data.user_status == '1'){
           this.toastr.error('Request already Approved');
         }else{
          this.toastr.error('Request already Rejected');
         }
      }
      this.router.navigateByUrl('/withdraw')
    })
  }

  saveWithdraw(withdrawForm: NgForm){
    var currencyChosen = localStorage.getItem('selectedCurrency')
  	let withdraw = withdrawForm.value;
  	if(withdraw.tfaCode){
  		this.apiService.SenData('custom/loginverifytfa', {tfaonecode:withdraw.tfaCode}).subscribe((result:any)=>{
  			if(result.status){
          if(this.currencyType == 1){
              let data = {
                curr_id:this.currencyId,
                reqamt:withdraw.withamount,
                accnumber:withdraw.withaddress,
                comment:withdraw.comments,
                type          : "crypto",
                  wdtype        : '0',
                  cursym:withdraw.currencyName
              }
            this.apiService.SenData('custom/withdraworder',data).subscribe((result:any)=>{
              if(result.status){
                this.toastr.success(result.message);
                withdrawForm.resetForm();
               this.ngOnInit();
                
              } else {
                this.toastr.error(result.errMsg);
              }
            })
          } else {
            let data = {
              amount:withdraw.withamount,
              currencyid:this.currencyId,
              bankid:this.bankId
            }
            this.apiService.SenData('fiat/withdrawfait', data).subscribe((result:any)=>{
              if(result.status){
                this.toastr.success(result.message);
                withdrawForm.resetForm();
                this.ngOnInit();
              } else {
                this.toastr.error(result.errMsg);
              }
            })
          }
  				
			  } else{
			  	this.toastr.error('Please Enter Valid TFA code');
			  }
  		});
  	} else {
  		this.toastr.error('Please Enter TFA code to proceed Withdraw');
  		return false;
  	}
  	
  }

}
