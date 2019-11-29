import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
	customerServicesContent;
	customerServicesHeading;
  constructor(public apiService: ApiService) { }

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
