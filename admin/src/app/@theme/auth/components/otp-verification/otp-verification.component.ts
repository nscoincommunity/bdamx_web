import { Component, Inject } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../../../common.service';

@Component({
  selector: 'ngx-set-password-page',
  styleUrls: ['./otp-verification.component.scss'],
  providers: [CommonService],
  template: `    
      <h2 class="title"><img src="{{sitelogo}}" width="310px"/></h2>
      <form (ngSubmit)="requestPass()" #requestPassForm="ngForm" class="login_form">
        <div class="form-group">
          <label for="input-email" class="sr-only">Your OTP</label>
          <input type="text" class="form-control" placeholder="Enter Password" [(ngModel)]="user.new_pwd" name="new_pwd" #new_pwd="ngModel" [class.form-control-danger]="new_pwd.invalid && new_pwd.touched" required />
          <small class="errr" *ngIf="new_pwd.invalid && new_pwd.touched && new_pwd.errors?.required">New Password is required!</small>    
        </div>
        <button *ngIf="!submitted"  [disabled]="submitted || !requestPassForm.form.valid" class="btn btn-hero-success btn-block"
                [class.btn-pulse]="submitted">
          Reset account
        </button>
        <div class="load_efftect">
          <img *ngIf="submitted"  height="100px" src="assets/images/loader.gif" />
        </div>
      </form>

      <div class="links">
        <small class="form-text">
          Already have an account? <a routerLink="../login"><strong>Sign In</strong></a>
        </small>
      </div>
  `,
})
export class NgxotpComponent {
  key = CryptoJS.enc.Base64.parse("#base64Key#");
  iv  = CryptoJS.enc.Base64.parse("#base64IV#");
  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';
  logo = "../../../../../assets/images/logo.png";
  // userdetails:any={};
  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
sitelogo:any;
  constructor(protected router: Router,private route: ActivatedRoute,private CommonService: CommonService,private toastr: ToastrService) { 

  }

 

  requestPass(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    this.CommonService.requestData('admin/check_opt_failed',this.user)
      .subscribe(resData => {
        if(resData.success == true) {
           this.submitted = false;
           this.toastr.success('Account activated successfully', 'Success!');
            this.router.navigate(['/BdaPLB45MKLXM8957LOO/login']);
        } else {
          this.submitted = false;
          this.toastr.error(resData.Message, 'Oops!');          
        }
    });
  }
  ngOnInit(){
    this.route.params.subscribe(params => {
      var req={
        '_id':params['id']
      }
      this.CommonService.requestData('admin/send_failed_otp',req).subscribe(resData => {  
        if(resData.success == true){
          this.user._id=resData.data._id;
          this.toastr.info('Check OTP in your mail id', 'INFO');
        }
        else{
          console.log('asdasd')
          this.router.navigate(['/BdaPLB45MKLXM8957LOO/login']);
        }
      });      
    })
    this.CommonService.getData('sitesetting/get_settings').subscribe(resData => {  
        this.sitelogo = resData.data.site_logo;
    });
  }

  // getConfigValue(key: string): any {
  //   return getDeepFromObject(this.options, key, null);
  // }
}
