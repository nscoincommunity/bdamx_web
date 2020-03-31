/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl,NgForm } from '@angular/forms';
// import { NB_AUTH_OPTIONS } from '../auth.options';
// import { getDeepFromObject } from '../helpers';
// import { NbAuthService } from '../services/auth.service';
// import { NbAuthResult } from '../services/auth-result';

// import { NbAuthService } from '../../services/auth.service';
// import { NbAuthResult } from '../../services/auth-result';
// import { CommonService } from 'app/common.service';
// import { ToasterService, ToasterConfig} from 'angular2-toaster';

import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../../../common.service';

@Component({
  selector: 'ngx-request-password-page',
  styleUrls: ['./request-password.component.scss'],
  providers: [CommonService],
  template: `    
      <h2 class="title"><img src="{{sitelogo}}" width="310px"/></h2>
      <small class="form-text sub-title">Enter your email adress and we’ll send you reset-password link</small>
      <form (ngSubmit)="requestPass(requestPassForm)" #requestPassForm="ngForm" class="login_form">
        <div class="form-group">
          <label for="input-email" class="sr-only">Enter your email address</label>
          <input name="admin_emailid" [(ngModel)]="user.admin_emailid" id="input-email" #admin_emailid="ngModel"
                 class="form-control" placeholder="Email address" pattern=".+@.+\..+"
                 [class.form-control-danger]="admin_emailid.invalid && admin_emailid.touched"
                 required
                 autofocus>
          <small class="form-text error" *ngIf="admin_emailid.invalid && admin_emailid.touched && admin_emailid.errors?.required">
            Email is required!
          </small>
          <small class="form-text error"
                 *ngIf="admin_emailid.invalid && admin_emailid.touched && admin_emailid.errors?.pattern">
            Email should be the real one!
          </small>
        </div>

        <button *ngIf="!submitted"  [disabled]="submitted || !requestPassForm.form.valid" class="btn btn-hero-success btn-block"
                [class.btn-pulse]="submitted">
          Request password
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
export class NgxRequestPasswordComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';
  logo = "../../../../../assets/images/logo.png";

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
sitelogo:any;
  constructor(protected router: Router,private route: ActivatedRoute,private CommonService: CommonService,private toastr: ToastrService) { 

  }

 

  requestPass(form: NgForm): void {
    this.errors = this.messages = [];
    this.submitted = true;
    this.CommonService.requestData('admin/forgetPwdAdmin',this.user)
      .subscribe(resData => {
        if(resData.status == true) {
           this.submitted = false;
           this.user = '';
           form.resetForm();
          this.toastr.success('Reset password link is send to your mail!', 'Success!');

          setTimeout(() => {
            this.router.navigate(['/0ec82d0ac9619f3c2a3ff2/login']);
          }, 1000);
        } else {
          this.submitted = false;
          this.toastr.error(resData.error, 'Oops!');          
        }
    });
  }
  ngOnInit(){
    this.CommonService.getData('sitesetting/get_settings').subscribe(resData => {  
        this.sitelogo = resData.data.site_logo;
    });
    
  }

  // getConfigValue(key: string): any {
  //   return getDeepFromObject(this.options, key, null);
  // }
}
