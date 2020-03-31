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
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { NgForm }   from '@angular/forms';


@Component({
  selector: 'ngx-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.scss']
})
export class ClickComponent implements OnInit {
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
  defsort: any = {dir: "desc", prop: "datetime"};
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
  defsort_banner: any = {dir: "desc", prop: "datetime"};
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
      if(resData.token_details == 1){
        return true
      }
      else{
        this.router.navigate(['/pages/dashboard'])
      }
    })      
    this.ban.base_coin ="ETH"
  }

 newsloadfn(){
     var lstinput = {"page":this.page_banner,"sorting":this.defsort_banner,"search": this.defsearch_news};
    this.loading_banner = true;
    this.CommonService.requestData('token/gettokendetails',lstinput)
    .subscribe(resData => {
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
    this.defsort_banner= {dir: "desc", prop: "datetime"};
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
     this.CommonService.requestData('token/gettokendetails',lstinput)
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
    this.newsloadfn();
  }
  
//change the row limit
  changeRowLimits_news(event) {
    this.bannerblocklist = [];
    this.bannerblockrows = this.bannerblocklist;
    this.bannerblocktemp = this.bannerblocklist;
    this.page_banner.size = +event.target.value;
    this.page_banner.pageNumber = 0;
    this.newstable.limit = +event.target.value;
    this.loadbannerlist(this.page_banner,this.defsort_banner,this.defsearch_news);
  }

  //add pop up display
  addnewsClick(){
    return true
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
   editbanners = {};


   openeditmodel(content,bannerrow) {
      this.editbanners = bannerrow
      this.modalRef = this.modalService.open(content,{size:'lg'});
        this.modalRef.result.then((result) => {
           this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
           this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
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

  filesToUploads: Array<File> = [];
  urls=[];
  filenames = "";
  fileChangeEvents(fileInput: any) {
    this.filesToUploads=[];
    var path = fileInput.target.files[0].type;
    if(path == "image/jpeg" || path == "image/gif" || path == "image/jpg" || path == "image/png")
    {  
      this.filesToUploads = <Array<File>>fileInput.target.files;
      this.filenames = fileInput.target.files[0].name;
      let files = fileInput.target.files;
      if (files) {
        for (let file of files) {
          let reader = new FileReader();
          reader.onload = (e: any) => {
            this.urls = e.target.result;
          }
          reader.readAsDataURL(file);
        }
      }      
      this.img_selected=true;
    }
    else{
      this.toastr.error('Please choose a right file!', 'Error');
      this.filesToUploads=[];
      this.urls=[];
      this.filenames='';
      this.img_selected=false;
    }
  }

  onsubmit(form: NgForm){
    if(this.paring.length > 0){
      if(this.img_selected == false){
        this.toastr.error('Please select image to continue','Error')
      }
      else{
        const formData: any = new FormData();
        const files: Array<File> = this.filesToUploads;
        for(let i =0; i < files.length; i++){
          formData.append("uploads[]", this.filesToUploads[i], files[i]['name']);
        }
        this.http.post(this.serviceHost+'currencydetails/uploadPhoto',formData)
        .map(files => files.json())
        .subscribe(files => {
          this.ban.logo=files.result.secure_url
          this.add_content(form)
        })      
      }
    }
    else{
      this.toastr.error('Please select a pair','Error')
    }
  }
  checkbox(val){
    if((<HTMLInputElement> document.getElementById(val)).checked == true){
      this.paring.push(val)
    }
    else{
      var filtered = this.paring.filter(function(value, index, arr){
        return value != val;
      });
      this.paring = filtered;
    }
  }
  add_content(form: NgForm){
    var pairs=''
    for(var i=0;i<this.paring.length;i++){
      if(i+1 != this.paring.length){
        pairs += this.ban.token_symbol.toUpperCase()+"/"+this.paring[i].toUpperCase()+",";
      }
      else{
        pairs += this.ban.token_symbol.toUpperCase()+"/"+this.paring[i].toUpperCase();
      }
    }
    var req={
      "name" : this.ban.token_name,
      "symbol" : this.ban.token_symbol.toUpperCase(),
      "logo" : this.ban.logo,
      "minimum" : this.ban.minwithdraw,
      "pairlist" : pairs,
      "maximum" : this.ban.maxwithdraw,
      "fee" : this.ban.withdrawfee,
      "decimal" : this.ban.decimal,
      "conaddress" : this.ban.contract_address,
      "status" : 'Approved',
      "baseCoin" : this.ban.base_coin
    }
    this.CommonService.requestData('token/addtoken',req).subscribe(res=>{
      if(res.status == true){
        this.toastr.success(res.Message,"Success");
        var button=document.getElementById('shortcut_close');
        button.click();
        location.reload();
      }
      else{
        this.toastr.error(res.Message,"Error");
      }
    })
  }
}
