
import { Component, OnInit, OnDestroy, Input, ViewChild, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgbModal, ModalDismissReasons, NgbTabChangeEvent,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../../common.service';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import {NgbTabset} from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';
import { BackendHost } from '../../../../assets/varconfig';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { ngxCsv } from 'ngx-csv/ngx-csv';

import './ckeditor.loader';
import 'ckeditor';
@Component({
  selector: 'ngx-cmss',
  templateUrl: './cmss.component.html',
  styleUrls: ['./cmss.component.scss']
})
export class CmssComponent implements OnInit {
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
loader=false;
filesToUpload: Array<File> = [];
urls = new Array<string>(); 

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
      if(resData.cms_page == 1){
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
    this.CommonService.requestData('cms/getcmslist',lstinput)
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

     this.CommonService.requestData('cms/getcmslist',lstinput)
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
    var ck=this.editcms.page_content;
    ck = ck.toString();

    if(ck.trim() == ""){
      this.toastr.error('Dont leave empty content!', 'Error');
      this.editcms.page_content ="";
    }
    else if(this.editcms.page_heading.trim()==''){
      this.toastr.error('Dont leave empty content!', 'Error');
    }
    else{
      var data={
        "_id":this.editcms._id,
        "page_heading":this.editcms.page_heading,
        "page_name":this.editcms.page_name,
        "page_content":ck,

      }
      this.CommonService.requestData('cms/editcms',data)
      .subscribe(resData => {
        this.toastr.success('CMS details are Updated!', 'Success');
        this.cmslistloadfn()
        this.modalRef.close();
      });
    }
  }
  cancelcms(){
    this.loadcmslist(this.cmspage,this.cmsdefsort,this.cmsdefsearch);
  }

  fileChangeEvent(fileInput: any,type) {
    var path = fileInput.target.files[0].type;
    if (path == "image/jpeg" || path == "image/gif" || path == "image/jpg" || path == "image/png") {
      this.filesToUpload = <Array<File>>fileInput.target.files;
      this.urls = [];
      let files = fileInput.target.files;
      if (files) {
        for (let file of files) {
          let reader = new FileReader();
          reader.onload = (e: any) => {
            this.urls = e.target.result;
          }
          reader.readAsDataURL(file);
          this.onSubmit(type);
        }
      }
    }
    else{
      this.toastr.error('Please choose the correct image!','Error')
      this.filesToUpload = [];
    }    
  }

  onSubmit(type) {
    this.loader = true;
    this.toastr.info('Please wait your image is being uploaded','Info')
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    for(let i =0; i < files.length; i++){
      formData.append("uploads[]", this.filesToUpload[i], files[i]['name']);
    }
    this.http.post(this.serviceHost+'sitesetting/uploadPhoto',formData)
    .map(files => files.json())
    .subscribe(files => {
        this.CommonService.requestData('cms/updateimage',{"image":files.result.secure_url,"_id":this.editcms._id}).subscribe(res=>{
          this.loader=false
          this.editcms.image_url=files.result.secure_url
          this.toastr.success('Image updated successfully','Success')
        })
    })
  }


}
