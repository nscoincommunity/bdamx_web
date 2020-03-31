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
import { NgForm }   from '@angular/forms';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'ngx-eoswallet',
  templateUrl: './eoswallet.component.html',
  styleUrls: ['./eoswallet.component.scss']
})
export class EoswalletComponent implements OnInit {

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

  img_qr='';
  eos_address='';
  originalEOS = 0.000000;
  balance = 0.000000;
  tableType = "withdraw"
  withdrw :any={};


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
    this.eosDetails();
  }

  eosDetails(){
    this.CommonService.getData('admin/getadminaddress').subscribe(resData => {
      this.eos_address = resData.eos_address;
      if(resData.eos_balance)
      {
         this.originalEOS = resData.eos_balance;
      }
      this.img_qr = 'https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=' + this.eos_address + '&choe=UTF-8&chld=L';
      /*this.CommonService.requestData('admin/getbalance',{"address":this.btc_address}).subscribe(res=>{
        this.originalBTC=res.amount;
      })*/
    })       
  }

  currencyloadfn(){
  	if(this.tableType == 'withdraw'){
	    var lstinput = {"page":this.page_banner,"sorting":this.defsort_banner,"search": this.defsearch_banner,"currency":"EOS"};
	    this.loading_banner = true;
	    this.CommonService.requestData('BdAMx4fdex/getadminwithdraw',lstinput)
	    .subscribe(resData => {
	      this.page_banner.totalElements = resData.count;
	      this.page_banner.totalPages = this.page_banner.totalElements / this.page_banner.size;
	      this.bannerblocklist = resData.Message;
	      this.bannerblocklist1 = resData.Message;
	      this.bannerblocktemp = this.bannerblocklist1;
	      this.bannerblockrows = this.bannerblocklist1;
	      this.loading_banner = false;
	    });
  	}
  	else{
	    var lstinput = {"page":this.page_banner,"sorting":this.defsort_banner,"search": this.defsearch_banner,"currency":"EOS"};
	    this.loading_banner = true;
	    this.CommonService.requestData('BdAMx4fdex/getadmindeposit',lstinput)
	    .subscribe(resData => {
	      this.page_banner.totalElements = resData.count;
	      this.page_banner.totalPages = this.page_banner.totalElements / this.page_banner.size;
	      this.bannerblocklist = resData.Message;
	      this.bannerblocklist1 = resData.Message;
	      this.bannerblocktemp = this.bannerblocklist1;
	      this.bannerblockrows = this.bannerblocklist1;
	      this.loading_banner = false;
	    });  		
  	}
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
    this.defsort_banner= {dir: "desc", prop: "date"};
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
  	if(this.tableType == 'withdraw'){  	
    this.loading_banner = true;
    var lstinput = {"page":page,"sorting":sort,"search":search,"currency":"EOS"};
    this.CommonService.requestData('BdAMx4fdex/getadminwithdraw',lstinput)
    .subscribe(resData => {
      this.page_banner.totalElements = resData.count;
      this.bannerblocklist = resData.Message;
      this.bannerblocklist1 = resData.Message;
      this.bannerblockrows = this.bannerblocklist1;
      this.bannerblocktemp = this.bannerblocklist1;
      this.loading_banner = false;
    });
   }
   else{
    this.loading_banner = true;
    var lstinput = {"page":page,"sorting":sort,"search":search, "currency":"EOS"};
    this.CommonService.requestData('BdAMx4fdex/getadmindeposit',lstinput)
    .subscribe(resData => {
      this.page_banner.totalElements = resData.count;
      this.bannerblocklist = resData.Message;
      this.bannerblocklist1 = resData.Message;
      this.bannerblockrows = this.bannerblocklist1;
      this.bannerblocktemp = this.bannerblocklist1;
      this.loading_banner = false;
    });   	
   }
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

  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastr.success("Address Copied", 'Success!');
  }
	Excuteorder(form: NgForm){
		var req={
			"address":this.withdrw.address,
			"useraddress":this.eos_address,
			"withamount":this.withdrw.amount,
			"currency":'EOS'
		}
		this.CommonService.requestData('custom/usdtwithdraw',req).subscribe(res=>{
			if(res.status == true){
				this.toastr.success(res.Message,'Success');
	    	this.eosDetails();		
	    	form.reset();
        this.currencyloadfn()
			}
			else{
				this.toastr.error(res.Message,'Error');
			}
		})
	}
  changetype(type) {
    this.tableType = type;
    this.currencyloadfn();
  }

}
