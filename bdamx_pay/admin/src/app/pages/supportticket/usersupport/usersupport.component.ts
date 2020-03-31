import { Component, OnInit, OnDestroy,Input,ViewChild,ElementRef, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { FormBuilder,NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
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
declare var $ : any;
@Component({
  selector: 'ngx-usersupport',
  templateUrl: './usersupport.component.html',
  styleUrls: ['./usersupport.component.scss']
})
export class UsersupportComponent implements OnInit {
  @ViewChild('inputFiles') myInputVariablee: ElementRef;
  @ViewChild('inputFile') myInputVariableee: ElementRef;
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
  

  currencyapprove : any ={}
  currencyreject : any = {}


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
      if(resData.deposit == 1){
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
    this.CommonService.requestData('BdAMx4fdex/history_deposit',lstinput)
    // this.CommonService.getData('BdAMx4fdex/history_old')
    .subscribe(resData => {
      this.page_banner.totalElements = resData.Message.count;
      this.page_banner.totalPages = this.page_banner.totalElements / this.page_banner.size;
      this.bannerblocklist = resData.Message.dephis;
      this.bannerblocklist1 = resData.Message.dephis;
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
    this.CommonService.requestData('BdAMx4fdex/history_deposit',lstinput)
    .subscribe(resData => {
      this.page_banner.totalElements = resData.Message.count;
      this.bannerblocklist = resData.Message.dephis;
      this.bannerblocklist1 = resData.Message.dephis;
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

  // search bar function
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
  editbanners:any = {};
  editIndex = -1;
  openeditmodel(content,bannerrow) {
      this.editIndex = bannerrow.$index;
      this.editbanners = bannerrow;
      console.log(bannerrow,'rouwwwww')
      if(this.editbanners.currency_type==="fiat"){
        console.log(this.editbanners.bankDetail)
        this.getadmin_bankdetails(this.editbanners.bankDetail)
      }
      this.modalRef = this.modalService.open(content,{size:'lg'});
      this.modalRef.result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${reason}`;
      });
  }

    
  bankdetails:any = {}
  getadmin_bankdetails(id){
    let senData = {
      get_id : id
    }

    this.CommonService.requestData('BdAMx4fdex/account_details',senData).subscribe(resData => {
      console.log(resData)
      this.bankdetails = resData.data
    });

  }

  ngOnDestroy(){
    if(this.modalRef){
      this.modalRef.close()
    }
  }

  download_csv(){
    var lstinput = {"page":this.page,"sorting":this.defsort,"search": this.defsearch};

    this.CommonService.requestData('BdAMx4fdex/history_deposit',lstinput).subscribe(resData => {
      if(resData){
        var download_data=[]
        for(var i=0;i<resData.Message.dephis.length;i++){
          var datas={
            createddate:resData.Message.dephis[i].createddate,
            currencySymbol:resData.Message.dephis[i].currencySymbol1,
            depamt:resData.Message.dephis[i].depamt,
            depstatus:resData.Message.dephis[i].depstatus,
            depto:resData.Message.dephis[i].depto,
            txnid:resData.Message.dephis[i].txnid,
            userId:resData.Message.dephis[i].userId
          }
          download_data.push(datas)
        }
        var Userexport = download_data;
        var options={
          headers: ["createddate", "currencySymbol", "depamt","depstatus","depto","txnid","userId"]
        }
        new ngxCsv(Userexport, 'Export Deposit details' + new Date().getTime(),options);
      }
    })
  }
  download_excel():void {
    var lstinput = {"page":this.page,"sorting":this.defsort,"search": this.defsearch};

    this.CommonService.requestData('BdAMx4fdex/history_deposit',lstinput).subscribe(resData => {
      if(resData){
        var download_data=[]
        for(var i=0;i<resData.Message.dephis.length;i++){
          var datas={
            createddate:resData.Message.dephis[i].createddate,
            currencySymbol:resData.Message.dephis[i].currencySymbol1,
            depamt:resData.Message.dephis[i].depamt,
            depstatus:resData.Message.dephis[i].depstatus,
            depto:resData.Message.dephis[i].depto,
            txnid:resData.Message.dephis[i].txnid,
            userId:resData.Message.dephis[i].userId
          }
          download_data.push(datas)
        }       
        this.CommonService.exportAsExcelFile(download_data, 'Export Deposit details' + new Date().getTime());
      }
    })    
  }
  opennewsmodel(model_name){
    this.modalRef = this.modalService.open(model_name,{size:'lg'});
  }  

  approve_submitted:boolean=false
  approveSubmit(form: NgForm){
    this.approve_submitted = true
    var senData = {
      cur_id : this.editbanners.currency,
      depos_id :this.editbanners._id,
      approve_amount : this.currencyapprove.amount
    }
    this.CommonService.requestData('BdAMx4fdex/depositapprove',senData).subscribe(resData => {
      if(resData.status){
        this.resetbannerlist()
        form.resetForm(); 
        this.approve_submitted = false
        this.toastr.success(resData.Msg,'');
        this.ngOnDestroy();
      }else{
        this.approve_submitted = false
        this.toastr.error(resData.Msg,'');
      }
    });
    



  }


  rejectSubmitted : boolean =false

  rejectSubmit(form: NgForm){
    this.rejectSubmitted = true
    var senData = {
      cur_id : this.editbanners.currency,
      depos_id :this.editbanners._id,
      reject_reason : this.currencyreject.reason
    }
    console.log(senData)
    this.CommonService.requestData('BdAMx4fdex/depositreject',senData).subscribe(resData => {
      if(resData.status){

        this.resetbannerlist()
        form.resetForm(); 
        this.rejectSubmitted = false
        this.toastr.success(resData.Msg,'');
        this.ngOnDestroy();
      }else{
        this.rejectSubmitted = false
        this.toastr.error(resData.Msg,'');
      }

    });


  }

}
