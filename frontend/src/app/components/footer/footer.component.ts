import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer', 
  templateUrl: './footer.component.html',
  // styleUrls: ['./header.component.css']
})
export class FooterComponent implements OnInit {
	siteLogo;
	webLinks={};
  currentUrl;
  copyRights;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  	this.apiService.get_sitesettings().subscribe((resData:any)=>{
  		var siteData = resData.data;
  		this.siteLogo = siteData.site_logo;
  		this.webLinks['instagram'] = siteData.insta;
  		this.webLinks['facebook'] = siteData.fb;
  		this.webLinks['linked_in'] = siteData.linked_in;
  		this.webLinks['twitter'] = siteData.twitter;
  		this.webLinks['youtube'] = siteData.youtube;
  		this.webLinks['snapchat'] = siteData.snapchat;
      this.copyRights = siteData.copyrights;
  	});
    this.currentUrl = this.router.url;
  }

}
