import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
	aboutHeading;
	aboutContent;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.loader(true);
  	this.apiService.get_cms({page_name:'aboutus'}).subscribe(result=>{
      if(result){
        this.apiService.loader(false);
        this.aboutHeading = result['data']['page_heading'];
        this.aboutContent = result['data']['page_content'];
      }
  		
  	});
  }

}
