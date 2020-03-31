import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

	careerHeading;
	careerContent;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.loader(true);
  	this.apiService.get_cms({page_name:'career'}).subscribe(result=>{
 		  if(result){
        this.apiService.loader(false);
	        this.careerHeading = result['data']['page_heading'];
	        this.careerContent = result['data']['page_content'];
	      }
  		});
  }

}
