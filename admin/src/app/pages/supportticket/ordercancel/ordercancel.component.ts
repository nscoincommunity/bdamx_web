import { Component, OnInit, OnDestroy,Input,ViewChild,ElementRef, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgbModal, ModalDismissReasons, NgbTabChangeEvent,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../../common.service';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import { NgbTabset} from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';
import { BackendHost } from '../../../../assets/varconfig';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';

import { ngxCsv } from 'ngx-csv/ngx-csv';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'ngx-ordercancel',
  templateUrl: './ordercancel.component.html',
  styleUrls: ['./ordercancel.component.scss']
})
export class OrdercancelComponent implements OnInit {

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
    var data = {"_id":this.cookieService.get('session')}
    this.CommonService.requestData('admin/getsubadmin',data).subscribe(resData => {
      if(resData.history_cancelled == 1){
        return true
      }
      else{
        this.router.navigate(['/pages/dashboard'])
      }
    })        
  }

  currencyloadfn(){
    var lstinput = {"page":this.page_banner,"sorting":this.defsort_banner,"search": this.defsearch_banner,'type':'cancel'};
    this.loading_banner = true;
    this.CommonService.requestData('BdAMx4fdex/tradedetails',lstinput)
    .subscribe(resData => {
      this.page_banner.totalElements = resData.value.length;
      this.page_banner.totalPages = this.page_banner.totalElements / this.page_banner.size;
      this.bannerblocklist = resData.value;
      this.bannerblocklist1 = resData.value;
      this.bannerblocktemp = this.bannerblocklist1;
      this.bannerblockrows = this.bannerblocklist1;
      this.loading_banner = false;
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
    var lstinput = {"page":page,"sorting":sort,"search":search,'type':'cancel'};
    this.CommonService.requestData('BdAMx4fdex/tradedetails',lstinput)
    .subscribe(resData => {
      this.page_banner.totalElements = resData.value.length;
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



  updateFilter_banner() {
    this.loading_banner = true;
    if(this.defsearch_banner.trim() == '') {
      this.bannerblocklist1 = this.bannerblocklist;
      this.loading_banner = false;
      this.bannerblockrows = this.bannerblocklist1; 
      this.bannerblocktemp = this.bannerblocklist1;  
      this.page_banner.totalElements = this.bannerblocklist1.length;    
    } else {
      this.bannerblocklist1 = this.bannerblocklist.filter(x => 
         x.userId.trim().toLowerCase().includes(this.defsearch_banner.trim().toLowerCase())
      );
      this.page_banner.totalElements = this.bannerblocklist1.length;
      this.bannerblockrows = this.bannerblocklist1;
      this.bannerblocktemp = this.bannerblocklist1;
      this.loading_banner = false;
    }
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

  // edit pop up display
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

  download_csv(){
    var lstinput = {"page":this.page_banner,"sorting":this.defsort_banner,"search": this.defsearch_banner,'type':'cancel'};
    this.CommonService.requestData('BdAMx4fdex/tradedetails',lstinput).subscribe(resData => {
      if(resData){
        var download_data=[]
        for(var i=0;i<resData.value.length;i++){
          var datas={
            Amount:resData.value[i].Amount,
            Price:resData.value[i].Price,
            Type:resData.value[i].Type,
            datetime:moment(resData.value[i].datetime).format("YYYY-MM-DD HH:mm:ss"),
            ordertype:resData.value[i].ordertype,
            pairNames:resData.value[i].pairNames,
            status:resData.value[i].status,
            total:resData.value[i].total,
            userId:resData.value[i].userId
          }
          download_data.push(datas)
        }
        var Userexport = download_data;
        var options={
          headers: ["Amount", "Price", "Type","datetime","ordertype","pairNames","status","total","userId"]
        }
        new ngxCsv(Userexport, 'Export Cancelled details' + new Date().getTime(),options);
      }
    })
  }
  download_excel():void {
    var lstinput = {"page":this.page_banner,"sorting":this.defsort_banner,"search": this.defsearch_banner,'type':'cancel'};
    this.CommonService.requestData('BdAMx4fdex/tradedetails',lstinput).subscribe(resData => {
      if(resData){
        var download_data=[]
        for(var i=0;i<resData.value.length;i++){
          var datas={
            Amount:resData.value[i].Amount,
            Price:resData.value[i].Price,
            Type:resData.value[i].Type,
            datetime:moment(resData.value[i].datetime).format("YYYY-MM-DD HH:mm:ss"),
            ordertype:resData.value[i].ordertype,
            pairNames:resData.value[i].pairNames,
            status:resData.value[i].status,
            total:resData.value[i].total,
            userId:resData.value[i].userId
          }
          download_data.push(datas)
        }       
        this.CommonService.exportAsExcelFile(download_data, 'Export Cancelled details' + new Date().getTime());
      }
    })    
  }
  opennewsmodel(model_name){
    this.modalRef = this.modalService.open(model_name,{size:'lg'});
  }

}
