import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
	announcementHeading;
	announcementContent;
  constructor(public apiService: ApiService) { }

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
