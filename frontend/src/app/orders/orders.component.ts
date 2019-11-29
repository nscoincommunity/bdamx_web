import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { ClipboardService } from 'ngx-clipboard';
import * as _ from 'lodash';   
import { environment } from '../../environments/environment'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  user_id = localStorage.getItem('address');
  Basecoin = localStorage.getItem('Basecoin');
  activeorders=[];
  historyorders=[];
  deposit_data=[];
  withdraw_data=[];
  txUrl =environment.ether_order
  currencies = [];

  constructor(
  	private apiService: ApiService,
    private toastr: ToastrService,
    private _clipboardService: ClipboardService
  ) { }

  ngOnInit() {
    document.body.style.overflow="hidden";
    this.apiService.loader(true);
    this.apiService.get_activeOrder({userId:this.user_id}).subscribe((res:any)=>{
      this.activeorders = res;
      this.apiService.loader(false);
      document.body.style.overflow="auto";  
      this.apiService.get_all_currencies().subscribe((res:any)=>{
        this.currencies = res.data;
      })     
      this.order_history()
      this.deposit()
      this.withdraw()
    }) 

  }
  order_history(){
    this.apiService.get_orderHistry({userId:this.user_id}).subscribe((res:any)=>{
      var j = 0;
      for(var i=0;i<res.length;i++)
      {
        if(this.user_id == res[i].buyerUserid)
        {
          let object = {
            "sellorderId" : res[i].sellorderId,
            "sellerUserid" : res[i].sellerUserid,
            "tradePrice"   : res[i].tradePrice,
            "filledAmount" : res[i].filledAmount,
            "buyorderId"  : res[i].buyorderId,
            "buyerUserid" : res[i].buyerUserid,
            "datetime"    : res[i].datetime,
            "pair"        : res[i].pair,
            "pairName"   : res[i].pairName,
            "total" : res[i].total,
            "fee" : res[i].buyFee,
            "ordertype" : res[i].ordertype,
            "type" : "Buy",
            "_id" : res[i]._id
          };
          this.historyorders[j] = object;
          j++;
        }
        if(this.user_id == res[i].sellerUserid)
        {
          let object = {
            "sellorderId" : res[i].sellorderId,
            "sellerUserid" : res[i].sellerUserid,
            "tradePrice"   : res[i].tradePrice,
            "filledAmount" : res[i].filledAmount,
            "buyorderId"  : res[i].buyorderId,
            "buyerUserid" : res[i].buyerUserid,
            "datetime"    : res[i].datetime,
            "pair"        : res[i].pair,
            "pairName"   : res[i].pairName,
            "total" : res[i].total,
            "ordertype" : res[i].ordertype,
            "type" : "Sell",
            "fee" : res[i].sellFee,
            "_id" : res[i]._id
          };
          this.historyorders[j] = object;
          j++;
        }
      }
    })     
  }
  deposit(){
    var allCurrency = this.currencies;
    this.apiService.deposit_hist({userId:this.user_id}).subscribe((res:any)=>{
      res.map(items=>{
        items.toCurrency = items.comment.split(" ")[0];
        return items;
      });
        this.deposit_data=res;
    })
  }
  withdraw(){
    this.apiService.withdraw_hist({userId:this.user_id}).subscribe((res:any)=>{
      for(let items of res){
        for(let currencies of this.currencies){
          if(items.withcurrency === currencies._id){
            items.toCurrency = currencies.currencySymbol;
          }
        }
      }
      this.withdraw_data=res;
    })
  }  
  copy(text: string){
    this._clipboardService.copyFromContent(text)
    this.toastr.success("Address Copied", 'SUCCESS');
  } 

}
