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
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

	@ViewChild('inputFiles') myInputVariablee: ElementRef;
	@ViewChild('inputFile') myInputVariableee: ElementRef;
	@ViewChild(DatatableComponent) bannertable:DatatableComponent;
	serviceHost = BackendHost;
	filepath: any;
	submitted:boolean=false;
	ban:any={};
	editbanners:any = {};
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

	resetimg() {
		this.myInputVariableee.nativeElement.value = '';
	}
  ngOnInit() {
    var data = {"_id":this.cookieService.get('session')}
    this.CommonService.requestData('admin/getsubadmin',data).subscribe(resData => {
      if(resData.user_details == 1){
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
		this.CommonService.requestData('BdAMx4fdex/getallusers',lstinput)
		.subscribe(resData => {
			this.page_banner.totalElements = resData.bannerTotalCount;
			this.page_banner.totalPages = this.page_banner.totalElements / this.page_banner.size;
			this.bannerblocklist = resData.data;
			this.bannerblocktemp = this.bannerblocklist;
			this.bannerblockrows = this.bannerblocklist;
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
		this.CommonService.requestData('BdAMx4fdex/getallusers',lstinput)
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

	//Edit Image
	filesToUploads: Array<File> = [];
	filenames = "";
	fileChangeEvents(fileInput: any) {
		this.filesToUploads=[];
		var path = fileInput.target.files[0].type;
		if(path == "image/jpeg" || path == "image/gif" || path == "image/jpg" || path == "image/png")
		{  
			this.filesToUploads = <Array<File>>fileInput.target.files;
			this.filenames = fileInput.target.files[0].name;
			this.onSubmit();
		}
		else{
			this.toastr.error('Please choose a right file!', 'Error');
			this.filesToUploads=[];
			this.filenames='';
		}
	}

  onSubmit() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUploads;
    for(let i =0; i < files.length; i++){
      formData.append("uploads[]", this.filesToUploads[i], files[i]['name']);
    }
    this.http.post(this.serviceHost+'currencydetails/uploadPhoto',formData)
    .map(files => files.json())
    .subscribe(files => {
        this.CommonService.requestData('currencydetails/updateimage',{"image":files.result.secure_url}).subscribe(res=>{
          this.editbanners.image=files.result.secure_url
          this.toastr.success('Currency image updated successfully','Success')
        })
    })
  }

	// edit pop up display
	
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
		var lstinput = {"page":this.page,"sorting":this.defsort,"search": this.defsearch};

		this.CommonService.requestData('BdAMx4fdex/getallusers',lstinput).subscribe(resData => {
			if(resData){
				var download_data=[]
				for(var i=0;i<resData.data.length;i++){
					var datas={
						currencyName:resData.data[i].currencyName,
						currencySymbol:resData.data[i].currencySymbol,
						decimals:resData.data[i].decimals,
						maxwithamt:resData.data[i].maxwithamt,
						minwithamt:resData.data[i].minwithamt,
						withdrawfee:resData.data[i].withdrawfee
					}
					download_data.push(datas)
				}
				var Userexport = download_data;
				var options={
					headers: ["currencyName", "currencySymbol", "decimals","maxwithamt","minwithamt","withdrawfee"]
				}
				new ngxCsv(Userexport, 'Export Currency details' + new Date().getTime(),options);
			}
		})
	}

  download_excel():void {
		var lstinput = {"page":this.page,"sorting":this.defsort,"search": this.defsearch};

		this.CommonService.requestData('BdAMx4fdex/getallusers',lstinput).subscribe(resData => {
			if(resData){
				var download_data=[]
				for(var i=0;i<resData.data.length;i++){
					var datas={
						currencyName:resData.data[i].currencyName,
						currencySymbol:resData.data[i].currencySymbol,
						decimals:resData.data[i].decimals,
						maxwithamt:resData.data[i].maxwithamt,
						minwithamt:resData.data[i].minwithamt,
						withdrawfee:resData.data[i].withdrawfee
					}
					download_data.push(datas)
				}				
		    this.CommonService.exportAsExcelFile(download_data, 'Export Currency details' + new Date().getTime());
			}
		})  	
  }
  opennewsmodel(model_name){
    this.modalRef = this.modalService.open(model_name,{size:'lg'});
  }

	change_status(detail,sts){
		var req={
		"_id":detail._id,
		"status":+sts
		}
		this.CommonService.requestData('BdAMx4fdex/changests',req).subscribe(resData=>{
			this.currencyloadfn();
			this.toastr.success('Status updated successfully','SUCCESS')
		})
	}

}
