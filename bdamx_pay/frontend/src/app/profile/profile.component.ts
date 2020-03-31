import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ApiService } from '../services/apiService';
import { ToastrService } from 'ngx-toastr';
import { FormsModule,NgForm }   from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	profile:any={};
	pass:any={};
	 @ViewChild('image') myInputVariable1: ElementRef;
	 filesToUploads=[];
	 depositClicked
	 profileSave;
	 imagechosen = false;
	 filenames;
	 pass_icon = "assets/images/pass-hide.png"
  constructor(
  	private apiService: ApiService,
  	private toastr: ToastrService) { }

  ngOnInit() {
    this.apiService.getPageHeader('Profile Settings');
    this.apiService.loader(true);
  	this.apiService.GetData('custom/getuser').subscribe((result:any)=>{
      this.profile = result.data;
      this.apiService.loader(false);
  	})

  }
  loginput : any = {}
  fileChangeEvents(fileInput: any) {
  this.imagechosen = true;
    var path = fileInput.target.files[0].type;
    if (path == "image/jpeg" || path == "image/gif" || path == "image/jpg" || path == "image/png") {
      this.depositClicked = false;
      this.filesToUploads=[];
      var path = fileInput.target.files[0].type;
      this.filesToUploads = <Array<File>>fileInput.target.files;
      this.filenames = fileInput.target.files[0].name;
      this.imageUpload();
    }
    else{
      this.toastr.error('Please choose the correct image!','Error');
      this.reset1();
      
    }    
  }

  reset1() {
      this.myInputVariable1.nativeElement.value = '';
  }

  imageUpload(){	
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUploads;
    for(let i =0; i < files.length; i++){
      formData.append("uploads[]", this.filesToUploads[i], files[i]['name']);
    }
    this.apiService.upload_image(formData).subscribe((resData:any)=>{
      if(resData){
        this.profile.image = resData.result.secure_url;
        this.toastr.success('Image Uploaded Successfully!');
      }
    })
  }

  change_passtype(type, image){
      var x = (<HTMLInputElement>document.getElementById(type));
      var imagetype = (<HTMLInputElement>document.getElementById(image));
      if (x.type === "password") {
        x.type = "text";
        imagetype.src = "assets/images/pass-hide.png";
      } else {
        x.type = "password";
        imagetype.src = "assets/images/pass-icon.png";
      }
    } 


  saveProfile(form: NgForm){
  	this.profileSave = true;
   	this.apiService.SenData('custom/updateprofile',this.profile).subscribe((resData:any)=>{
   		if(resData){
  			this.toastr.success('Updated Successfully!');
	        this.imagechosen = false;
	        this.ngOnInit();
  		}
  	});
  }

  savePass(form: NgForm){
  	if(this.pass.newpassword != this.pass.confirmnewpassword){
  		this.toastr.error('Confirm password should be same as new password');
  		return false;
  	}else{
  		var data ={
  			password:this.pass.currentpassword,
  			newpass:this.pass.newpassword
  		}
  		this.apiService.SenData('exchange/change_pass',data).subscribe((result:any)=>{
  			console.log(result,'resultdataaaa'); 
  			if(result.status){
  				this.toastr.success('Password updated Successfully!');
  				this.apiService.logout();
  			}else{
  				this.toastr.error(result.msg);
  			}
  		})
  	}

  }

}
