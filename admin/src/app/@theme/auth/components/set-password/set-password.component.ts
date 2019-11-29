import { Component, Inject } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../../../common.service';

@Component({
  selector: 'ngx-set-password-page',
  styleUrls: ['./set-password.component.scss'],
  providers: [CommonService],
  template: `    
      <h2 class="title"><img src="{{sitelogo}}" width="310px"/></h2>
      <form (ngSubmit)="requestPass()" #requestPassForm="ngForm" class="login_form">
        <div class="form-group">
          <label for="input-email" class="sr-only">New password</label>
          <input type="password" class="form-control" placeholder="Enter Password" [(ngModel)]="user.new_pwd" name="new_pwd" #new_pwd="ngModel" [class.form-control-danger]="new_pwd.invalid && new_pwd.touched" [minlength]="8" [maxlength]="20" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$" required />
          <small class="errr" *ngIf="new_pwd.invalid && new_pwd.touched && new_pwd.errors?.required">New Password is required!</small>    
          <small class="errr" *ngIf="new_pwd.invalid && new_pwd.touched && new_pwd.errors?.pattern">Password should be 8 character ,atleast 1 Upper case,1 Lower Case 1 Number and 1 Special character</small>    
          <small class="errr" *ngIf="new_pwd.invalid && new_pwd.touched && (new_pwd.errors?.minlength || new_pwd.errors?.maxlength)">Password should contains from 8  to 20  characters </small>       
        </div>
        <div class="form-group">
          <label for="input-email" class="sr-only">Confirm Password</label>
          <input type="password" class="form-control" placeholder="Confirm Password" name="confirm_pwd" [(ngModel)]="user.confirm_pwd" #confirm_pwd="ngModel" [class.form-control-danger]="(confirm_pwd.invalid || new_pwd.value != confirm_pwd.value) && confirm_pwd.touched" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$" required />

          <small class="errr" *ngIf="confirm_pwd.invalid && confirm_pwd.touched && confirm_pwd.errors?.required"> Confirm Password is required!</small>  
          <small class="errr" *ngIf="confirm_pwd.touched && new_pwd.value != confirm_pwd.value && !confirm_pwd.errors?.required">Password does not match password confirmation.</small>  
          <small class="errr" *ngIf="confirm_pwd.invalid && confirm_pwd.touched && confirm_pwd.errors?.pattern && new_pwd.value == confirm_pwd.value">Password should be 8 character ,atleat 1 Upper case, 1 Lower case 1 Number and 1 Special character.</small>     
        </div>
        <button *ngIf="!submitted"  [disabled]="submitted || !requestPassForm.form.valid || new_pwd.value != confirm_pwd.value" class="btn btn-hero-success btn-block"
                [class.btn-pulse]="submitted">
          Reset password
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
export class NgxsetPasswordComponent {
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
    this.CommonService.requestData('admin/setnewpassword',this.user)
      .subscribe(resData => {
        if(resData.status == true) {
           this.submitted = false;
           this.toastr.success('Password updated successfully', 'Success!');
            this.router.navigate(['/BdaPLB45MKLXM8957LOO/login']);
        } else {
          this.submitted = false;
          this.toastr.error(resData.error, 'Oops!');          
        }
    });
  }
  ngOnInit(){
    this.route.params.subscribe(params => {
      var req={
        '_id':params['id'],
        'current_date':new Date()
      }
      this.CommonService.requestData('admin/check_subadmin',req).subscribe(resData => {  
        if(resData.success == true){
          this.user._id=resData.data._id;
        }
        else{
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
