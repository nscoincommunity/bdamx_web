import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
	feeDetails={'feedeposit':'','feedepositvalue':'','feetrade':'','feetradevalue':'','feeheader':''};
	currencyData=[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  	this.apiService.get_cms_fee().subscribe((result:any)=>{
  		console.log(result);	
  		result.data.map(items=>{
        this.feeDetails[items.page_name] = items['page_content'];
      });
  	});
  	this.apiService.get_all_currencies().subscribe((resData:any) => {
  		console.log(resData,'resssdddd');
  		this.currencyData = resData.data;
  	})
  }

}
