import { Component, OnInit	 } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ApiService } from './services/apiService';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  siteMaintainence;
  userId;
  ipBlocked = false;
  constructor(private spinner: NgxSpinnerService,private apiService: ApiService, private router: Router,private toastr: ToastrService){

  }

  ngOnInit(){

    this.get_pubip()



    if(localStorage.getItem('ipBlocked') == 'yes'){
      this.ipBlocked = true;
      this.router.navigateByUrl('/ipblock');
    }else {
      this.ipBlocked = false;
    }
  	this.apiService.spinners.subscribe(result=>{
  		if(result){
  			this.spinner.show();
  		}else{
  			this.spinner.hide();
  		}
  	});
    if(localStorage.getItem('auth')){
      this.apiService.GetData('BdAMx4fdex/getuserId').subscribe((result:any)=>{
        this.userId = result.userId;
      })
    }
    
    this.apiService.get_sitesettings().subscribe((result:any)=>{
      this.siteMaintainence = result.data.site_maintenance;
      if(this.siteMaintainence == 0){
        this.router.navigateByUrl('/undermaintainence');
      }else {
        if(this.router.url == '/undermaintainence'){
           this.router.navigateByUrl('');
        } else {
          this.router.navigateByUrl(this.router.url);
        }
      }
    });

    

    //deactivateuser

    this.apiService.Triggersocket('getdeactive').subscribe(res => {
      console.log('deactivateddddd');
      if(this.userId === res.message._id && res.message.status == 0){
        this.apiService.logout();
        this.toastr.error("You are deactived by admin. Please contact admin for futher details");
      }
    });

    this.apiService.Triggersocket('getlogoutStatus').subscribe(res => {
     if(res.message == 0){
      localStorage.removeItem('auth')
      this.router.navigate(['/login']);
      localStorage.removeItem('userDetails');
     }
    });
    
    this.apiService.Triggersocket('browserLogout').subscribe(res =>{
      if(localStorage.getItem('auth')){
        var userDetails = JSON.parse(localStorage.getItem('userDetails'));
        if(localStorage.getItem('auth') != res.verifyToken && userDetails.email == res.user_mail){
          localStorage.removeItem('auth')
          this.router.navigate(['/login']);
          localStorage.removeItem('userDetails');
        }
      }
    });

    this.apiService.Triggersocket('ipblocked').subscribe(res =>{
      if(localStorage.getItem('localIp') == res.ip){
        if(res.status == 1){
          this.toastr.error('Your IP is currenctly blocked by admin');
          this.ipBlocked = true;
          localStorage.setItem('ipBlocked','yes');
          this.router.navigateByUrl('/ipblock')
        } else {
          localStorage.removeItem('ipBlocked');
          this.router.navigateByUrl('')
          this.ipBlocked = false;
        }
      }
    });


    this.apiService.Triggersocket('Useripblocker').subscribe(res =>{
      if(localStorage.getItem('localIp') == res.blocker){
        if(res.status){
          this.toastr.error('Your IP is currenctly blocked by admin');
          this.ipBlocked = true;
          localStorage.setItem('ipBlocked','yes');
          this.router.navigateByUrl('/ipblock')
        } else {
          localStorage.removeItem('ipBlocked');
          this.router.navigateByUrl('')
          this.ipBlocked = false;
        }
      }
    });
  }


  async get_pubip(){
      const response = await fetch('https://jsonip.com/')
      const myJson = await response.json()
      localStorage.setItem('localIp',myJson.ip)
      console.log("myJson",myJson)

    }


  

  




}
