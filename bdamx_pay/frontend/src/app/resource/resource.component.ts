import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

	resourceHeading;
	resourceContent;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.loader(true);
  	this.apiService.get_cms({page_name:'resourcecenter'}).subscribe(result=>{
 		  if(result){
        this.apiService.loader(false);
	        this.resourceHeading = result['data']['page_heading'];
	        this.resourceContent = result['data']['page_content'];
	      }
  		});
  }

}
