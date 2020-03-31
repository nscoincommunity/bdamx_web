import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent implements OnInit {

	referalHeading;
	referalContent;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.loader(true);
  	this.apiService.get_cms({page_name:'referral'}).subscribe(result=>{
 		  if(result){
        this.apiService.loader(false);
	        this.referalHeading = result['data']['page_heading'];
	        this.referalContent = result['data']['page_content'];
	      }
  		});


  }

}
