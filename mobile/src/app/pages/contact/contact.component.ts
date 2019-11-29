import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm }   from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model:any={};
  adminMail='';
  adminPhone='';
  adminAddress='';
  map_address='';
  captcha = "";
  constructor(public apiService: ApiService, public sanitizer: DomSanitizer,private toastr: ToastrService) {}

  ngOnInit() {
  	this.apiService.loader(true);
  	this.apiService.get_sitesettings().subscribe(result=>{
      if(result['data']){
        this.apiService.loader(false);
        this.adminMail = result['data']['contact_mail'];
        this.adminAddress = result['data']['contact_address'];
        this.adminPhone = result['data']['contact_phone'];
        // const htmlStrip = this.htmlToPlaintext()
        this.map_address="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q="+this.htmlToPlaintext(result['data']['contact_address']);
      }
  		
  	})
  }

  resolved(captchaResponse: string) {
    this.captcha=captchaResponse;
  }

 htmlToPlaintext(text) {
  return text ? String(text).replace(/<[^>]+>/gm, '') : '';
}

  contactUs(form: NgForm){
  	console.log('form',this.model)
    if(!this.model.name || !this.model.subject || !this.model.message){
      this.toastr.error('Please fill all the fields');
    }
  	if(this.model.name.trim() == '' || this.model.subject.trim() == '' || this.model.message.trim() == ''){
	     this.toastr.error('Enter values properly','Error')
	}
    else{
	  this.apiService.add_contact(this.model).subscribe(res=>{
	    if(res['success'] == true){
	      this.toastr.success('Your query has been placed admin will reply mail to your query','Success')
	      form.reset()
	    }
	    else{
	      this.toastr.error('Something went wrong try again','Error')
	    }
	  })
	}
  }


}
