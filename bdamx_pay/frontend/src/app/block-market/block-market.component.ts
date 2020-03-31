import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-block-market',
  templateUrl: './block-market.component.html',
  styleUrls: ['./block-market.component.css']
})
export class BlockMarketComponent implements OnInit {
	currencyData=[];
	fiatData = [];
  constructor(
  	private apiService: ApiService,
  	private toastr: ToastrService) { }

  ngOnInit() {
  	this.apiService.get_currency({type:1}).subscribe((result:any)=>{
  		this.currencyData = result.data;
  	});

  	this.apiService.get_currency({type:2}).subscribe((result:any)=>{
  		this.fiatData = result.data;
  		console.log(this.fiatData,'fiat')
  	});
  }

  currencySelected(value){
  	console.log(value,'value');
  }

  fiatSelected(value){
  	console.log(value,'value')
  }

}
