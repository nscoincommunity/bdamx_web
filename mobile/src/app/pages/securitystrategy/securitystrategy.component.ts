import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-securitystrategy',
  templateUrl: './securitystrategy.component.html',
  styleUrls: ['./securitystrategy.component.css']
})
export class SecuritystrategyComponent implements OnInit {
	securityHeading;
	securityContent;
  constructor(public apiService: ApiService) { }

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
