import { Component, OnInit, OnDestroy, Input, ViewChild, ViewEncapsulation,ViewContainerRef } from '@angular/core';
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
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'ngx-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
@ViewChild(DatatableComponent) newstable:DatatableComponent;

  value:any;
  serviceHost = BackendHost;
  filesToUpload: Array<File> = [];
  urls = new Array<string>(); 
  loader=false;
  loader1=false;
  bannerblockrows = [];
  bannerblocktemp = [];
  bannerblocklist = [];
  modalRef: NgbModalRef;
  model:any={};
  imageUrl;

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
      if(resData.news == 1){
        return true
      }
      else{
        this.router.navigate(['/pages/dashboard'])
      }
    })        
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
    }    
  }

  fileChangeEvent_nw(fileInput: any,type) {
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
          this.onSubmit_nw(type);
        }
      }
    }
    else{
      this.toastr.error('Please choose the correct image!','Error')
      this.filesToUpload = [];
    }    
  }

  onSubmit_nw(type) {
    this.loader1 = true;
    this.toastr.info('Please wait your image is being uploaded','Info')
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    for(let i =0; i < files.length; i++){
      formData.append("uploads[]", this.filesToUpload[i], files[i]['name']);
    }
    this.http.post(this.serviceHost+'sitesetting/uploadPhoto',formData)
    .map(files => files.json())
    .subscribe(files => {
        this.CommonService.requestData('news/updateimage_nw',{"image":files.result.secure_url,"_id":this.editbanners._id}).subscribe(res=>{
          this.loader=false
          this.editbanners.image=files.result.secure_url
          this.toastr.success('Image updated successfully','Success')
        })
    })
  }

  onSubmit(type) {
    if(type == 'image'){
      this.loader = true;
      this.toastr.info('Please wait Image is being uploaded','Info')    
    }  
   
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    for(let i =0; i < files.length; i++){
      formData.append("uploads[]", this.filesToUpload[i], files[i]['name']);
    }
    this.http.post(this.serviceHost+'sitesetting/uploadPhoto',formData)
    .map(files => files.json())
    .subscribe(files => {
     console.log(files.result.secure_url);
     this.imageUrl = files.result.secure_url;
   
    
    })
  } 

 newsloadfn(){
     var lstinput = {"page":this.page_banner,"sorting":this.defsort_banner,"search": this.defsearch_news};
    this.loading_banner = true;
    this.CommonService.requestData('news/getfaqlist',lstinput)
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
     this.CommonService.requestData('news/getfaqlist',lstinput)
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
    this.loadbannerlist(this.page_banner,this.defsort_banner,this.defsearch_news);
  }
  //reset the image when uploading
  ban  = {"title":"","description":"","status":0,"content":""};

  resetbanneradd(){
    this.ban = {"title":"","description":"","status":0,"content":""};
    this.newsloadfn();
  }
 
 //save the image after upload
   Add_news(value){
    if(this.ban.title.trim()=='' && this.ban.description.trim()==''){
      this.toastr.error('Enter any content', 'Error');
    }
    else{
      var req={
        "title":this.ban.title,
        "description":this.ban.description,    
        "content":this.ban.content,
        "image":this.imageUrl   
      }
      console.log(req,'requestobject');

        this.CommonService.requestData('news/faqupload', req)
        .subscribe(resData => {
          if (resData) {
                     this.toastr.success('News is added successfully!', 'Success');
        if (this.modalRef) {
                    this.modalRef.close()
                }
                this.newsloadfn();
                this.resetform();
          } 
          else {
            this.toastr.error('News are not updated!', 'Error');
          }
        });
    }
  }

  resetform(){
    this.ban = {"title":"","description":"","status":0,"content":""};
  }

  //add pop up display
  addnewsClick(){
    this.ban  = {"title":"","description":"","status":0,"content":""};
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
   editbanners = {"_id":"","title":"","description":"","status":0,"content":"", "image":""};


   openeditmodel(content,bannerrow) {
      this.editbanners = {
        "_id": bannerrow._id,
        "title": bannerrow.title,
        "description": bannerrow.description,    
        "content":bannerrow.content,
        "status": bannerrow.status,
        "image":bannerrow.image
      };
      this.modalRef = this.modalService.open(content,{size:'lg'});
        this.modalRef.result.then((result) => {
           this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
           this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
   }



  saveEditEmailTemplate(content){
    var req={
      "_id": this.editbanners._id,
      "title":this.editbanners.title,
      "description":this.editbanners.description,
      "content":this.editbanners.content    
    }    
    this.CommonService.requestData('news/faqlist',req)
    .subscribe(resData => {
      this.bannerblocktemp = this.bannerblocklist;
      this.bannerblockrows = this.bannerblocklist;
      this.bannerblockrows = [...this.bannerblockrows];
      this.newsloadfn();
      this.toastr.success('News updated Successfully!', 'Success');
      this.modalRef.close();
    });
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
      this.CommonService.requestData('news/faqstatus', this.currencyObj).subscribe(resData => {
        if(resData.data)
        {
          this.toastr.success('News status changed Successfully!', 'Success');
         if (this.modalRef) {
                  this.modalRef.close()
              }
              this.newsloadfn();
              this.resetform();
      }
      else{
           this. newsloadfn();
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
    
    this.CommonService.requestData('news/deletefaq',deletevalue)
      .subscribe(resData => {
        if(resData.data){
                  this.toastr.success('News is deleted!', 'Success');

         if (this.modalRef) {
                  this.modalRef.close()
              }
              this.newsloadfn();
              this.resetform();
        }
        else{
        this.toastr.error('News is not deleted!', 'Error');

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
