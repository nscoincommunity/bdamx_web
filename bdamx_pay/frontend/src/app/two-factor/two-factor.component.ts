import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-two-factor',
  templateUrl: './two-factor.component.html',
  styleUrls: ['./two-factor.component.css']
})
export class TwoFactorComponent implements OnInit {
	userId = localStorage.getItem('userId');
	tfsqrcode;
	show_tfacode;
	tfaenablekey;
	tfaenables;
  tfaonecode;

	numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  constructor(
  	private apiService: ApiService,
  	private toastr: ToastrService,
  	private _clipboardService: ClipboardService) { }

  ngOnInit() {
    this.apiService.getPageHeader('Two Factor Authentication');
    this.apiService.loader(true);
  	this.apiService.GetData('custom/getqrcode').subscribe((resData:any) => {
          
          this.tfaenables=resData.tfaenable
            if(resData.tfaenable == 0){
              if(resData.status){
            var urlencoded = encodeURI(resData.otpauth_url);
            this.tfsqrcode = 'https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl='+resData.otpauth_url+'';
            if(this.tfsqrcode){
              this.apiService.loader(false);
            }
             this.show_tfacode =false;
            this.tfaenablekey = resData.secret.base32;

              }
              else{
                this.tfaenablekey = resData.tfaenablekey;
                var urlencoded = encodeURI('otpauth://totp/Bit900'+resData.admin_emailid+'?secret='+this.tfaenablekey);
                this.tfsqrcode = 'https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl='+resData.otpauth_url+'';
                if(this.tfsqrcode){
                  this.apiService.loader(false);
                }
                this.show_tfacode =false;

              } 
            }
            else if(resData.tfaenable == 1){
          this.tfaenablekey = resData.tfaenablekey;
          this.show_tfacode =false;
          var urlencoded = encodeURI('otpauth://totp/Bit900'+resData.admin_emailid+'?secret='+this.tfaenablekey);
          this.tfsqrcode = 'https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl='+resData.otpauth_url+'';
          if(this.tfsqrcode){
              this.apiService.loader(false);
            }
        }
           
          });

  }

  copyText(val: string) {
		this._clipboardService.copyFromContent(val)
		this.toastr.success("Address Copied", 'SUCCESS');
	}


clicktfaenable(){
     // this.tfasaveloader = true;
    // if(this.tfaonecode !=''){
    var datas = {tfaonecode: this.tfaonecode, tfaenablekey: this.tfaenablekey};
       this.apiService.SenData('custom/verifytfq',datas).subscribe((resData:any) => {
        if(resData.status==true){
          this.tfaonecode = '';
          this.tfaenables= 1;             
          this.toastr.success("2FA security has been activated",'Success');
          this.ngOnInit();
              // this.tfasaveloader = false;
        } else {
          this.tfaenables = 0;
          this.tfaonecode='';
          this.toastr.error("Please Enter Correct 2FA Code",'Error');
          // this.tfasaveloader = false;
        
        }
      });
  }

  clicktfadisable(){
    var datas = { tfaonecode: this.tfaonecode, tfaenablekey: this.tfaenablekey, userId:this.userId };
    this.apiService.SenData('custom/disabletfa', datas).subscribe((resData:any) => {
      if(resData.status==true){
        this.tfaonecode = '';
        this.tfaenables = 0;
        this.toastr.success("Disabled Two Factor Authentication ", 'Success');
        this.ngOnInit();
        // this.tfasaveloader = false;
      } else {
        this.tfaonecode='';
        this.toastr.error("Please Enter Correct 2FA Code",'Error');
        // this.tfasaveloader = false;
      }
    });
  }



}
