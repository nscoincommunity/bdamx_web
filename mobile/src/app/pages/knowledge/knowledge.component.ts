import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {
	knowledgebaseHeading;
	knowledgebaseContent;
  constructor(public apiService: ApiService) { }

  ngOnInit() {
  	this.apiService.loader(true);
  	this.apiService.get_cms({page_name:'knowledgebase'}).subscribe(result=>{
      if(result){
        this.apiService.loader(false);
        this.knowledgebaseHeading = result['data']['page_heading'];
        this.knowledgebaseContent = result['data']['page_content'];
      }
  	});
  }

}
