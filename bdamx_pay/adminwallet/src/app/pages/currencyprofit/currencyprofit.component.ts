import { Component, OnInit, OnDestroy,Input,ViewChild,ElementRef, ViewEncapsulation,ViewContainerRef } from '@angular/core';
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
import { NgForm }   from '@angular/forms';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import Web3 from 'web3';
import 'jspdf-autotable';
declare let window;
declare const Buffer;
@Component({
  selector: 'ngx-currencyprofit',
  templateUrl: './currencyprofit.component.html',
  styleUrls: ['./currencyprofit.component.scss']
})
export class CurrencyprofitComponent implements OnInit {

  @ViewChild('inputFiles') myInputVariablee: ElementRef;
  @ViewChild('inputFile') myInputVariableee: ElementRef;
  @ViewChild(DatatableComponent) bannertable:DatatableComponent;
  serviceHost = BackendHost;
  public web3;
  filepath: any;
  submitted:boolean=false;
  submitloaderdep=0;
  submitloaderbyts=0;
  ban:any={};
  bannerblockrows = [];
  bannerblocktemp = [];
  bannerblocklist = [];
  bannerblocklist1=[];
  editbanners :any={};
  listCurrency :any={};
  proval :any={address:'',amount:'',privatekey:''};
  modalRef: NgbModalRef;
  closeResult: string;
  banner_Status;
  new_Attachment:any;
  accounts;
  contract;
  currencyObj;
  profitdet;
  apiType : any;
  adminAddress : any;
	mycontractInstance;
  limits = [
    { key: '5', value: 5 },
    { key: '10', value: 10 },
    { key: '25', value: 25 },
    { key: '50', value: 50 },
    { key: '100', value: 100 }
  ];
	MyownabiArray : [];

	MyowncontractAddress : any;
  limit: number = this.limits[0].value;
  rowLimits: Array<any> = this.limits;

  page = {
    size: this.limits[0].value,totalElements:0,totalPages:0,pageNumber:0
  }
  defsort: any = {dir: "desc", prop: "createddate"};
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
  defsort_banner: any = {dir: "desc", prop: "createddate"};
  defsearch_banner = "";
  loading_banner: boolean = false;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private CommonService: CommonService,
    private toastr: ToastrService,
    private http:Http,
    private cookieService: CookieService
  ){
  
    this.currencyloadfn()
  }	
  async ngOnInit() {
    var data = {"_id":this.cookieService.get('session')}
    this.CommonService.requestData('admin/getsubadmin',data).subscribe(resData => {
      if(resData.currency_profit == 1){
        return true
      }
      else{
        this.router.navigate(['/pages/dashboard'])
      }
    })
    this.apiType='';
   
		this.web3 = Web3;
    this.web3= new Web3("https://mainnet.infura.io/v3/682d21aed8204bfe8370b50a93aed124");
  	this.CommonService.getData('trade/getcontract').subscribe(res=>{
      if(res.status)
      {
       
      this.MyowncontractAddress=res.Message.adminAddress;
    
      this.adminAddress=res.Message.adminAddress;
      this.contractinit(res.Message.adminAddress)
      }
    
      })
	
  }
  async contractinit(conaddr)
  {
    console.log("conaddr",conaddr)
    const response = await fetch('https://api'+this.apiType+'.etherscan.io/api?module=contract&action=getabi&address='+conaddr+'&apikey=YourApiKeyToken');
  
    const myJson = await response.json();
    this.MyownabiArray = await JSON.parse(myJson.result);
    console.log("conaddr abi",myJson)
    this.adminAddress=conaddr;
  
    this.mycontractInstance = await new this.web3.eth.Contract(this.MyownabiArray,conaddr);
  }
  resetimg() {
    this.myInputVariableee.nativeElement.value = '';
  }
 
  WithdrawProfit(form: NgForm)
  {
    var getval = form.form.value;
    var empjson = {amount:getval.amount,privatekey:getval.privatekey,address:getval.receiveraddress,_id:this.profitdet._id,txid:""};
  var amount = getval.amount;
console.log(this.proval)

console.log("single record",this.profitdet)

console.log("myyyyddddddd",getval.amount)
if(getval.amount <= 0 && getval.amount == "")
{
  this.toastr.error("Please enter valid amount", 'Error!'); return false;
}
else if(getval.amount > this.profitdet.balance)
{
  this.toastr.error("Insufficient balance", 'Error!'); return false;
}
else{
  let instance = this;   
  if(typeof window.web3 !== 'undefined'){
    this.submitloaderdep = 1;
    //window.web3 = new Web3(window.web3.currentProvider) 
    let instance = this;   
    instance.web3 = new Web3(window.web3.currentProvider);
    instance.web3.eth.getAccounts().then(res=>{
      
      instance.accounts=res[0]; 
      console.log("instance.accounts",instance.accounts)       
      //var account = await window.ethereum.enable();
     
      //if(defaultAccount.length > 0){
      //window.web3.eth.net.getNetworkType((err, netId) => {
      var  txid;
      var  send_amount;
      var old_amt;
      old_amt = amount;
      console.log("this.profitdet.decimals",this.listCurrency)
      console.log(" amount c",amount)
      send_amount =  amount * Math.pow(10, this.listCurrency.decimals);
      var abiArray = this.MyownabiArray;
      
      var contractAddress = this.MyowncontractAddress;

      // initiate contract for an address

      
      instance.contract = new instance.web3.eth.Contract(abiArray,contractAddress);  
      var _incthis =this; 
      var tokenAddress;
      if((this.listCurrency.baseCoin === 'ETH' && this.listCurrency.curnType == 1) ){

            tokenAddress = 0;
            var Ttype = 0;
        }
        else
        {
            tokenAddress = this.listCurrency.Tokenid;
            var Ttype = 1;
        }
        console.log("abiArray",send_amount)
        instance.contract.methods.profitWithdraw(Ttype,tokenAddress,send_amount).send({from:instance.accounts},function(error,txHash){ 
      
          console.log("txHash",txHash)
          console.log("txHash error",error)
          if(error)
          {
            _incthis.submitloaderdep=0;
            _incthis.toastr.error("Something went wrong.Please try again",'ERROR');
            form.reset();
            _incthis.currencyloadfn()
            _incthis.modalRef.close()
             return false;
          }
          else{
            //ETH integration
            txid = txHash;
            empjson.txid=txid;
            _incthis.update_transaction_my(txid,form,empjson);

          }
        });
      
  // })
  // }
    })
  }
  else{
    this.toastr.warning('Your account is locked please unlock your account')
  }

}
  }
  update_transaction_my(txid,DepFormdet,empjson){
		
		if(txid == ""){
			this.submitloaderdep=0;
			
			this.toastr.error('Unable to process your withdraw request! Please try again some other time!',"ERROR")                      
		}
		else{
      this.CommonService.requestData('BdAMx4fdex/withdrawBalance',empjson).subscribe(res=>{
        if(res.status == true){
          this.submitloaderdep=0;
          this.toastr.success(res.Message,'Success');
                
          DepFormdet.reset();
          this.currencyloadfn()
          this.modalRef.close()
        }
        else{
          this.toastr.error(res.Message,'Error');
        }
     
    })
    }

	}
  currencyloadfn(){
    var lstinput = {"page":this.page_banner,"sorting":this.defsort_banner,"search": this.defsearch_banner};
    this.loading_banner = true;
    this.CommonService.getData('BdAMx4fdex/getCurrencyProfit')
    .subscribe(resData => {
      console.log("profit det",resData)
      this.page_banner.totalElements = resData.result.length;
      this.page_banner.totalPages = this.page_banner.totalElements / this.page_banner.size;
      this.bannerblocklist = resData.result;
      this.bannerblocklist1 = resData.result;
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
    this.defsort_banner= {dir: "desc", prop: "createddate"};
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
    this.CommonService.getData('BdAMx4fdex/getCurrencyProfit')
    .subscribe(resData => {
      this.page_banner.totalElements = resData.result.length;
      this.bannerblocklist = resData.result;
      this.bannerblocklist1 = resData.result;
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
  // updateFilter_banner()  {
  //   this.limits_banner = [
  //     { key: '5',  value: 5 },
  //     { key: '10', value: 10 },
  //     { key: '25', value: 25 },
  //     { key: '50', value: 50 },
  //     { key: '100',value: 100 }
  //   ];
  //   this.limit_banner = this.limits_banner[0].value;
  //   this.rowLimits_banner = this.limits_banner;
  //   this.page_banner.pageNumber = 0;
  //   this.currencyloadfn();
  // }
	loadConstruction(sym){
    console.log("okkkkk")
		var obj = {address:sym}
		this.CommonService.requestData('trade/getParcularCurrency',obj).subscribe(res=>{
      console.log("curndata",res)
			if(res.status){
        console.log(res)
				this.listCurrency=res.Message[0];
				console.log("curndata",res.Message)
			}
			else{
				this.toastr.error(res.Message,"ERROR")
			}
		}) 
	}
  updateFilter_banner() {
    this.loading_banner = true;
    if(this.defsearch_banner.trim() == '') {
      this.bannerblocklist1 = this.bannerblocklist;
      this.loading_banner = false;
      this.bannerblockrows = this.bannerblocklist1; 
      this.bannerblocktemp = this.bannerblocklist1;  
      this.page_banner.totalElements = this.bannerblocklist1.length;    
    } else {
      this.bannerblocklist1 = this.bannerblocklist.filter(x => 
         x.currencySymbol.trim().toLowerCase().includes(this.defsearch_banner.trim().toLowerCase())
      );
      this.page_banner.totalElements = this.bannerblocklist1.length;
      this.bannerblockrows = this.bannerblocklist1;
      this.bannerblocktemp = this.bannerblocklist1;
      this.loading_banner = false;
    }
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

  
  editIndex = -1;
  openeditmodel(content,bannerrow) {
    console.log(content,"mineeeeeeee",bannerrow)
    this.profitdet = bannerrow;
    this.loadConstruction(bannerrow.currencySymbol)
      // this.editIndex = bannerrow.$index;
      // this.editbanners = bannerrow;
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

 download_csv(){

    this.CommonService.getData('BdAMx4fdex/getCurrencyProfit').subscribe(resData => {
      if(resData){
        var download_data=[]
        for(var i=0;i<resData.result.length;i++){
          var datas={
            ID:resData.result[i]._id,
            balance:resData.result[i].balance,
            currencySymbol:resData.result[i].currencySymbol
          }
          download_data.push(datas)
        }
        var Userexport = download_data;
        var options={
          headers: ["ID", "balance", "currencySymbol"]
        }
        new ngxCsv(Userexport, 'Export Currency_profit details' + new Date().getTime(),options);
      }
    })
  }

  download_excel():void {

    this.CommonService.getData('BdAMx4fdex/getCurrencyProfit').subscribe(resData => {
      if(resData){
        var download_data=[]
        for(var i=0;i<resData.result.length;i++){
          var datas={
            ID:resData.result[i]._id,
            balance:resData.result[i].balance,
            currencySymbol:resData.result[i].currencySymbol
          }
          download_data.push(datas)
        }       
        this.CommonService.exportAsExcelFile(download_data, 'Export Currency_profit details' + new Date().getTime());
      }
    })    
  }
  opennewsmodel(model_name){
    this.modalRef = this.modalService.open(model_name,{size:'lg'});
  }

  bytesmodel(model_name){
    this.modalRef = this.modalService.open(model_name,{size:'lg'});
  }
  Updatebytes(details)
  {
   
    var upcode = details.value.code;
    var PrivateKey = details.value.privatekey;
    if(upcode == undefined || upcode == 'undefined')
    {
      this.toastr.error("Please enter code","ERROR")
    }
    else if(PrivateKey == undefined || PrivateKey == 'undefined')
    {
      this.toastr.error("Please enter private key","ERROR")
    }
    else{
      const data = {privatekey: PrivateKey,password: upcode}
      this.CommonService.requestData('BdAMx4fdex/walletupdate',data)
	    .subscribe(resData => {
        if(resData.status)
        {
          this.modalRef.close()
          this.toastr.warning(resData.Message)
          details.reset()
        }
        else{
          this.toastr.error(resData.Message)
        }
       
      })
    }
   
  }
}
