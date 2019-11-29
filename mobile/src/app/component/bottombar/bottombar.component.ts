import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent implements OnInit {


  currencyData = [];
	selectedCurrency;
	recommended = [];
	usdVal={'EOS':'','BTC':'','ETH':''};
  pairsData = [];
  walletType;
  walletSeleted;
  newEmail = true;
  logotp;
  loginForm: FormGroup;
  otpstatus=0;
  display;
  display1;
  regotp=true;
  regotp1=false;
  submitted = false;
  submitted1 = false;
  regotp2=true;
  registerForm: FormGroup;
  logotp1=false;
  showAssets = false;
  constructor(
    private apiService: ApiService, 
    private formBuilder: FormBuilder,
    private toastr: ToastrService, 
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.apiService.loggedin.subscribe(result=>{
      this.showAssets=result;
    });
    if(localStorage.getItem('address')){
      this.showAssets = true;
    } else {
      this.showAssets = false;
    }

    this.apiService.loader(true);
  	this.apiService.get_pairs().subscribe(resData => {
    	if(resData['status']){
	        this.apiService.loader(false);
	        var currencyDetails  = resData['Message'];
    		this.currencyData = JSON.parse(JSON.stringify(currencyDetails));
    		this.currencyData.map(items=>{
	            items.pairs.map(pairDetails =>{
	            	this.apiService.get_USDValues().subscribe((resData:any) =>{ 
	                resData.map(items=>{
	                  if(pairDetails.pair.split('_')[0] === items.currencySymbol){
	                    pairDetails.usdEql = items.EstimatedUSD * pairDetails.marketPrice
	                  }
	                })
	              });
	            	this.recommended.push(pairDetails);
	            })
    		});
    		this.loadPairs(this.currencyData[0]);
    	}
    });
    this.apiService.get_USDValues().subscribe((resData:any) =>{ 
  		resData.map(items=>{
  			this.usdVal[items.currencySymbol] = items.EstimatedUSD;
  		});
  	});
    this.loginForm = this.formBuilder.group({
      otp: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    this.registerForm = this.formBuilder.group({
      otp: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.loginForm.controls; }
  get f1() { return this.registerForm.controls; }

  loadPairs(items){
  	this.pairsData = items.pairs;
  	this.selectedCurrency = items.currency;
  }

  radioChange(event){
    console.log(event)
    this.walletType = event;
    this.walletSeleted = event;
  }

  close_model(){
    var button=document.getElementById('cls_btn');
    button.click();         
    let scrollToTop = window.setInterval(() => {
      this.display = true;
      this.display1 = false;
      this.walletType = undefined;
      this.walletSeleted = ''; 
      this.newEmail = true;
      window.clearInterval(scrollToTop);
    },800);   
  }

  openLogin(){
    var button=document.getElementById('wallet_btn');
    button.click();  
  }

  loginOTP(datas){
  	// alert("Fsdafdsffd")
      if(datas.email.status == "INVALID"){
        this.toastr.error("Please enter email",'ERROR')
      }
      else{
        this.logotp = true;
        this.newEmail = false;
        var obj = {email:datas.email.value}
        this.apiService.login_send(obj).subscribe((res:any)=>{
          if(res.status){
            this.otpstatus=1;
            this.toastr.success(res.Message,"SUCCESS");
          }
          else{
          	this.newEmail = true;
             this.toastr.error(res.Message,'ERROR')
          }
        }) 
      }
  }

  loginsite(datas){
    if(datas.otp.status == "INVALID"){
      this.toastr.error("Please enter OTP",'ERROR')
    }
    else{
      this.logotp1 = true;
      var obj = {email:datas.email.value,otp:datas.otp.value}
      this.apiService.login_site(obj).subscribe((res:any)=>{
        this.logotp1 = false;
        if(res.status){
          this.otpstatus=0;
          var button=document.getElementById('cls_btn');
          button.click(); 
          this.toastr.success(res.Message,'SUCCESS');
          localStorage.setItem("address", res.originaladdress);
          localStorage.setItem("original_address", res.originaladdress);
          localStorage.setItem("Basecoin", this.walletType); 
          this.apiService.walletLogin(true);         
          this.display=true;
          this.display1=false;
          this.router.navigate(['/assets']);
        }
        else{
          this.toastr.error(res.Message,'ERROR')
        }
      }) 
    }
  }

  OTPSend(datas){
    if(datas.email.status == "INVALID"){
      this.toastr.error("Please enter email",'ERROR')
    }
    else{
      this.regotp=false;
      this.regotp1=true;
      var obj = {email:datas.email.value}
      this.apiService.send_otp(obj).subscribe((res:any)=>{
        this.regotp1=false;
        if(res.status){
          this.toastr.success(res.Message,"SUCCESS")
        }
        else{
          this.regotp=true;
          this.toastr.error(res.Message,'ERROR')
        }
      }) 
    }
  }

      onSubmitreg(){
      
    this.submitted1 = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    else{
    this.regotp2=false;
    this.http.get<{ip:string}>('https://jsonip.com')
    .subscribe( data => {
      
      var obj ={
        'email':this.registerForm.value.email,
        'otp':this.registerForm.value.otp,
        'ip':data.ip
      } 
      this.apiService.register_btc(obj).subscribe((res:any)=>{
        if(res.status){
          this.toastr.success(res.Message,"SUCCESS")
          localStorage.setItem("address", res.address);
          localStorage.setItem("original_address", res.address);
          localStorage.setItem("Basecoin", this.walletType);
          this.apiService.walletLogin(true);  
          var button=document.getElementById('cls_btn');
          button.click();          
          this.display=true;
          this.display1=false;
          this.router.navigate(['/assets']);          
        }
        else{
          this.regotp2=true;
          this.toastr.error(res.Message,'ERROR')
        }
      }) 
    })      
    }

  }

  
}
