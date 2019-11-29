import { Component, OnInit, Inject, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ApiService } from './services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { DeviceDetectorService } from 'ngx-device-detector';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked{
  title = 'bdamx-mobile';
  deviceInfo;
  visible:boolean = true;
  constructor(private apiService: ApiService, 
    private spinner: NgxSpinnerService, 
    private deviceService: DeviceDetectorService,
    @Inject(DOCUMENT) private document: Document,
    private cdr: ChangeDetectorRef){

  }

  ngOnInit(){
    const isMobile = this.deviceService.isMobile();
    if(isMobile){
      // this.document.location.href = 'http://BDAMX_Revampback.osiztechnologies.in';
    }
  	
  }

  ngAfterViewChecked(){
    this.apiService.spinners.subscribe(result=>{
      this.visible = result;
      if(result){

        this.spinner.show();
      }else{
        this.spinner.hide();
      }
    });
    this.cdr.detectChanges();
  }
}
