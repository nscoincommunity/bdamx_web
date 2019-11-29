import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-riskremainder',
  templateUrl: './riskremainder.component.html',
  styleUrls: ['./riskremainder.component.css']
})
export class RiskremainderComponent implements OnInit {
	riskRemainderHeading;
	riskRemainderContent;
  constructor(public apiService: ApiService) { }

  ngOnInit() {
  	this.apiService.loader(true);
  	this.apiService.get_cms({page_name:'riskremainder'}).subscribe(result=>{
      if(result){
        this.apiService.loader(false);
        this.riskRemainderHeading = result['data']['page_heading'];
        this.riskRemainderContent = result['data']['page_content'];
      }
  	});
  }

}
