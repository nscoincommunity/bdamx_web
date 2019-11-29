import { Component, OnInit } from '@angular/core';
// import { ServeService } from '../serve.service';
import { Router, NavigationExtras } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-commingsoon',
  templateUrl: './commingsoon.component.html',
  styleUrls: ['./commingsoon.component.css']
})
export class CommingsoonComponent implements OnInit {

	navbarCollapsed = true;
	site_settings='';
  constructor(
		private router: Router,
		private titleService: Title
	) { }

  ngOnInit() {
  //   this.service.requestData('metacontent/getmeta',{keyword:'soon'}).subscribe(res=>{
  //     this.titleService.setTitle(res.data.title+'-'+res.data.title);
  //   }) 	  	
		// var sitesettings = JSON.parse(localStorage.getItem('site_setting'))  
		// if(sitesettings == null){
		// 	this.service.getData('sitesetting/getsettings').subscribe(res=>{
		// 		sitesettings = res.data					
		// 	}) 
		// }
		// if(sitesettings.site_maintenance == 0){
		// 	this.router.navigate(['/error']);
		// }
		// else{
		// 	this.site_settings=sitesettings.site_logo;
		// 	this.service.sitesettingfun(sitesettings);				
		// 	return true
		// }		  
  }

	// bodyclass() {
	// 	document.body.classList.toggle("light-theme");
	// }

	// toggleNavbarCollapsing() {
	// 	this.navbarCollapsed = !this.navbarCollapsed;
	// }

	// trade_navigate(){
	// 	this.service.getData('currencypair/getpair').subscribe(res=>{
	// 		this.router.navigate(['/trade/'+res.pair]);
	// 	})
	// }

}
