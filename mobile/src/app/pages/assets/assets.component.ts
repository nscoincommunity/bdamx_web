import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClipboardService } from 'ngx-clipboard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {
	listCurrency=[];
	allCurrency = [] ;
  btcAddress;
  localaddr;
  originaladdress;
  Mywalbal;
  MyDBbal;
  MyDBhold;
  Mycurn;
  img_qr='';
  maxWithdrawAmt;
  minWithdrawAmt;
  feeamt;
  receiveamt;
  withdrawForm: FormGroup;
  captcha='';
  submitloader=0;
  user_id = localStorage.getItem('address');
  Basecoin;
  deposit_data=[];
  withdraw_data=[];
  currencies =[];
  withamount;
  curCurrency;
  submitted;


  constructor(
    private apiService: ApiService, 
    private router: Router, 
    private toastr: ToastrService, 
    private _clipboardService: ClipboardService,
    private formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.btcAddress = localStorage.getItem('address');
    this.localaddr = localStorage.getItem("address");
    this.Basecoin=localStorage.getItem("Basecoin");
    this.originaladdress=localStorage.getItem("original_address");
    this.getFunds(this.localaddr);
    this.img_qr='https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=' + this.originaladdress + '&choe=UTF-8&chld=L';
    this.withdrawForm = this.formBuilder.group({
      withamount: ['', [Validators.required,Validators.pattern(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/)]],
      privatekey: ['', [Validators.required]],
      captcha: ['',[Validators.required]]
    });
    this.deposit();
    this.withdraw();
    this.apiService.get_all_currencies().subscribe((res:any)=>{
        this.currencies = res.data;
    })  
  }
  get f1() { return this.withdrawForm.controls; }

  getFunds(address){
    this.apiService.loader(true);
    this.apiService.get_funds({address:address}).subscribe((result:any)=>{
      if(result.status){
        this.apiService.loader(false);
      this.listCurrency = result.data.filter(items=>{return items.currencySymbol === 'BTC'});
      this.maxWithdrawAmt = this.listCurrency[0].maxwithamt;
      this.minWithdrawAmt = this.listCurrency[0].minwithamt;
      this.feeamt = this.listCurrency[0].withdrawfee;
      this.receiveamt = 0.00000000;
      this.allCurrency = result.data.filter(items=>{return items.currencySymbol === 'BTC'});
      console.log(this.listCurrency,'llll')
      var Basecoin = localStorage.getItem("Basecoin");
      this.getBalance(0);
    }
    else{
      if(this.localaddr){
        this.toastr.error(result.Message,"ERROR")
      }
    }
    })
  }

  async getBalance(task) {
    var getresult = this.listCurrency;
    var addr = localStorage.getItem("address");
    var Basecoin = localStorage.getItem("Basecoin");
    try{
        this.Mywalbal = getresult[task].walletBalance;
        this.MyDBbal = getresult[task].balance;
        this.MyDBhold = getresult[task].hold;
        this.Mycurn = getresult[task].currencySymbol;
        this.listCurrency= getresult;
        this.allCurrency=getresult
    }
    catch(e){
      console.log(e,'error')
      getresult[task].walletBalance = 0;
      this.allCurrency=getresult;
    }
  }

  copyText() {
    this._clipboardService.copyFromContent(this.originaladdress)
    this.toastr.success("Address Copied", 'SUCCESS');
  }

  sendMaxWithAmount(){
     this.withdrawForm.controls["withamount"].setValue(
        parseFloat(this.MyDBbal).toFixed(8)
      );
  }

  resolved(captchaResponse: string) {
      this.captcha=captchaResponse;
    }

  logout(){
    localStorage.removeItem('address');   
    localStorage.removeItem('original_address');    
    localStorage.removeItem('Basecoin');    
    localStorage.removeItem('addresstype');
    localStorage.removeItem('derivationPath');
    this.router.navigateByUrl('');
    this.apiService.walletLogin(false);
  }

  withcalc(withvalue){
    this.withamount = withvalue;
    if (this.withamount == "" || isNaN(this.withamount) || this.withamount <= 0) {
      this.feeamt = 0;
      this.receiveamt = 0;
      return false;
    }else if (this.withamount.length >= 20) {
      this.feeamt = 0;
      this.receiveamt = 0;
      return false;
    } else {
        var getresult = this.listCurrency;
        this.curCurrency=this.listCurrency[0];
        var feetype;
        var fee;
        feetype = this.curCurrency.feetype;
        fee = this.curCurrency.withdrawfee;
        if(feetype == 1){
          this.feeamt = this.rounds(+this.withamount * fee/100);
        }
        else{
          this.feeamt = this.rounds(fee);
        }
        this.receiveamt = this.rounds(+this.withamount - this.feeamt);
      }
  }

  rounds(n) {
    var roundValue = (+n).toFixed(8)
    return roundValue
  }

  isNumber(evt) { 
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 
      && (charCode < 48 || charCode > 57))
       return false;
    return true;
  }

  withdrawsite(datas,SwithdrawForm,type){
      this.submitloader = 1;
      var req={
        "toAddress":datas.privatekey.value,
        "useraddress":this.originaladdress,
        "withamount":this.withamount,
        "type":'user'
      }
      this.apiService.btc_withdraw(req).subscribe((res:any)=>{
        this.submitloader = 0;
        // this.response=null;
        this.captcha='';   
        if(res.status == true){
          this.toastr.success(res.Message,'SUCCESS');
          this.apiService.admin_getbalance({"address":this.originaladdress.toLowerCase()}).subscribe((ress:any)=>{
            this.Mywalbal=ress.amount + ress.hold;
            this.MyDBbal=ress.amount;
            this.MyDBhold=ress.hold;          
          })        
          SwithdrawForm.reset();
        }
        else{
          this.captcha = '';
          return false;
          this.toastr.error(res.Message,'ERROR');
        }
      }) 
    } 

  deposit(){
    this.apiService.deposit_hist({userId:this.user_id}).subscribe((res:any)=>{
      if(res.length > 0){
        res.map(items=>{
        items.toCurrency = items.comment.split(" ")[0];
        return items;
      });
        this.deposit_data=res;
      }
    })
  }

  withdraw(){
    this.apiService.withdraw_hist({userId:this.user_id}).subscribe((res:any)=>{
      for(let items of res){
        for(let currencies of this.listCurrency){
          if(items.withcurrency === currencies._id){
            items.toCurrency = currencies.currencySymbol;
          }
        }
      }
      this.withdraw_data=res;
    })
  }  

}
