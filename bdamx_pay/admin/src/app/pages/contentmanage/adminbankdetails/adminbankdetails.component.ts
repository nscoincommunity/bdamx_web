import { Component, OnInit, OnDestroy, Input, ViewChild, ViewEncapsulation,ViewContainerRef } from '@angular/core';
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

import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-adminbankdetails',
  templateUrl: './adminbankdetails.component.html',
  styleUrls: ['./adminbankdetails.component.scss']
})
export class AdminbankdetailsComponent implements OnInit {

  @ViewChild(DatatableComponent) newstable:DatatableComponent;

  value:any;
  serviceHost = environment.BackendHost;

  bannerblockrows = [];
  bannerblocktemp = [];
  bannerblocklist = [];
  currencyList = [];
  modalRef: NgbModalRef;

  closeResult: string;

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
  defsort: any = {dir: "desc", prop: "modifieddate"};
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
  defsort_banner: any = {dir: "desc", prop: "modifieddate"};
  defsearch_news = "";

  loading_banner: boolean = false;

  constructor(
    private modalService: NgbModal,private router: Router,
    private CommonService: CommonService,
    private toastr: ToastrService,
    private http:Http,
    private cookieService: CookieService
  ){ 
    this.faqloadfn();             
  }

  ngOnInit() {
    var data = {"_id":this.cookieService.get('session')}
    this.CommonService.requestData('admin/getsubadmin',data).subscribe(resData => {
      if(resData.faq == 1){
        return true
      }
      else{
        this.router.navigate(['/pages/dashboard'])
      }
    });

    this.CommonService.getData('currencydetails/getCurrencydet').subscribe(resData=>{
      console.log(resData,"hdfghdgfhdgf")
      this.currencyList = resData.data;
    });       
  }

 faqloadfn(){
     var lstinput = {"page":this.page_banner,"sorting":this.defsort_banner,"search": this.defsearch_news};
    this.loading_banner = true;
    this.CommonService.requestData('adminbankdetails/getadminbanklist',lstinput)
    .subscribe(resData => {
      if(resData.data.length>0){
        this.select=resData.data[0];
      }
      this.page_banner.totalElements = resData.bannerTotalCount;
      this.page_banner.totalPages = this.page_banner.totalElements / this.page_banner.size;
      this.bannerblocklist = resData.data;
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
    this.defsort_banner= {dir: "desc", prop: "modifieddate"};
    this.defsearch_news = "";
    this.faqloadfn();
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
     this.CommonService.requestData('adminbankdetails/getadminbanklist',lstinput)
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
    this.faqloadfn();
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
  //reset the image when uploading
  ban  = {"currencysymbol":"","bank":"","status":0};

  resetbanneradd(){
    this.ban = {"currencysymbol":"","bank":"","status":0};
    this.faqloadfn();
  }
 
 //save the image after upload
   Add_bank(value){
    if(this.ban.currencysymbol.trim()=='' && this.ban.bank.trim()==''){
      this.toastr.error('Enter any content', 'Error');
    }
    else{
      var req={
        "currencysymbol":this.ban.currencysymbol,
        "bank":this.ban.bank,
        "status":0   
      }
        this.CommonService.requestData('adminbankdetails/bankupload', req)
        .subscribe(resData => {
          if (resData.status) {
                     this.toastr.success('Bank Detail is added successfully!', 'Success');
        if (this.modalRef) {
                    this.modalRef.close()
                }
                this.faqloadfn();
                this.resetform();
          } 
          else {
            this.toastr.error(resData.Msg, 'Error');
          }
        });
    }
  }

  resetform(){
    this.ban = {"currencysymbol":"","bank":"","status":0};
  }

  //add pop up display
  addnewsClick(){
    this.ban  = {"currencysymbol":"","bank":"","status":0};
  }

  
  bannerIndx = 0;
  opennewsmodel(content) {
     this.modalRef = this.modalService.open(content,{size:'lg'});
        this.modalRef.result.then((result) => {
           this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
           this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
   }

//edit pop up display
   editbanners = {"_id":"","currencysymbol":"","bank":"","status":0};


   openeditmodel(content,bannerrow) {

      this.editbanners = {
        "_id": bannerrow._id,
        "currencysymbol":bannerrow.currencysymbol,
        "bank": bannerrow.bank,
        "status": bannerrow.status
      };
      this.modalRef = this.modalService.open(content,{size:'lg'});
        this.modalRef.result.then((result) => {
           this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
           this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });

   }



  saveEditEmailTemplate(content,bannerrow){
    if(this.editbanners.currencysymbol.trim()=='' || this.editbanners.bank.trim()==''){
      this.toastr.error('Enter any content', 'Error');
    }
    else{    
    this.CommonService.requestData('adminbankdetails/banklist',this.editbanners)
    .subscribe(resData => {
     	// this.bannerblocktemp = this.bannerblocklist;
     	// this.bannerblockrows = this.bannerblocklist;
     	// this.bannerblockrows = [...this.bannerblockrows];
      // this.faqloadfn();
      // this.toastr.success('FAQ updated Successfully!', 'Success');
      // this.modalRef.close();

       if (resData.status) {
            this.toastr.success('Bank Detail is added successfully!', 'Success');
        if (this.modalRef) {
              this.modalRef.close()
        }
          this.faqloadfn();
          this.resetform();
         }else {
            this.toastr.error(resData.Msg, 'Error');
          }
    });
  }
  }

//status
changebannerStatus(editbannervalue) {

      if(editbannervalue.status === 0){
        this.banner_Status = 1;
      }
      else{
        this.banner_Status = 0;
      }
      
      this.currencyObj = {"_id":editbannervalue._id,"status": this.banner_Status};
      this.CommonService.requestData('adminbankdetails/detailstatus', this.currencyObj).subscribe(resData => {
        if(resData.data)
        {
          this.toastr.success('Admin Bank Detail status changed Successfully!', 'Success');
         if (this.modalRef) {
                  this.modalRef.close()
              }
              this.faqloadfn();
              this.resetform();
      }
      else{
           this. faqloadfn();
      }
      })
  }


  bannerindx = -1;
  bannersvalue = {};
  banner = "";
  changebanner(content, bannerrow){

    this.bannersvalue = bannerrow;
    this.bannerindx = bannerrow.$$index;
     this.modalRef = this.modalService.open(content,{size:'sm'});
        this.modalRef.result.then((result) => {
           this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
           this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

//delete pop up display
 deletenewspopup(content, bannerrow){

    this.bannersvalue = bannerrow;
    this.bannerindx = bannerrow.$$index;
   
     this.modalRef = this.modalService.open(content,{size:'sm'});
        this.modalRef.result.then((result) => {
           this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
           this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

deletenews(deletevalue){
    
    this.CommonService.requestData('adminbankdetails/deleteinfo',deletevalue)
      .subscribe(resData => {
        if(resData.data){
                  this.toastr.success('Bank Detail is deleted!', 'Success');

         if (this.modalRef) {
                  this.modalRef.close()
              }
              this.faqloadfn();
              this.resetform();
        }
        else{
        this.toastr.error('Bank Detail is not deleted!', 'Error');

        }

      });
    }
 
cancelemailtemp(){
    this.loadbannerlist(this.page,this.defsort,this.defsearch);
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  'with: ${reason}';
    }
  }

}
