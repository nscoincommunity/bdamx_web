import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
	securityHeading;
	securityContent;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.loader(true);
  	this.apiService.get_cms({page_name:'security'}).subscribe(result=>{
      if(result){
        this.apiService.loader(false);
        this.securityHeading = result['data']['page_heading'];
        this.securityContent = result['data']['page_content'];
      }
  	});
  }

}
