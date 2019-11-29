import { Component, OnInit, OnDestroy, Input, ViewChild, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgbModal, ModalDismissReasons, NgbTabChangeEvent,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../common.service';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import { NgbTabset} from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';
import { BackendHost } from '../../../assets/varconfig';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'ngx-subsdmin',
  templateUrl: './subsdmin.component.html',
  styleUrls: ['./subsdmin.component.scss']
})
export class SubsdminComponent implements OnInit {
@ViewChild(DatatableComponent) newstable:DatatableComponent;

  value:any;
  serviceHost = BackendHost;

	addadmin:any={};
	addadminloader=false;

  bannerblockrows = [];
  bannerblocktemp = [];
  bannerblocklist = [];
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
			if(resData.sub_admin == 1){
				return true
			}
			else{
				this.router.navigate(['/pages/dashboard'])
			}
		})  	
		this.addadmin.admin_withdraw='0';
		this.addadmin.currency_details='0';
		this.addadmin.pair_details='0';
		this.addadmin.site_settings='0';
		this.addadmin.cms_page='0';
		this.addadmin.faq='0';
		this.addadmin.news='0';
		this.addadmin.meta_content='0';
		this.addadmin.deposit='0';
		this.addadmin.withdraw='0';
		this.addadmin.trade_history='0';
		this.addadmin.history_active='0';
		this.addadmin.history_cancelled='0';
		this.addadmin.profit='0';
		this.addadmin.currency_profit='0';
		this.addadmin.user_details='0';
		this.addadmin.token_details='0';
    this.addadmin.contact_us='0';
		this.addadmin.email_template='0';
  }

 newsloadfn(){
     var lstinput = {"page":this.page_banner,"sorting":this.defsort_banner,"search": this.defsearch_news};
    this.loading_banner = true;
    this.CommonService.requestData('admin/getsubadmins',lstinput)
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
     this.CommonService.requestData('admin/getsubadmins',lstinput)
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
   editadmin:any = {};


   openeditmodel(content,bannerrow) {
      this.editadmin = bannerrow;
			this.editadmin.admin_withdraw= this.editadmin.admin_withdraw.toString();
			this.editadmin.currency_details= this.editadmin.currency_details.toString();
			this.editadmin.pair_details= this.editadmin.pair_details.toString();
			this.editadmin.site_settings= this.editadmin.site_settings.toString();
			this.editadmin.cms_page= this.editadmin.cms_page.toString();
			this.editadmin.faq= this.editadmin.faq.toString();
			this.editadmin.news= this.editadmin.news.toString();
			this.editadmin.meta_content= this.editadmin.meta_content.toString();
			this.editadmin.deposit= this.editadmin.deposit.toString();
			this.editadmin.withdraw= this.editadmin.withdraw.toString();
			this.editadmin.trade_history= this.editadmin.trade_history.toString();
			this.editadmin.history_active= this.editadmin.history_active.toString();
			this.editadmin.history_cancelled= this.editadmin.history_cancelled.toString();
			this.editadmin.profit= this.editadmin.profit.toString();
			this.editadmin.currency_profit= this.editadmin.currency_profit.toString();
			this.editadmin.user_details= this.editadmin.user_details.toString();
			this.editadmin.token_details= this.editadmin.token_details.toString();
      this.editadmin.contact_us= this.editadmin.contact_us.toString();      
			this.editadmin.email_template= this.editadmin.email_template.toString();       
      this.modalRef = this.modalService.open(content,{size:'lg'});
        this.modalRef.result.then((result) => {
           this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
           this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
   }



  editAdmin(){
    this.CommonService.requestData('admin/edit_admin',this.editadmin)
    .subscribe(resData => {
      this.newsloadfn();
      this.toastr.success('News updated Successfully!', 'Success');
      this.modalRef.close();
    });
  }

	//status
	changeStatus(data,value,index) {
    var req={
      "_id": data._id,
      "status":value
    }    
    this.CommonService.requestData('admin/updatestatus',req)
    .subscribe(resData => {
    	this.bannerblocklist[index].status=value;
      this.toastr.success('Status updated Successfully!', 'Success');    	
    })
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

	Add_admin(form: NgForm){
		this.addadminloader=true;
		this.addadmin.admin_withdraw=+this.addadmin.admin_withdraw;
		this.addadmin.currency_details=+this.addadmin.currency_details;
		this.addadmin.pair_details=+this.addadmin.pair_details;
		this.addadmin.site_settings=+this.addadmin.site_settings;
		this.addadmin.cms_page=+this.addadmin.cms_page;
		this.addadmin.faq=+this.addadmin.faq;
		this.addadmin.news=+this.addadmin.news;
		this.addadmin.meta_content=+this.addadmin.meta_content;
		this.addadmin.deposit=+this.addadmin.deposit;
		this.addadmin.withdraw=+this.addadmin.withdraw;
		this.addadmin.trade_history=+this.addadmin.trade_history;
		this.addadmin.history_active=+this.addadmin.history_active;
		this.addadmin.history_cancelled=+this.addadmin.history_cancelled;
		this.addadmin.profit=+this.addadmin.profit;
		this.addadmin.currency_profit=+this.addadmin.currency_profit;
		this.addadmin.user_details=+this.addadmin.user_details;
		this.addadmin.token_details=+this.addadmin.token_details;
    this.addadmin.contact_us=+this.addadmin.contact_us;
		this.addadmin.email_template=+this.addadmin.contact_us;
		this.CommonService.requestData('admin/addadmin', this.addadmin).subscribe(resData => {		
			this.addadminloader=false;
      if(resData.success == true){
  			form.reset();
        this.toastr.success(resData.message, 'Success');
        var button=document.getElementById('cls');
        button.click();       
				this.addadmin.admin_withdraw='0';
				this.addadmin.currency_details='0';
				this.addadmin.pair_details='0';
				this.addadmin.site_settings='0';
				this.addadmin.cms_page='0';
				this.addadmin.faq='0';
				this.addadmin.news='0';
				this.addadmin.meta_content='0';
				this.addadmin.deposit='0';
				this.addadmin.withdraw='0';
				this.addadmin.trade_history='0';
				this.addadmin.history_active='0';
				this.addadmin.history_cancelled='0';
				this.addadmin.profit='0';
				this.addadmin.currency_profit='0';
				this.addadmin.user_details='0';
				this.addadmin.token_details='0';
        this.addadmin.contact_us='0';     
        this.addadmin.email_template='0'; 		
				this.newsloadfn()					
			}
			else{
				this.toastr.error(resData.message, 'Error');	
			}
		})
	}


}
