import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  isFirstOpen = true;
  faqcategoryData = [];
  faqData  = [];
  oneAtATime: boolean = true;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.loader(true);
  	this.apiService.get_faqcategory().subscribe((result:any)=>{
      this.apiService.loader(false);
  		console.log(result,"faqcategory")
  		this.faqcategoryData = result.data;
      this.getFaq(this.faqcategoryData[0].title);
  	})
  }

  getFaq(category){
    this.apiService.get_faq({category:category}).subscribe((result:any)=>{
      this.faqData = result.data;
    })
  }
}
