import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

	privacyHeading;
	privacyContent;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.loader(true);
  	this.apiService.get_cms({page_name:'privacypolicy'}).subscribe(result=>{
 		  if(result){
        this.apiService.loader(false);
	        this.privacyHeading = result['data']['page_heading'];
	        this.privacyContent = result['data']['page_content'];
	      }
  		});
  }

}
