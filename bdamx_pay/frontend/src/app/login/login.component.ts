import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/apiService';
import { FormsModule,NgForm }   from '@angular/forms';
import {ActivatedRoute,NavigationEnd, Router} from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {


  loginput: any = {};
  tfainput: any = {};
  siteData:any = {}
  logsubmitted: boolean = false;
  tfasubmited: boolean = false;
  captcha_value = '';

  @ViewChild('tfapopup') Tfapopup: BsModalRef;
  modalRef: BsModalRef;
  
  
  constructor(private modalService: BsModalService,private router:Router,
  private route:ActivatedRoute,private toastr: ToastrService,private apiService: ApiService,private recaptchaV3Service: ReCaptchaV3Service) { 
  }

  ngOnInit() {
    this.getdata()
    //this.openPopup(this.Tfapopup)
    
  }

  public executeImportantAction(method, callback): void {
    this.recaptchaV3Service.execute(method)
      .subscribe(token =>{ 
        this.captcha_value = token;
        callback(true) 
    });
  }

  openPopup(data) {

    this.modalRef = this.modalService.show(data);
  }

  closePopup(data){
    console.log(this.modalRef)
   
    this.modalRef.hide();
  }


  getdata(){
    this.apiService.get_sitesettings().subscribe((result:any)=>{
      this.siteData = result['data'];
      
    });
  }

  pass_icon:any ="assets/images/pass-icon.png"
  change_passtype(){
      var x = (<HTMLInputElement>document.getElementById("password"));
      if (x.type === "password") {
        x.type = "text";
        this.pass_icon = "assets/images/pass-hide.png";
      } else {
        x.type = "password";
        this.pass_icon = "assets/images/pass-icon.png";
      }
    } 

  tfaenable : boolean = false
  tfamail : any
  logSubmit(form: NgForm){

    this.logsubmitted = true;
    this.executeImportantAction('login',(response)=>{
      this.loginput.captcha_value = this.captcha_value;
      this.loginput.login_status = 1;
      this.loginput.ipconfig = localStorage.getItem('localIp')
      this.apiService.SenData("exchange/step_in",this.loginput).subscribe((resData:any) => {
        if(resData.status){
          if(resData.tfatype == "tfa"){
              this.tfaenable = true;
              this.logsubmitted = false;
              this.tfainput = {}
              this.tfamail = resData.data
              this.openPopup(this.Tfapopup)
          }else{
              this.logsubmitted = false;
              localStorage.setItem('auth',resData.successData.origin);
              this.toastr.success(resData.Msg,'',);
              this.apiService.GetData('custom/getuser').subscribe((result:any)=>{
                if(result.status){
                  this.apiService.getUser(result.data)
                }
              });
              this.router.navigateByUrl('/balance');
              form.resetForm();  
          }
          
        }else{
          this.logsubmitted = false;
          if(resData.verify_type !== "catch"){
            if(resData.verify_type === "unregister"){
            this.router.navigateByUrl('/signup');
            }
            this.toastr.error(resData.Msg,'',);   
            
          }

        }
      });
    });
  }

  TFASubmit(form: NgForm){
    this.tfasubmited = true
    this.executeImportantAction('TFA',(response)=>{
      var sendata = {
        tfacode : this.tfainput.tfacode,
        tfaauth : this.tfamail,
        captcha_value : this.captcha_value
      }
      this.apiService.SenData('exchange/tfaverify',sendata).subscribe((resData:any)=>{
      if(resData.status){
        this.tfasubmited = false;
        this.closePopup(this.Tfapopup)
        localStorage.setItem('auth',resData.successData.origin);
        this.toastr.success(resData.Msg,'',);
        this.apiService.GetData('custom/getuser').subscribe((result:any)=>{
          if(result.status){
            this.apiService.getUser(result.data)
          }
        });
        this.router.navigateByUrl('/balance');
        form.resetForm(); 
        this.closePopup(this.Tfapopup)
      }else{
        this.tfasubmited = false;
        this.toastr.error(resData.Msg,'',);
      }

      });
    });
    
    

  }

}
