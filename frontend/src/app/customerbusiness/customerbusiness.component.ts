import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-customerbusiness',
  templateUrl: './customerbusiness.component.html',
  styleUrls: ['./customerbusiness.component.css']
})
export class CustomerbusinessComponent implements OnInit {
	customerServicesContent;
	customerServicesHeading;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.loader(true);
  	this.apiService.get_cms({page_name:'customerservices'}).subscribe(result=>{
      if(result){
        this.apiService.loader(false);
        this.customerServicesHeading = result['data']['page_heading'];
        this.customerServicesContent = result['data']['page_content'];
      }
  	});
  }

}