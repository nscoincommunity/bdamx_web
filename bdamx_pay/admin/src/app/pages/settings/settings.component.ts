import { Component, OnInit,ChangeDetectorRef,Input, ViewChild,ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbTabChangeEvent,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import PatternLock from '../../../assets/patternLock/patternLock';
import * as $ from 'jquery/dist/jquery.min.js';
import * as CryptoJS from 'crypto-js';
import { ToastrService } from 'ngx-toastr';

import { CommonService } from '../../../app/common.service';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import { BackendHost } from '../../../assets/varconfig';
import { environment } from '../../../environments/environment'
import { CookieService } from 'ngx-cookie-service';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'ngx-settings',
  providers: [CommonService],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
	serviceHost = environment.BackendHost;
	key = CryptoJS.enc.Base64.parse("#base64Key#");
	iv  = CryptoJS.enc.Base64.parse("#base64IV#");
	adminId=this.cookieService.get('session');
  admindetails:any = {};
  cngPass:any = {};
	constructor(
		private http:Http,
		private toastr: ToastrService,
		private commonService:CommonService,
		private cookieService: CookieService
	){}

	ngOnInit() {
		this.commonService.requestData('admin/get_admindetail',{"_id": this.adminId}).subscribe(response => {
			this.admindetails=response;
		});		
    var lock = new PatternLock("#patternContainer",{
      onDraw:function(pattern){
        var pat = lock.getPattern();
        $("#patterncode").val(pat);
      }
    });
	}


  change(form: NgForm) {
    var data = {
      idd:this.adminId,
      pass:CryptoJS.AES.encrypt(this.cngPass.pass, this.key, {iv: this.iv}).toString(),
      npass:CryptoJS.AES.encrypt(this.cngPass.npass, this.key, {iv: this.iv}).toString()
    }
    this.commonService.requestData('admin/change',data)
    .subscribe(res => {
      if(res.success == true)
      {
        this.toastr.success("changes updated");
        form.reset()
      }
      else
      {
        this.toastr.warning("Current password does not match");
      }
    })      
  }

	savebasicinfo(){
    var pattern_val=0;
    if($("#patterncode").val() !== "") {    
      pattern_val= $("#patterncode").val();
    }
    else{
      pattern_val= this.admindetails.admin_pattern;
    }
    var data = {
      idd:this.adminId,
      name:this.admindetails.admin_name,
      mail:this.admindetails.admin_emailid,
      pattern:pattern_val
    }
    this.commonService.requestData('admin/update_info',data)
    .subscribe(res => {
      if(res.success == true)
      {
        this.toastr.success("changes updated Successfully");
      }
    }) 
	}

}
