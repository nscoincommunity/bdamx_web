import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../services/apiService';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../home/home.component.css'],
})
export class HeaderComponent implements OnInit {
 siteLogo;

 loghead : boolean = false
  constructor(
  	private apiService: ApiService,
  	@Inject(DOCUMENT) private _document) {
   }
   username : any ;
  ngOnInit() {
  	this.apiService.get_sitesettings().subscribe((result:any)=>{
  		this.siteLogo = result['data']['site_logo'];
      // var ip = result['ip'];
      // localStorage.setItem('localIp',ip);
  		this._document.getElementById('linkSiteFavicon').setAttribute('href', result.data.favicon);
  	})
    // this._document.getElementById('linkSiteFavicon').setAttribute('href', 'assets/images/favicon.ico');
    
    this.loghead = this.apiService.loggedIn()
    var username =  localStorage.getItem('userDetails')
    if(username){
      this.username = JSON.parse(username).user_name
    }    
	}

  
}