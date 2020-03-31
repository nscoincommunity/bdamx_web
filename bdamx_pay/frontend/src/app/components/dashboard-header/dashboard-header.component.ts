import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../services/apiService';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
})
export class DashboardHeaderComponent implements OnInit {
 userDetails;
 header;
 siteLogo;
  constructor(
  	public apiService: ApiService,@Inject(DOCUMENT) private _document) {
   }

  ngOnInit() {

    this.apiService.get_sitesettings().subscribe((result:any)=>{
      this.siteLogo = result['data']['site_logo'];
      this._document.getElementById('linkSiteFavicon').setAttribute('href', result.data.favicon);
    });
    // this._document.getElementById('linkSiteFavicon').setAttribute('href', 'assets/images/favicon.ico');


    this.apiService.userDetails.subscribe(result=>{
      if(result){
        this.userDetails = result;
      } else {
        var userDetails = localStorage.getItem('userDetails');
        this.userDetails = JSON.parse(userDetails);
      }
    });

    this.apiService.pageHeader.subscribe(result=>{
      this.header = result;
    })
  	

	}
   logout(){
   	this.apiService.logout();
   }
}