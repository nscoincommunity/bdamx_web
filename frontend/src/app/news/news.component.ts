import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
	newsContent;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  	this.apiService.loader(true);
  	this.apiService.get_news_page().subscribe(result=>{
      if(result){
        this.apiService.loader(false);
        this.newsContent = result['data'];
      }
  	});
  }

}
