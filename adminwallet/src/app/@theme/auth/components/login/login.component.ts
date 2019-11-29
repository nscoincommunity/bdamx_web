import { Component, Inject, OnInit, AfterViewInit, ChangeDetectorRef, ElementRef, ViewChild  } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { CommonService } from '../../../../common.service';
import { NgbModal, ModalDismissReasons, NgbTabChangeEvent,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router,ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';
import PatternLock from '../../../../../assets/patternLock/patternLock';
import * as $ from 'jquery/dist/jquery.min.js';

import 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  providers: [CookieService,CommonService]
})
export class NgxLoginComponent {
  seesiondet;
  roledet;

	user: any = {};
	submitted: boolean = false;
	modalRef: NgbModalRef;

	captchavalue = 0;
	public siteKey = '';
  name=""
	copyResOtp:any;
  newOtp:any;
  otp = "";
  sitelogo:any;
  otpId:any;
  emailid = "";
  passwordid = "";
  errMsg = "";
  showErrMsg = false;
  key = CryptoJS.enc.Base64.parse("#base64Key#");
  iv  = CryptoJS.enc.Base64.parse("#base64IV#");

  @ViewChild('loaderModal') loaderModal: ElementRef;

  resolved(captchaResponse: string) {
    if(captchaResponse){
      this.captchavalue = 1;
    } else {
      this.captchavalue = 0;  
    }
  }

	constructor(
    protected router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private CommonService: CommonService,
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
    ){}

  ngOnInit() {

    var lock = new PatternLock("#patternContainer",{
      onDraw:function(pattern){
        var pat = lock.getPattern();
        $("#patterncode").val(pat);
      }
    });
    if(this.cookieService.get( 'rememberMe')) {
      this.user.email = this.cookieService.get('email');
      this.user.password = this.cookieService.get('password');
      this.user.rememberMe = this.cookieService.get('rememberMe');
    }
  }




  onSubmit(content): void  {

    if($("#patterncode").val() !== "") {
      this.submitted = true;
      this.emailid = this.user.admin_emailid;

        this.passwordid = this.user.admin_password;
       var otp = Math.floor(100000 + Math.random() * 900000);

      var yes = otp.toString();
      var yes_encrypt  = CryptoJS.AES.encrypt(yes, this.key, {iv: this.iv}).toString();
      var yes_decrypt  = CryptoJS.AES.decrypt(yes_encrypt, this.key, {iv: this.iv});

      let encrypted_password = CryptoJS.AES.encrypt(this.passwordid, this.key, {iv: this.iv});

      this.passwordid = encrypted_password.toString();

      let users = {"admin_emailid" : this.emailid, "raw3":yes_encrypt,"admin_password": this.passwordid,"admin_pattern": $("#patterncode").val()};
      this.CommonService.requestData('admin/wallet_login',users)
      .subscribe(resData => {
          this.submitted = false;
          this.copyResOtp = otp;
          if (resData.status == true) {
            this.seesiondet = resData.session;
            this.roledet = resData.role;
            this.cookieService.set( 'session', this.seesiondet );
            this.cookieService.set( 'role', this.roledet );

            this.router.navigate(['/pages/dashboard'])
            this.toastr.success('you are logged in', 'Success!');
             

          } 
          else {
          	this.toastr.error(resData.error, 'Oops!');
          }
      });


    }
    else if($("#patterncode").val() == ""){
      this.toastr.error('Please Verify Pattern Lock', 'Error!');
      this.submitted = false; 
    }
  }


  setCookies(): void {
     if(this.user.rememberMe) {
        this.cookieService.set( 'rememberMe', this.user.rememberMe );
        this.cookieService.set( 'email', this.user.admin_emailid );
        this.cookieService.set( 'password', this.user.admin_password );
      }  else {
        this.cookieService.delete('email');
        this.cookieService.delete('password');
        this.cookieService.delete('rememberMe');
      }
  }

}
