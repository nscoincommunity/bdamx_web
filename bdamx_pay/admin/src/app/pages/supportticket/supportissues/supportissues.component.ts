import { Component, OnInit, OnDestroy,Input,ViewChild,ElementRef, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgbModal, ModalDismissReasons, NgbTabChangeEvent,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../../common.service';
import { FormsModule,NgForm }   from '@angular/forms';
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
  selector: 'ngx-supportissues',
  templateUrl: './supportissues.component.html',
  styleUrls: ['./supportissues.component.scss']
})
export class SupportissuesComponent implements OnInit {
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

currencyapprove : any ={}
  currencyreject : any = {}

  
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
  defsort: any = {dir: "desc", prop: "created_date"};
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
  defsort_banner: any = {dir: "desc", prop: "created_date"};
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
      if(resData.withdraw == 1){
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
    this.CommonService.requestData('BdAMx4fdex/history_withdraw',lstinput)
    .subscribe(resData => {
      this.page_banner.totalElements = resData.Message.count;
      this.page_banner.totalPages = this.page_banner.totalElements / this.page_banner.size;
      this.bannerblocklist = resData.Message.withhis;
      this.bannerblocklist1 = resData.Message.withhis;
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
    this.defsort_banner= {dir: "desc", prop: "created_date"};
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
    this.CommonService.requestData('BdAMx4fdex/history_withdraw',lstinput)
    .subscribe(resData => {
      this.page_banner.totalElements = resData.Message.count;
      this.bannerblocklist = resData.Message.withhis;
      this.bannerblocklist1 = resData.Message.withhis;
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

  // edit pop up display
  editbanners :any= {};
  editIndex = -1;
  openeditmodel(content,bannerrow) {
      this.editIndex = bannerrow.$index;
      this.editbanners = bannerrow;
      if(this.editbanners.currencytype!="crypto"){
        this.getusersbankdetails(this.editbanners.payment_type)
      }
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

  bankdetails:any = {}
  getusersbankdetails(id){
    let senData = {
      get_id : id
    }
    this.CommonService.requestData('BdAMx4fdex/user_account_details',senData).subscribe(resData => {
      if(resData.status){
        this.bankdetails = resData.data
      }
    });

  }

  download_csv(){
    var lstinput = {"page":this.page,"sorting":this.defsort,"search": this.defsearch};

    this.CommonService.requestData('BdAMx4fdex/history_withdraw',lstinput).subscribe(resData => {
      if(resData){
        var download_data=[]
        for(var i=0;i<resData.Message.withhis.length;i++){
          var datas={
            currencySymbol:resData.Message.withhis[i].currencySymbol,
            datetime:resData.Message.withhis[i].datetime,
            status:resData.Message.withhis[i].status,
            txid:resData.Message.withhis[i].txid,
            useraddress:resData.Message.withhis[i].useraddress,
            withamount:resData.Message.withhis[i].withamount
          }
          download_data.push(datas)
        }
        var Userexport = download_data;
        var options={
          headers: ["currencySymbol", "datetime","status","txid","useraddress","withamount"]
        }
        new ngxCsv(Userexport, 'Export Withdraw details' + new Date().getTime(),options);
      }
    })
  }
  download_excel():void {
    var lstinput = {"page":this.page,"sorting":this.defsort,"search": this.defsearch};

    this.CommonService.requestData('BdAMx4fdex/history_withdraw',lstinput).subscribe(resData => {
      if(resData){
        var download_data=[]
        for(var i=0;i<resData.Message.withhis.length;i++){
          var datas={
            currencySymbol:resData.Message.withhis[i].currencySymbol,
            datetime:resData.Message.withhis[i].datetime,
            status:resData.Message.withhis[i].status,
            txid:resData.Message.withhis[i].txid,
            useraddress:resData.Message.withhis[i].useraddress,
            withamount:resData.Message.withhis[i].withamount
          }
          download_data.push(datas)
        }       
        this.CommonService.exportAsExcelFile(download_data, 'Export Withdraw details' + new Date().getTime());
      }
    })    
  }
  opennewsmodel(model_name){
    this.modalRef = this.modalService.open(model_name,{size:'lg'});
  }


  status_submitted : boolean = false
  approveSubmit(form: NgForm){
    console.log(this.editbanners)
    this.status_submitted =true
    var senData = {
      cur_id : this.editbanners.withcurrency,
      with_id :this.editbanners._id,
    }
    this.CommonService.requestData('BdAMx4fdex/withdrawapprove',senData).subscribe(resData => {
      if(resData.status){
        this.status_submitted =false
        this.resetbannerlist()
        form.resetForm(); 
        var button=document.getElementById('edit_cls');
        button.click();
        this.toastr.success(resData.Msg,'');
      }else{
        this.status_submitted =false
        this.toastr.error(resData.Msg,'');
      }
    });

  }


  rejectSubmit(form: NgForm){
    this.status_submitted =true
    var senData = {
      cur_id : this.editbanners.withcurrency,
      with_id :this.editbanners._id,
      reject_reason : this.currencyreject.reason
    }
    console.log(senData)
    this.CommonService.requestData('BdAMx4fdex/withdrawreject',senData).subscribe(resData => {
      if(resData.status){
        this.status_submitted =false
        this.resetbannerlist()
        form.resetForm(); 
        var button=document.getElementById('edit_cls');
        button.click();
        this.toastr.success(resData.Msg,'');
      }else{
        this.status_submitted =false
        form.resetForm(); 
        var button=document.getElementById('edit_cls');
        button.click();
        this.toastr.error(resData.Msg,'');
      }
    });


  }



}
