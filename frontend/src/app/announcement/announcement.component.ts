import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
	announcementHeading;
	announcementContent;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.loader(true);
  	this.apiService.get_cms({page_name:'announcement'}).subscribe(result=>{
      if(result){
        this.apiService.loader(false);
        this.announcementHeading = result['data']['page_heading'];
        this.announcementContent = result['data']['page_content'];
      }
  	});
  }

}
