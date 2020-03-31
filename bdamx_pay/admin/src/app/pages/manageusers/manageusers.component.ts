import { Component, OnInit, OnDestroy, Input, ViewChild, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgbModal, ModalDismissReasons, NgbTabChangeEvent,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../common.service';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import { NgbTabset} from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';
import { BackendHost } from '../../../assets/varconfig';
import { environment } from '../../../environments/environment'
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { NgForm }   from '@angular/forms';

import { ngxCsv } from 'ngx-csv/ngx-csv';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';


@Component({
  selector: 'ngx-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss']
})
export class ManageusersComponent implements OnInit {
	@ViewChild(DatatableComponent) newstable:DatatableComponent;
  @ViewChild('form') form;

  value:any;
  serviceHost = environment.BackendHost;

  bannerblockrows = [];
  paring=[];
  bannerblocktemp = [];
  bannerblocklist = [];
  modalRef: NgbModalRef;
  img_selected=false;
  closeResult: string;
  ban:any={}

  banner_Status;

  currencyObj;

  question="";
  select:any={};

  answer="";

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
  limits_banner = [
    { key: '5', value: 5 },
    { key: '10', value: 10 },
    { key: '25', value: 25 },
    { key: '50', value: 50 },
    { key: '100', value: 100 }
  ];

  limit_banner: number = this.limits_banner[0].value;
  rowLimits_news: Array<any> = this.limits_banner;

  page_banner = {
    size: this.limits[0].value,totalElements:0,totalPages:0,pageNumber:0
  }
  defsort_banner: any = {dir: "desc", prop: "createddate"};
  defsearch_news = "";

  loading_banner: boolean = false;

  constructor(
    private modalService: NgbModal,private router: Router,
    private CommonService: CommonService,
    private toastr: ToastrService,
    private http:Http,
    private cookieService: CookieService
  ){ 
    this.newsloadfn();             
  }

  ngOnInit() {
    var data = {"_id":this.cookieService.get('session')}
    this.CommonService.requestData('admin/getsubadmin',data).subscribe(resData => {
      if(resData.admin_withdraw == 1){
        return true
      }
      else{
        this.router.navigate(['/pages/dashboard'])
      }
    })
  }

 newsloadfn(){
     var lstinput = {"page":this.page_banner,"sorting":this.defsort_banner,"search": this.defsearch_news};
    this.loading_banner = true;
    this.CommonService.requestData('BdAMx4fdex/Adminwithhistory',lstinput)
    .subscribe(resData => {
      this.page_banner.totalElements = resData.bannerTotalCount;
      this.page_banner.totalPages = this.page_banner.totalElements / this.page_banner.size;
      this.bannerblocklist = resData.value;
      this.bannerblocktemp = this.bannerblocklist;
      this.bannerblockrows = this.bannerblocklist;
      this.loading_banner = false;
    });
  }
 
//reset the banner list
resetnewslist(){

    this.limits_banner = [
      { key: '5',  value: 5 },
      { key: '10', value: 10 },
      { key: '25', value: 25 },
      { key: '50', value: 50 },
      { key: '100',value: 100 }
    ];
    this.limit_banner = this.limits_banner[0].value;
    this.rowLimits_news = this.limits_banner;
    this.page_banner = {
      size: this.limits_banner[0].value,totalElements:0,totalPages:0,pageNumber:0
    }
    this.defsort_banner= {dir: "desc", prop: "createddate"};
    this.defsearch_news = "";
    this.newsloadfn();
  }
//end of the function  


  setPage_banner(pageInfo){
    this.bannerblocklist = [];
    this.bannerblockrows = this.bannerblocklist;
    this.bannerblocktemp = this.bannerblocklist;
    this.page_banner.pageNumber = pageInfo.offset;
    this.loadbannerlist(this.page_banner,this.defsort_banner,this.defsearch_news);
  }

//sort the function
  loadbannerlist(page,sort,search){
    this.loading_banner = true;
    var lstinput = {"page":page,"sorting":sort,"search":search};
     this.CommonService.requestData('BdAMx4fdex/Adminwithhistory',lstinput)
      .subscribe(resData => {
        this.page_banner.totalElements = resData.bannerTotalCount;
        this.bannerblocklist = resData.value;
        this.bannerblockrows = this.bannerblocklist;
        this.bannerblocktemp = this.bannerblocklist;
        this.loading_banner = false;
    });
  }

  onSort_banner(event) {
    this.page_banner.pageNumber = 0;
    this.defsort_banner = event.sorts[0];
    this.loadbannerlist(this.page_banner,this.defsort_banner,this.defsearch_news);
  }

//search bar function
  updateFilter_news()  {

    this.limits_banner = [
      { key: '5',  value: 5 },
      { key: '10', value: 10 },
      { key: '25', value: 25 },
      { key: '50', value: 50 },
      { key: '100',value: 100 }
    ];
    this.limit_banner = this.limits_banner[0].value;
    this.rowLimits_news = this.limits_banner;
    this.page_banner.pageNumber = 0;
    this.newsloadfn();
  }
  
//change the row limit
  changeRowLimits_news(event) {
    this.bannerblocklist = [];
    this.bannerblockrows = this.bannerblocklist;
    this.bannerblocktemp = this.bannerblocklist;
    this.page_banner.size = +event.target.value;
    this.page_banner.pageNumber = 0;
    this.loadbannerlist(this.page_banner,this.defsort_banner,this.defsearch_news);
  }

	download_csv(){
		var lstinput = {"page":this.page,"sorting":this.defsort,"search": this.defsearch};

		this.CommonService.requestData('BdAMx4fdex/Adminwithhistory',lstinput).subscribe(resData => {
			if(resData){
				var Userexport = resData.value;
				var options={
					headers: ["ID", "Date & time", "Address","Amount","Transaction ID","Currency"]
				}
				new ngxCsv(Userexport, 'Export withdraw details' + new Date().getTime(),options);
			}
		})
	}

  download_excel():void {
		var lstinput = {"page":this.page,"sorting":this.defsort,"search": this.defsearch};

		this.CommonService.requestData('BdAMx4fdex/Adminwithhistory',lstinput).subscribe(resData => {
			if(resData){
		    this.CommonService.exportAsExcelFile(resData.value, 'Export withdraw details' + new Date().getTime());
			}
		})  	
  }

  download_pdf(){
		var lstinput = {"page":this.page,"sorting":this.defsort,"search": this.defsearch};

		this.CommonService.requestData('BdAMx4fdex/Adminwithhistory',lstinput).subscribe(resData => {
			if(resData){
				var col = ["ID", "Date & time", "Address","Amount","Transaction ID","Currency"];
				var doc = new jsPDF();
				var rowCountModNew = [];
				var rows=[]
				for(var i=0;i<resData.value.length;i++){
				  var columnsIn = resData.value[i]; 
			    var new_push=[]
				  for(var key in columnsIn){
				    new_push.push(resData.value[i][key].toString())
				  } 
				  rowCountModNew.push(new_push)					
				}
				rowCountModNew.forEach(element => {
					rows.push(element);
				});				
		    
		    doc.autoTable(col, rows);
		    doc.save('Export withdraw details' + new Date().getTime()+'.pdf');				
			}
		})  	
  }

  opennewsmodel(model_name){
    this.modalRef = this.modalService.open(model_name,{size:'lg'});
  }



}


