import { Component, OnInit, OnDestroy,Input,ViewChild,ElementRef, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgbModal, ModalDismissReasons, NgbTabChangeEvent,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../common.service';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import { NgbTabset} from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';
import { BackendHost } from '../../../assets/varconfig';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  btc = 0;
  eth = 0;
  eos = 0;
  usdt = 0;

  adminid = this.cookieService.get('session');

  @ViewChild('inputFiles') myInputVariablee: ElementRef;
  @ViewChild('inputFile') myInputVariableee: ElementRef;
  @ViewChild(DatatableComponent) bannertable:DatatableComponent;
  serviceHost = BackendHost;
  filepath: any;
  submitted:boolean=false;
  ban:any={};
  bannerblockrows = [];
  bannerblocktemp = [];
  bannerblocklist = [];
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
  defsort: any = {dir: "desc", prop: "datetime"};
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
  defsort_banner: any = {dir: "desc", prop: "datetime"};
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

  resetimg() {
    this.myInputVariableee.nativeElement.value = '';
  }
  ngOnInit() {


    this.CommonService.getData('admin/getadminaddress').subscribe(resData => {
      
      if(resData.usdt_balance)
      {
         this.usdt = resData.usdt_balance;
      }

      if(resData.eth_balance)
      {
         this.eth = resData.eth_balance;
      }

      if(resData.eos_balance)
      {
         this.eos = resData.eos_balance;
      }

      if(resData.btc_balance)
      {
         this.btc = resData.btc_balance;
      }
     
    })    

    /*this.CommonService.getData('BdAMx4fdex/getdashboardcount_wallet')
    .subscribe(resData => {
      console.log(resData)
      for(var i=0;i<resData.value.length;i++){
        if(resData.value[i].pair.split('_')[1]=='BTC'){
          this.btc += 1;
        }
        else if(resData.value[i].pair.split('_')[1]=='ETH'){
          this.eth += 1;
        }
        else if(resData.value[i].pair.split('_')[1]=='EOS'){
          this.eos += 1;
        }                
      }
    });   */ 

  }

  currencyloadfn(){
    var lstinput = {"page":this.page_banner,"sorting":this.defsort_banner,"search": this.defsearch_banner,'id':this.adminid};
    this.loading_banner = true;
    this.CommonService.requestData('admin/getallactivity_wallet',lstinput)
    .subscribe(resData => {
      this.loading_banner = false;
      this.page_banner.totalElements = resData.bannerTotalCount;
      this.page_banner.totalPages = this.page_banner.totalElements / this.page_banner.size;
      this.bannerblocklist = resData.data;
      this.bannerblocktemp = this.bannerblocklist;
      this.bannerblockrows = this.bannerblocklist;
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
    this.defsort_banner= {dir: "desc", prop: "datetime"};
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
    var lstinput = {"page":page,"sorting":sort,"search":search,'id':this.adminid};
    this.CommonService.requestData('admin/getallactivity_wallet',lstinput)
    .subscribe(resData => {
      this.page_banner.totalElements = resData.bannerTotalCount;
      this.bannerblocklist = resData.data;
      this.bannerblockrows = this.bannerblocklist;
      this.bannerblocktemp = this.bannerblocklist;
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
  editbanners = {};
  editIndex = -1;
  openeditmodel(content,bannerrow) {
    this.editIndex = bannerrow.$index;
    this.editbanners = bannerrow;
    this.modalRef = this.modalService.open(content,{size:'lg'});
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${reason}`;
    });
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
    this.CommonService.requestData('currencypair/update_currency',this.editbanners)
    .subscribe(resData => {
      var button=document.getElementById('edit_cls');
      button.click();
      this.toastr.success('Changes updated successfully!', 'Success');
    })
  }

  download_csv(){
    var lstinput = {"page":this.page,"sorting":this.defsort,"search": this.defsearch,'id':this.adminid};

    this.CommonService.requestData('admin/getallactivity_wallet',lstinput).subscribe(resData => {
      if(resData){
        var download_data=[]
        for(var i=0;i<resData.data.length;i++){
          var datas={
            pair:resData.data[i].pair,
            fees:resData.data[i].fees,
            makerFee:resData.data[i].makerFee,
            min_trade_amount:resData.data[i].min_trade_amount,
            takerFee:resData.data[i].takerFee
          }
          download_data.push(datas)
        }
        var Userexport = download_data;
        var options={
          headers: ["pair", "fees", "makerFee","min_trade_amount","takerFee"]
        }
        new ngxCsv(Userexport, 'Export Pair details' + new Date().getTime(),options);
      }
    })
  }

  download_excel():void {
    var lstinput = {"page":this.page,"sorting":this.defsort,"search": this.defsearch,'id':this.adminid};

    this.CommonService.requestData('admin/getallactivity_wallet',lstinput).subscribe(resData => {
      if(resData){
        var download_data=[]
        for(var i=0;i<resData.data.length;i++){
          var datas={
            pair:resData.data[i].pair,
            fees:resData.data[i].fees,
            makerFee:resData.data[i].makerFee,
            min_trade_amount:resData.data[i].min_trade_amount,
            takerFee:resData.data[i].takerFee
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
  gotoo(data){
    this.router.navigate([data]);
  }

}


