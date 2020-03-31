import { Component, OnInit, OnDestroy,Input,ViewChild,ElementRef, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgbModal, ModalDismissReasons, NgbTabChangeEvent,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../../common.service';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import { NgbTabset} from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';
import { BackendHost } from '../../../../assets/varconfig'
import { environment } from '../../../../environments/environment'
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

import { ngxCsv } from 'ngx-csv/ngx-csv';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'ngx-affiliatebanner',
  templateUrl: './affiliatebanner.component.html',
  styleUrls: ['./affiliatebanner.component.scss']
})
export class AffiliatebannerComponent implements OnInit {
  @ViewChild(DatatableComponent) bannertable:DatatableComponent;
  serviceHost = environment.BackendHost;
  filepath: any;
  submitted:boolean=false;
  ban:any={};
  bannerblockrows = [];
  bannerblocktemp = [];
  bannerblocklist = [];
  bannerblocklist1=[];
  modalRef: NgbModalRef;
  closeResult: string;
  banner_Status;
  new_Attachment:any;
  currencyObj;
  limits = [
    { key: '5', value: 5 },
    { key: '10', value: 10 },
    { key: '25', value: 25 },
    { key: '50', value: 50 },
    { key: '100', value: 100 }
  ];

  limit: number = this.limits[0].value;
  rowLimits: Array<any> = this.limits;

  page = {
    size: this.limits[0].value,totalElements:0,totalPages:0,pageNumber:0
  }
  defsort: any = {dir: "desc", prop: "createddate"};
  defsearch = "";

  loading: boolean = false;
  showtblview: boolean = true;

  //main banner of homepage
  limits_banner = [
    { key: '5', value: 5 },
    { key: '10', value: 10 },
    { key: '25', value: 25 },
    { key: '50', value: 50 },
    { key: '100', value: 100 }
  ];

  limit_banner: number = this.limits_banner[0].value;
  rowLimits_banner: Array<any> = this.limits_banner;
  page_banner = {
    size: this.limits[0].value,totalElements:0,totalPages:0,pageNumber:0
  }
  defsort_banner: any = {dir: "desc", prop: "createddate"};
  defsearch_banner = "";
  loading_banner: boolean = false;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private CommonService: CommonService,
    private toastr: ToastrService,
    private http:Http,
    private cookieService: CookieService
  ){this.currencyloadfn()}

  ngOnInit() {
    var data = {"_id":this.cookieService.get('session')}
    this.CommonService.requestData('admin/getsubadmin',data).subscribe(resData => {
      if(resData.pair_details == 1){
        return true
      }
      else{
        this.router.navigate(['/pages/dashboard'])
      }
    })        
  }

  currencyloadfn(){
    var lstinput = {"page":this.page_banner,"sorting":this.defsort_banner,"search": this.defsearch_banner};
    this.loading_banner = true;
    this.CommonService.requestData('currencypair/getallpairs',lstinput)
    .subscribe(resData => {
      this.loading_banner = false;
      this.page_banner.totalElements = resData.count;
      this.page_banner.totalPages = this.page_banner.totalElements / this.page_banner.size;
      this.bannerblocklist = resData.value;
      this.bannerblocklist1 = resData.value;
      this.bannerblocktemp = this.bannerblocklist1;
      this.bannerblockrows = this.bannerblocklist1;
    });
  }
  //end of the function 

  //reset the banner list
  resetbannerlist(){
    this.limits_banner = [
      { key: '5',  value: 5 },
      { key: '10', value: 10 },
      { key: '25', value: 25 },
      { key: '50', value: 50 },
      { key: '100',value: 100 }
    ];
    this.limit_banner = this.limits_banner[0].value;
    this.rowLimits_banner = this.limits_banner;
    this.page_banner = {
      size: this.limits_banner[0].value,totalElements:0,totalPages:0,pageNumber:0
    }
    this.defsort_banner= {dir: "desc", prop: "createddate"};
    this.defsearch_banner = "";
    this.currencyloadfn();
  }
  //end of the function  


  setPage_banner(pageInfo){
    this.bannerblocklist = [];
    this.bannerblockrows = this.bannerblocklist;
    this.bannerblocktemp = this.bannerblocklist;
    this.page_banner.pageNumber = pageInfo.offset;
    this.loadbannerlist(this.page_banner,this.defsort_banner,this.defsearch_banner);
  }

  //sort the function
  loadbannerlist(page,sort,search){
    this.loading_banner = true;
    var lstinput = {"page":page,"sorting":sort,"search":search};
    this.CommonService.requestData('currencypair/getallpairs',lstinput)
    .subscribe(resData => {
      this.page_banner.totalElements = resData.count;
      this.bannerblocklist = resData.value;
      this.bannerblocklist1 = resData.value;
      this.bannerblockrows = this.bannerblocklist1;
      this.bannerblocktemp = this.bannerblocklist1;
      this.loading_banner = false;
    });
  }

  onSort_banner(event) {
    this.page_banner.pageNumber = 0;
    this.defsort_banner = event.sorts[0];
    this.loadbannerlist(this.page_banner,this.defsort_banner,this.defsearch_banner);
  }

  //search bar function
  updateFilter_banner()  {
    this.limits_banner = [
      { key: '5',  value: 5 },
      { key: '10', value: 10 },
      { key: '25', value: 25 },
      { key: '50', value: 50 },
      { key: '100',value: 100 }
    ];
    this.limit_banner = this.limits_banner[0].value;
    this.rowLimits_banner = this.limits_banner;
    this.page_banner.pageNumber = 0;
    this.currencyloadfn();
  }

  //change the row limit
  changeRowLimits_banner(event) {
    this.bannerblocklist = [];
    this.bannerblockrows = this.bannerblocklist;
    this.bannerblocktemp = this.bannerblocklist;
    this.page_banner.size = +event.target.value;
    this.page_banner.pageNumber = 0;
    this.bannertable.limit = event.target.value;
    this.loadbannerlist(this.page_banner,this.defsort_banner,this.defsearch_banner);
  }

  //edit pop up display
  editbanners:any = {};
  editIndex = -1;
  openeditmodel(content,bannerrow) {
    console.log(bannerrow)
    this.editIndex = bannerrow.$index;
    this.editbanners = bannerrow;
    this.editbanners.feeType=this.editbanners.feeType
    this.editbanners.fees=this.editbanners.fee
    this.editbanners.max_amt=this.editbanners.max_amt
    this.editbanners.min_amt=this.editbanners.min_amt
    this.editbanners.option=this.editbanners.option
    this.editbanners.percentage=this.editbanners.percentage
    this.editbanners.percentage_amount=this.editbanners.percentage_amount
    this.editbanners.calculate_market_price=+this.editbanners.calculate_market_price.toFixed(8)
    this.editbanners.marketPrice=this.editbanners.marketPrice
    // this.editbanners.min_trade_amount=+this.editbanners.minTrade.toFixed(8)
    this.editbanners.marketPrice=+this.editbanners.marketPrice.toFixed(8)
    console.log(this.editbanners)
    this.modalRef = this.modalService.open(content,{size:'lg'});
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${reason}`;
    });
  }

  calc_market(percentage,mk_price,option){
    console.log("percentage,mk_price,option",percentage,mk_price,option)
    var find_percentage = 0 ;
    find_percentage = parseFloat(percentage)/100 * parseFloat(mk_price)
    
    var  calc_markets = 0
    if(option==1){
      calc_markets = (+mk_price) + find_percentage
      console.log(calc_markets,find_percentage)
      this.editbanners.calculate_market_price = calc_markets.toFixed(8)
      this.editbanners.percentage_amount = find_percentage
      this.editbanners.option = option
      console.log(this.editbanners.percentage_amount,this.editbanners.option)
      
    }else{
      calc_markets = (+mk_price) - find_percentage
      this.editbanners.calculate_market_price = calc_markets.toFixed(8)
      this.editbanners.percentage_amount = find_percentage
      this.editbanners.option = option
    }
    
  }

  ngOnDestroy(){
    if(this.modalRef){
      this.modalRef.close()
    }
  }

  change_currency_status(value,status){
    var req={
      "_id":value._id,
      "status":+status
    }
    this.CommonService.requestData('currencypair/currencystatus',req)
    .subscribe(resData => {   
      this.currencyloadfn();
      this.toastr.success('Status changed successfully!', 'Success');
    })
  }


  update_currency(){
    console.log('this.editbanners',this.editbanners)
    this.CommonService.requestData('currencypair/update_currency',this.editbanners)
    .subscribe(resData => {
      var button=document.getElementById('edit_cls');
      button.click();
      this.currencyloadfn();
      this.toastr.success('Changes updated successfully!', 'Success');
    })
  }

  download_csv(){
    var lstinput = {"page":this.page,"sorting":this.defsort,"search": this.defsearch};

    this.CommonService.requestData('currencypair/getallpairs',lstinput).subscribe(resData => {
      if(resData){
        var download_data=[]
        for(var i=0;i<resData.count;i++){
          var datas={
            pair:resData.value[i].pair,
            marketPrice:resData.value[i].marketPrice.toFixed(8),
            fees:resData.value[i].fees.toFixed(8),
            // makerFee:resData.value[i].makerFee,
            // min_trade_amount:resData.value[i].min_trade_amount,
            // takerFee:resData.value[i].takerFee
          }
          download_data.push(datas)
        }
        var Userexport = download_data;
        var options={
          headers: ["Pair", "Market Price", "Exchange fee", ]
        }
        new ngxCsv(Userexport, 'Export Pair details' + new Date().getTime(),options);
      }
    })
  }

  download_excel():void {
    var lstinput = {"page":this.page,"sorting":this.defsort,"search": this.defsearch};

    this.CommonService.requestData('currencypair/getallpairs',lstinput).subscribe(resData => {
      if(resData){
        var download_data=[]
        for(var i=0;i<resData.count;i++){
          var datas={
            Pair:resData.value[i].pair,
            Marketprice:resData.value[i].marketPrice.toFixed(8),
            Exchangefee:resData.value[i].fees.toFixed(8),
            // fees:resData.value[i].fees,
            // makerFee:resData.value[i].makerFee,
            // min_trade_amount:resData.value[i].min_trade_amount,
            // takerFee:resData.value[i].takerFee
          }
          download_data.push(datas)
        }       
        this.CommonService.exportAsExcelFile(download_data, 'Export Pair details' + new Date().getTime());
      }
    })    
  }
  opennewsmodel(model_name){
    this.modalRef = this.modalService.open(model_name,{size:'lg'});
  }

}
