import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../services/api.service';
declare var $:any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit,AfterViewInit {
	faqContent;
	activeClass={};
	textheight;
	 @ViewChild('myDiv') myDiv: ElementRef;
  constructor(private apiService: ApiService) { }

  ngAfterViewInit() {
        
    }

  ngOnInit() {
    this.apiService.loader(true);
    var faqContent = [];
    this.apiService.get_faq().subscribe(result=>{
      if(result){
        this.apiService.loader(false);

         this.faqContent = result['data'];

      }
    });
  }

  headerClick(items,i){
  	this.activeClass[i] = !this.activeClass[i];
  	this.textheight = this.myDiv.nativeElement.scrollHeight;
  	// this.activeClass[i] = true;
  }

}
