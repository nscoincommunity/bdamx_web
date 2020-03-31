import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
declare var changeFavicon: Function;
import { CommonService } from './common.service';
@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
	favicon:any;
  constructor(private analytics: AnalyticsService,private dbHelper:CommonService) {
  	this.dbHelper.getData('sitesetting/get_settings').subscribe(resData => {      
      // this.favicon = resData.data[0].site_favicon;
      changeFavicon(resData.data.favicon);
    });    
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
