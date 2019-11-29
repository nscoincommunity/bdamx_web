import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
	termsHeading;
	termsContent;
  constructor(public apiService: ApiService) { }

  ngOnInit() {
  	this.apiService.loader(true);
  	this.apiService.get_cms({page_name:'terms'}).subscribe(result=>{
      if(result){
        this.apiService.loader(false);
        this.termsHeading = result['data']['page_heading'];
        this.termsContent = result['data']['page_content'];
      }
  	});
  }

  locationBack(){
  	 this.apiService.historyBack();
  }

}
