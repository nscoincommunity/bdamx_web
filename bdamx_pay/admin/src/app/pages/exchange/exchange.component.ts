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
  selector: 'ngx-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

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

  status_submitted:boolean=false
  rejcetion :any = {}

  loader=false;

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
  defsort: any = {dir: "desc", prop: "created_date"};
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
  defsort_banner: any = {dir: "desc", prop: "created_date"};
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
      if(resData.contact_us == 1){
        return true
      }
      else{
        this.router.navigate(['/pages/dashboard'])
      }
    })    
  }


  status_changes(type,id){
  	console.log(type,id,"this.rejcetion",this.rejcetion)
  	if(type == "approve"){
  		this.status_submitted =true
  		var data = {
  			exchanger : id ,
  		}
  		this.change_status_confirm(data)

  	}else{
  		this.status_submitted =true
  		if(this.rejcetion.reject_reason.trim() === "" ){
  			this.status_submitted =false
  			this.toastr.error("Please enter rejcetion reason",'');	
  		}else{
        var datas = {
        exchanger : id,
        rejcet_reason : this.rejcetion.reject_reason,
        }
        this.change_status_reject(datas)
  		}
  		
  	}



  }

  change_status_confirm(status){
  	
  	this.CommonService.requestData('exchange/exchange_confirm',status).subscribe(resData => {
  		if(resData.status)	{
			this.status_submitted =false
			this.toastr.success(resData.Msg,'');
			var button=document.getElementById('cls');
			button.click();
			this.resetnewslist()
  		}else{
  			this.status_submitted =false
  			this.toastr.error(resData.Msg,'');
  			var button=document.getElementById('cls');
			button.click();
			
  		}
  	});

  }



  change_status_reject(status){
    
    this.CommonService.requestData('exchange/exchange_rejcet',status).subscribe(resData => {
      if(resData.status)  {
        this.status_submitted =false
        this.toastr.success(resData.Msg,'');
        var button=document.getElementById('cls');
        button.click();
        this.resetnewslist()
      }else{
        this.status_submitted =false
        this.toastr.error(resData.Msg,'');
        var button=document.getElementById('cls');
        button.click();
      }
    });

  }





 newsloadfn(){
     var lstinput = {"page":this.page_banner,"sorting":this.defsort_banner,"search": this.defsearch_news};
    this.loading_banner = true;
    this.CommonService.requestData('exchange/exchange_list',lstinput)
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
    this.defsort_banner= {dir: "desc", prop: "created_date"};
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
     this.CommonService.requestData('exchange/exchange_list',lstinput)
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


//edit pop up display
   editbanners:any = {};


   openeditmodel(content,bannerrow) {
   	console.log(bannerrow)
      this.editbanners = bannerrow
      this.modalRef = this.modalService.open(content,{size:'lg'});
   }

	addreply(){
		this.loader = true;
    if(this.editbanners.reply.trim() == ''){
      this.toastr.error('Pleaser enter all the values','Error');
      this.loader = false;
    }
    else{
   		this.CommonService.requestData('contactus/send_reply',this.editbanners)
      .subscribe(resData => {		
      	if(resData.success==true){
      		this.loader = false;
      		this.toastr.success('Mail sent to '+this.editbanners.name,'Success');
      		this.newsloadfn();
          var button=document.getElementById('cls');
          button.click();    		
      	}
      	else{
      		this.loader = false;
      		this.toastr.error('Something went wrong try again','Error')
          var button=document.getElementById('cls');
          button.click();       		
      	}
      })
    }
	}

}
