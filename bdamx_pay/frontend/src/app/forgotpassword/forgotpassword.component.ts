import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/apiService';
import { FormsModule,NgForm }   from '@angular/forms';
import {ActivatedRoute,NavigationEnd, Router} from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgetinput: any = {};
  resetinput:any={}
  forgetsubmitted: boolean = false;
  resetFormSubmit:Boolean=false
  resetpass: boolean = false;
  user_id :any 
  u_id:any
  captcha_value = '';
  jegan = "dsadsadsad"
  change_icon : any = "assets/images/pass-icon.png"
  pass_icon : any ="assets/images/pass-icon.png"

  constructor(private router:Router,
  private route:ActivatedRoute,private toastr: ToastrService,private apiService: ApiService,private recaptchaV3Service: ReCaptchaV3Service) { }



  ngOnInit() {

  	var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+'@'+time;
    var u_id = this.route.snapshot.paramMap.get('id')
  	this.user_id=this.route.snapshot.paramMap.get('id')

  	var check_date={
  		user_id:u_id,
  		validate:dateTime
  	}


    if(check_date.user_id!=null){
      this.link_verify(check_date)  
    }
    console.log(this.change_icon,this.pass_icon)

  }


  public executeImportantAction(method, callback): void {
    this.recaptchaV3Service.execute(method)
      .subscribe(token =>{ 
        this.captcha_value = token;
        callback(true) 
    });
  }

  
  
  change_passtype(clickid){
    console.log(this.change_icon,this.pass_icon,clickid)
      var x = (<HTMLInputElement>document.getElementById(clickid));
      console.log(x, 'ghfdg')
      if (x.type === "password") {
        x.type = "text";
        if(clickid === "c_pass"){
          this.change_icon = "assets/images/pass-hide.png";
        }else{
          this.pass_icon = "assets/images/pass-hide.png";  
          
        }
        
      } else {
        x.type = "password";
        if(clickid === "c_pass"){
          this.change_icon = "assets/images/pass-hide.png";
        }else{
          this.pass_icon = "assets/images/pass-icon.png";   
        }
      }
    }


  link_verify(data){
    this.apiService.loader(true);
    this.apiService.SenData("exchange/reset_linkverify",data).subscribe((resData:any) => {
  		if(resData.status){
        this.resetpass=true
        this.apiService.loader(false);
  		}else{
  		this.toastr.error(resData.Msg,'');
			this.resetpass=false
      this.apiService.loader(false);
			this.router.navigateByUrl('/forgot');
  		}

  	});
  }



  forgetSubmit(form: NgForm){

  	this.forgetsubmitted = true;
    this.executeImportantAction('forget_pass',(response)=>{
      	var today = new Date();
      	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      	var dateTime = date+'@'+time;
        	this.forgetinput.validate=dateTime
        	console.log(this.forgetinput)
          this.forgetinput.captcha_value = this.captcha_value
          this.apiService.SenData("exchange/forget_pass",this.forgetinput).subscribe((resData:any) => {
          	if(resData.status){
      			this.forgetsubmitted = false;
      			this.toastr.success(resData.Msg,'',);
            
      			form.resetForm();
          	}else{
      			this.forgetsubmitted = false;
      			if(resData.verify_type !== "catch"){
      				this.toastr.error(resData.Msg,'',);
      			}


          	}
          });
    });
  }

   resetSubmit(form: NgForm){
    this.resetFormSubmit=true
    var sendData = {
      u_id:this.user_id,
      password:this.resetinput.new_pass
    }
    this.apiService.SenData('exchange/reset_pass', sendData).subscribe((resData:any) => {
      if(resData.status){
        this.toastr.clear();
        this.router.navigateByUrl('/login');
          this.apiService.SenData('exchange/logout_status',{id:this.user_id}).subscribe((result:any)=>{
          });
        this.apiService.Emitsocket('logoutStatus',0);
        form.resetForm();
      this.toastr.success(resData.Msg,'',);
      this.resetFormSubmit=false
      }else{
        this.toastr.clear();
      this.toastr.error(resData.Msg,'',);
      form.resetForm();
      this.resetFormSubmit=false
      }
    });
  }

}
