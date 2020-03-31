import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../services/apiService';

@Component({
  selector: 'app-footer', 
  templateUrl: './footer.component.html',
  styleUrls: ['../../home/home.component.css'],
})
export class FooterComponent implements OnInit {
	siteLogo;
  siteData;
  constructor(
  	private apiService: ApiService
  	  	) { }

  ngOnInit() {

  	this.apiService.get_sitesettings().subscribe((result:any)=>{
  		console.log(result,'rresss');
      this.siteData = result['data'];
  		this.siteLogo = result['data']['site_logo'];
  	})
  	
  }

}
