import { Component, OnInit, OnDestroy, Input, ViewChild, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgbModal, ModalDismissReasons, NgbTabChangeEvent,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../common.service';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import {NgbTabset} from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';
import { BackendHost } from '../../../assets/varconfig';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss']
})
export class EmailTemplateComponent implements OnInit {
@ViewChild(DatatableComponent) cmstable:DatatableComponent;
serviceHost = BackendHost;
rowscmslist = [];
tempcmslist = [];
cmslist = [];
modalRef: NgbModalRef;
closeResult: string;
banner_Status;
currencyObj;
config={};

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
    defsort: any = {dir: "desc", prop: "modified_date"};
    defsearch = "";

    loading: boolean = false;
    showtblview: boolean = true

  limitscmslist = [
  
    { key: '10', value: 10 },
    { key: '25', value: 25 },
    { key: '50', value: 50 },
    { key: '100', value: 100 }
  ];
  limitcmslist: number = this.limitscmslist[0].value;
  rowLimitscmslist: Array<any> = this.limitscmslist;
  cmspage = {
    size: this.limitscmslist[0].value,totalElements:0,totalPages:0,pageNumber:0
  }
  cmsdefsort: any = {dir: "desc", prop: "modified_date"};
  cmsdefsearch = "";
  loading_cms: boolean = false;

constructor(private modalService: NgbModal,private router: Router,
                 private CommonService: CommonService,
                 private toastr: ToastrService,
                 private http:Http,private cookieService: CookieService) { 
                this.cmslistloadfn();  
                
}
  ngOnInit() {
    var data = {"_id":this.cookieService.get('session')}
    this.CommonService.requestData('admin/getsubadmin',data).subscribe(resData => {
      if(resData.email_template == 1){
        return true
      }
      else{
        this.router.navigate(['/pages/dashboard'])
      }
    })        
    this.config['allowedContent'] = true;
  }
cmslistloadfn(){
    var lstinput = {"page":this.cmspage,"sorting":this.cmsdefsort,"search": this.cmsdefsearch};
    this.loading_cms = true;
    this.CommonService.requestData('emailtemplate/gettemplate',lstinput)
    .subscribe(resData => {
      this.cmspage.totalElements = resData.cmscount;
      this.cmspage.totalPages = this.cmspage.totalElements / this.cmspage.size;
      this.cmslist = resData.data;
      this.tempcmslist = this.cmslist;
      this.rowscmslist = this.cmslist;
      this.loading_cms = false;
    });
}

  resetcmslist(){

    this.limitscmslist = [
      { key: '10', value: 10 },
      { key: '25', value: 25 },
      { key: '50', value: 50 },
      { key: '100', value: 100 }
    ];

    this.limitcmslist = this.limitscmslist[0].value;
    this.rowLimitscmslist = this.limitscmslist;

    this.cmspage = {
      size: this.limitscmslist[0].value,totalElements:0,totalPages:0,pageNumber:0
    }
    this.cmsdefsort= {dir: "desc", prop: "modified_date"};
    this.cmsdefsearch = "";
    this.cmslistloadfn();
  }


  setPage_cms(pageInfo){
     this.cmslist = [];
    this.rowscmslist = this.cmslist;
    this.tempcmslist = this.cmslist;
    this.cmspage.pageNumber = pageInfo.offset;      
    this.loadcmslist(this.cmspage,this.cmsdefsort,this.cmsdefsearch);
  }

  loadcmslist(page,sort,search){
    this.loading_cms = true;
    var lstinput = {"page":page,"sorting":sort,"search":search};

     this.CommonService.requestData('emailtemplate/gettemplate',lstinput)
      .subscribe(resData => {
        this.cmslist = resData.data;
        this.tempcmslist = this.cmslist;
        this.rowscmslist = this.cmslist;
        this.loading_cms = false;
    });
  }

  onSort_cms(event) {
    this.cmspage.pageNumber = 0;
    this.cmsdefsort = event.sorts[0];
    this.loadcmslist(this.cmspage,this.cmsdefsort,this.cmsdefsearch);
  }


  updateFilterCMS()  {
    this.limitscmslist = [
      { key: '10', value: 10 },
      { key: '25', value: 25 },
      { key: '50', value: 50 },
      { key: '100', value: 100 }
    ];

    this.limitcmslist = this.limitscmslist[0].value;
    this.rowLimitscmslist = this.limitscmslist;
    this.cmspage.pageNumber = 0;
    this.cmslistloadfn();
  }

  changeRowLimitsCMS(event) {
    this.cmslist = [];
    this.rowscmslist = this.cmslist;
    this.tempcmslist = this.cmslist;
    this.cmspage.size = +event.target.value;
    this.cmspage.pageNumber = 0;
    this.cmstable.limit = event.target.value;
    this.loadcmslist(this.cmspage,this.cmsdefsort,this.cmsdefsearch);
  }
  editorConfig = {};
  editcms :any = {};
  cmsIndx = 0;
  diseditcms = true;

  openCMSmodel(content,cmsid) {
    this.editcms = cmsid 
    this.modalRef = this.modalService.open(content,{size:'lg'});
    this.modalRef.result.then((result) => {
         this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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



  saveEditCMS(){
    var ck=this.editcms.mailcontent;
    ck = ck.toString();

    if(ck.trim() == ""){
      this.toastr.error('Dont leave empty content!', 'Error');
      this.editcms.mailcontent ="";
    }
    else if(this.editcms.mailsubject.trim()==''){
      this.toastr.error('Dont leave empty content!', 'Error');
    }
    else{
      var data={
        "_id":this.editcms._id,
        "mailcontent":ck,
        "mailsubject":this.editcms.mailsubject
      }
      this.CommonService.requestData('emailtemplate/edittemplate',data)
      .subscribe(resData => {
        this.toastr.success('Mail details are Updated!', 'Success');
        this.cmslistloadfn()
        this.modalRef.close();
      });
    }
  }
  cancelcms(){
    this.loadcmslist(this.cmspage,this.cmsdefsort,this.cmsdefsearch);
  }

}
