import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.css']
})
export class PrivacypolicyComponent implements OnInit {
	privacyPolicyHeading;
	privacyPolicyContent;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.loader(true);
  	this.apiService.get_cms({page_name:'privacypolicy'}).subscribe(result=>{
      if(result){
        this.apiService.loader(false);
        this.privacyPolicyHeading = result['data']['page_heading'];
        this.privacyPolicyContent = result['data']['page_content'];
      }
  	});
  }

}
