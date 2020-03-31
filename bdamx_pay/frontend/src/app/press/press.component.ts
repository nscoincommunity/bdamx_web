import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})
export class PressComponent implements OnInit {

	pressHeading;
	pressContent;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.loader(true);
  	this.apiService.get_cms({page_name:'press'}).subscribe(result=>{
 		  if(result){
        this.apiService.loader(false);
	        this.pressHeading = result['data']['page_heading'];
	        this.pressContent = result['data']['page_content'];
	      }
  		});

  }

}
