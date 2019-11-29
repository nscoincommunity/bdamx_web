import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
	newsContent;
  constructor(public apiService: ApiService) { }

  ngOnInit() {
  	this.apiService.loader(true);
  	this.apiService.get_news().subscribe(result=>{
      if(result){
        this.apiService.loader(false);
        console.log(result,'rress')
        this.newsContent = result['data'];
      }
  	});
  }

}
