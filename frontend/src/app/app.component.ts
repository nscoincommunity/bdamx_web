import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from './services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from '../environments/environment'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BDAMX';
  constructor(private router: Router, 
  	private location:Location, 
  	private apiService: ApiService,
  	private spinner: NgxSpinnerService){
    console.log("Environment : ",environment)
  }
  ngOnInit(){
  	this.apiService.spinners.subscribe(result=>{
  		if(result){
  			this.spinner.show();
  		}else{
  			this.spinner.hide();
  		}
  	})
  }
  stripTrailingSlash(url) {
  if (url.endsWith('/')) {
    url = url.substring(0, url.length - 1);
  }
  return url;
}

onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
}

}
