import { Component,OnInit,ViewChild,ElementRef} from '@angular/core';
import { CommonService } from '../../common.service';
import { ToastrService } from 'ngx-toastr';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import { BackendHost } from '../../../assets/varconfig';
import { environment } from '../../../environments/environment'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-managecontent',
  templateUrl: './managecontent.component.html',
  styleUrls: ['./managecontent.component.scss']
})
export class ManagecontentComponent implements OnInit{

  model:any={}
  main:any={}
  contact:any={}
  filesToUpload: Array<File> = [];
  urls = new Array<string>(); 
  serviceHost = environment.BackendHost;
   loader=false;
   loader1=false;
   config={};
   @ViewChild('sitelogo') myInputVariable1: ElementRef;
   @ViewChild('sitelogo1') myInputVariable2: ElementRef;

  constructor(
    private toastr: ToastrService,
    private http:Http,
    private CommonService: CommonService,
    private router: Router,
    private cookieService: CookieService
   ){}



  ngOnInit(){
    var data = {"_id":this.cookieService.get('session')}
    this.CommonService.requestData('admin/getsubadmin',data).subscribe(resData => {
      if(resData.site_settings == 1){
        return true
      }
      else{
        this.router.navigate(['/pages/dashboard'])
      }
    })        
    this.CommonService.getData('sitesetting/get_settings').subscribe(resData => {
      this.model = resData.data;
      this.main.site_maintenance_reason = resData.data.site_maintenance_reason;
      this.main.site_maintenance = resData.data.site_maintenance.toString();
      this.contact = resData.data;
    });
  }


  reset1() {
      this.myInputVariable1.nativeElement.value = '';
  }

  reset2() {
      this.myInputVariable2.nativeElement.value = '';
  }

  upload(){
    this.CommonService.requestData('sitesetting/edit_sitesetting',this.model)
    .subscribe(resData => {
      this.toastr.success('Details updated Successfully', 'Success');
    });
  }
  upload_contactus(){
    this.CommonService.requestData('sitesetting/edit_sitesetting',this.contact)
    .subscribe(resData => {
      this.toastr.success('Details updated Successfully', 'Success');
    });
  }

  upload_sitemaintanance(){
    this.CommonService.requestData('sitesetting/update_maintanance',{"maintain": +this.main.site_maintenance,"reason":this.main.site_maintenance_reason})
    .subscribe(resData => {
      this.toastr.success('Details updated Successfully', 'Success');
    });
  }
   

  fileChangeEvent(fileInput: any,type) {
    console.log(fileInput,'fileee')
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
      this.toastr.error('Please choose the correct image!','Error');
      if(type === 'site_logo'){
        this.reset1();
      }else{
        this.reset2();
      }
      
    }    
  }

  onSubmit(type) {
    if(type == 'site_logo'){
      this.loader = true;
      this.toastr.info('Please wait Site Logo is being uploaded','Info')    
    }  
    else{
      this.loader1 = true;
      this.toastr.info('Please wait Favourite icon is being uploaded','Info')    
    }  
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    for(let i =0; i < files.length; i++){
      formData.append("uploads[]", this.filesToUpload[i], files[i]['name']);
    }
    this.http.post(this.serviceHost+'sitesetting/uploadPhoto',formData)
    .map(files => files.json())
    .subscribe(files => {
      if(type == 'site_logo'){
        this.CommonService.requestData('sitesetting/updateimage1',{"image":files.result.secure_url}).subscribe(res=>{
          this.loader=false
          this.model.site_logo=files.result.secure_url
          this.toastr.success('Site Logo updated successfully','Success')
        })
      }
      else{
        this.CommonService.requestData('sitesetting/updateimage2',{"image":files.result.secure_url}).subscribe(res=>{
          this.loader1=false
          this.model.favicon=files.result.secure_url
          this.toastr.success('Favourite icon updated successfully','Success')
        })
      }
    })
  }   

}




 

  
  

  

