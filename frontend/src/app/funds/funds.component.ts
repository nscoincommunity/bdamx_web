import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Web3 from 'web3';
declare let window;
import TrezorConnect from 'trezor-connect';
import Tx from 'ethereumjs-tx';
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';
import { ClipboardService } from 'ngx-clipboard';
import Transport from '@ledgerhq/hw-transport-u2f';
import AppEth from '@ledgerhq/hw-app-eth';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'

let network = environment.EOS_Details
declare const Buffer;
ScatterJS.plugins( new ScatterEOS() );


@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

	localaddr;
	listFunds;
	allCurrency;
	listCurrency:any;
	Mywalbal;
	withcurnid;
	MyDBbal;
	MyDBhold;
	Mycurn;
	filterValue;
	abovezero;
	Basecoin;
	submitloaderdep=0;
	submitloader=0;
	depositForm: FormGroup;
	withdrawForm: FormGroup;
	dynamicUrl = environment.Ether_details
	//dynamicUrl = "https://api.etherscan.io";
	dynamicinfuraUrl = environment.Ether_infuradetails
	//dynamicinfuraUrl = "https://infura.io/v3/682d21aed8204bfe8370b50a93aed124";
	roundValue;
	gasLimit=400000;
	median=10;
	MyowncontractAddress;
	scatteracc;
	adminAddress;
	MyownabiArray;
	mycontractInstance;
	web3;
	depcurnid;
	curCurrency;
	curtask;
	fees;
	accounts;
	contract;
	captcha='';
	submitted;
	withamount;
	feeamt;
	receiveamt;
	response;
	recaptcha='';
	originaladdress : any;
	exchange;
	img_qr='';
	minWithdrawAmt;
	maxWithdrawAmt;
	query=[];
	cmsContent = {'deposit':'','withdraw':''};
	showWithdraw = false;
	showDeposit = false;
	Mycurnsss='';
	tabChanged =false;
	asc = 'asc';
	type;
	showSorting = false;


  constructor(
  	private apiService: ApiService,
  	private toastr: ToastrService,
  	private formBuilder: FormBuilder,
  	private _clipboardService: ClipboardService,
  	private router: Router) { 
  	
  	this.localaddr = localStorage.getItem("address");
  	this.Basecoin=localStorage.getItem("Basecoin");
  	this.originaladdress=localStorage.getItem("original_address");
  		this.web3 = Web3;
  		this.img_qr='https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=' + this.originaladdress + '&choe=UTF-8&chld=L';
	}

  ngOnInit() {
  	if(!this.localaddr){
  		this.router.navigateByUrl('/');
  		this.toastr.error('Please Login to your Wallet');
  	}
  	this.Mycurn=localStorage.getItem("Basecoin");
  	this.apiService.loader(true);
  	this.getFunds(this.localaddr);
  	this.web3= new Web3(this.dynamicinfuraUrl);

  	this.depositForm = this.formBuilder.group({
		depamount: ['', [Validators.required,Validators.pattern(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/)]],
		});
		this.withdrawForm = this.formBuilder.group({
			withamount: ['', [Validators.required,Validators.pattern(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/)]],
			privatekey: ['', [Validators.required]],
			captcha: ['',[Validators.required]]
		});

		
	this.apiService.get_cms_home().subscribe((resData:any)=>{
      resData.data.map(items=>{
		   if(items.page_name === "eth_deposit" && this.Basecoin === 'ETH'){
		    this.cmsContent.deposit = items['page_content'];
		  }
		  if(items.page_name === "eos_deposit" && this.Basecoin === 'EOS'){
		    this.cmsContent.deposit = items['page_content'];
		  }
		  if(items.page_name === "btc_withdraw" && this.Basecoin === 'BTC'){
		    this.cmsContent.withdraw = items['page_content'];
		  }
		  if(items.page_name === "eth_withdraw" && this.Basecoin === 'ETH'){
		    this.cmsContent.withdraw = items['page_content'];
		  }
		  if(items.page_name === "eos_withdraw" && this.Basecoin === 'EOS'){
		    this.cmsContent.withdraw = items['page_content'];
		  }
		  if(items.page_name === 'banner_section4'){
		    this.cmsContent['banner_section4'] = items['page_content']
		  }
      })
      
    })

		this.apiService.get_contract().subscribe((res:any)=>{
		if(res.status){
			this.MyowncontractAddress=res.contractDetails[0].adminAddress;
			this.scatteracc=res.contractDetails[0].Scatteradminacc;
			this.adminAddress=res.contractDetails[0].adminAddress;
			this.contractinit(res.contractDetails[0].adminAddress)
		  }
		});
		if(typeof window.web3 !== 'undefined'){
	        window.web3 = new Web3(window.web3.currentProvider)    
			window.web3.eth.net.getNetworkType((err, netId) => {
	            
	           
	          });
		}
  }

  sorting(property){
    this.asc = this.asc === 'asc' ? 'desc' : 'asc';
    this.type = property;
  }

  withdraw(){
  	this.withdrawForm.reset();
	var defaultCurDetails = this.listCurrency.filter(items=>{return items.currencySymbol === localStorage.getItem('Basecoin')});
		this.maxWithdrawAmt = defaultCurDetails[0].maxwithamt;
		this.minWithdrawAmt = defaultCurDetails[0].minwithamt;
		this.feeamt = defaultCurDetails[0].withdrawfee;
		this.receiveamt = 0.00000000;
		if(this.Mycurn === 'BTC'){
			this.changetab('withdraw-tab', defaultCurDetails[0],this.listCurrency.indexOf(defaultCurDetails[0]));
		}
		else{
			if(!this.tabChanged){
				if(this.Mycurn === defaultCurDetails[0].baseCoin && defaultCurDetails[0].status){
					this.showWithdraw = true;
				}
				this.changetab('withdraw-tab', defaultCurDetails[0],this.listCurrency.indexOf(defaultCurDetails[0]));
			}
		}
  }

  deposit(){
  	this.depositForm.reset();
  	var defaultCurDetails = this.listCurrency.filter(items=>{return items.currencySymbol === localStorage.getItem('Basecoin')});
  	this.Mycurnsss = localStorage.getItem('Basecoin');
		if(this.Mycurn === 'BTC'){
			this.changetab('deposit-tab', defaultCurDetails[0],this.listCurrency.indexOf(defaultCurDetails[0]));
		}
		else{
			if(!this.tabChanged){
				if(this.Mycurnsss === defaultCurDetails[0].baseCoin && defaultCurDetails[0].status){
					this.showDeposit = true;
				}
				this.changetab('deposit-tab', defaultCurDetails[0],this.listCurrency.indexOf(defaultCurDetails[0]));
			}
		}
  }

  sendMaxAmount(){
  	this.depositForm.controls["depamount"].setValue(
        parseFloat(this.Mywalbal).toFixed(8)
      );
  }

  sendMaxWithAmount(){
  	 this.withdrawForm.controls["withamount"].setValue(
        parseFloat(this.MyDBbal).toFixed(8)
      );
  }

  changetab(tabname,data,ival){
  	if(data.status){
  		this.showDeposit = true;
  		this.showWithdraw = true;
  	}else{
  		this.showDeposit = false;
  		this.showWithdraw = false;
  	}
  	this.tabChanged = true;
	var tabn=document.getElementById(tabname);
	tabn.click(); 
	this.onChangedep(ival)  
	this.onChangewith(ival)
	this.exchange = ival
	this.Mywalbal=data.balance + data.hold;
	this.MyDBbal=data.balance;
	this.MyDBhold=data.hold;
	this.Mycurn=data.currencySymbol;
	this.minWithdrawAmt = data.minwithamt;
	this.maxWithdrawAmt = data.maxwithamt;
	}

  async contractinit(conaddr){ 
	  if(localStorage.getItem('Basecoin') == "ETH")
	  {
	  const response = await fetch(this.dynamicUrl +'/api?module=contract&action=getabi&address='+conaddr+'&apikey=YourApiKeyToken');
	  const myJson = await response.json();
	  this.MyownabiArray = await JSON.parse(myJson.result);
	  this.adminAddress = conaddr;
	  this.mycontractInstance = await new this.web3.eth.Contract(this.MyownabiArray,conaddr);
	}
	}
  get f() { return this.depositForm.controls; }
  get f1() { return this.withdrawForm.controls; }

  roundsof(n,decimal) {
		if(n>0){
			this.roundValue = (+n).toFixed(decimal)
		}
		else{
			this.roundValue = 0;
		}
		return this.roundValue
	}

  getFunds(address){
   	this.apiService.get_funds({address:address}).subscribe((result:any)=>{
   		if(result.status){
   			this.apiService.loader(false);
			this.listCurrency = result.data;
			this.allCurrency = result.data;
			var Basecoin = localStorage.getItem("Basecoin");
			if(Basecoin == "EOS"){
				this.getAllBalanceEOS()
			}
			
			this.getBalance(0);
		}
		else{
			if(this.localaddr){
				this.toastr.error(result.Message,"ERROR")
			}
		}
  	})
  }

  getAllBalance() {
  	this.showSorting = false;
		var getresult = this.listCurrency;
		if(getresult.length>0){
			for (var i = 0; i < getresult.length; i++) {
				this.getBalance(i);
			}    
		}
	}

	getAllBalanceEOS() {
		var getresult = this.listCurrency;
		if(getresult.length>0){
			for (var i = 0; i < getresult.length; i++) {
				 if(getresult[i].baseCoin == "EOS"){
					this.getBalanceEOS(i);
					break;
				}    
			}
		}
	}

	async getBalance(task) {
		this.query[task]=true;
		this.query[0]=true;
		var getresult = this.listCurrency;
		var addr = localStorage.getItem("address");
		var Basecoin = localStorage.getItem("Basecoin");
		try{
			if(getresult[task]&&(getresult[task].currencySymbol=='ETH'||getresult[task].baseCoin=='ETH')){
				if(getresult[task].currencySymbol=='ETH'){
					const response = await fetch(this.dynamicUrl +'/api?module=account&action=balance&address='+addr+'&tag=latest&apikey=YourApiKeyToken');
					const myJson = await response.json();
					this.query[task] = true;
					// var balance1 = await JSON.parse(myJson.result);
					var balance1 = myJson.result;
				}
				else{
					const response = await fetch(this.dynamicUrl +'/api?module=account&action=tokenbalance&contractaddress='+getresult[task].contractAddress+'&address='+addr+'&tag=latest&apikey=YourApiKeyToken');
					const myJson = await response.json();
					this.query[task] = true;
					// var balance1 = await JSON.parse(myJson.result);
					var balance1 = myJson.result;
				}
				if(balance1>0){
					var balcheck = balance1 / Math.pow(10, getresult[task].decimals);
					
					getresult[task].walletBalance = balcheck.toString();
				}
				else{
					getresult[task].walletBalance = '0';            
				}
				this.Mywalbal = getresult[task].walletBalance;
				this.MyDBbal = getresult[task].balance;
				this.MyDBhold = getresult[task].hold;
				this.Mycurn = getresult[task].currencySymbol;
				this.listCurrency= getresult;
				this.allCurrency=getresult
				this.filterList();
			}
			else if(getresult[task]&&(getresult[task].currencySymbol=='EOS'||getresult[task].baseCoin=='EOS')){
				this.getBalanceEOS(task)
			}
		}
		catch(e){
			console.log(e,'error')
			getresult[task].walletBalance = 0;
			this.allCurrency=getresult;
			this.filterList();
		}
	}

	async getBalanceEOS(task){
		var getresult = this.listCurrency;
		var addr = localStorage.getItem("address");
		var Basecoin = localStorage.getItem("Basecoin");
		try{
			if(getresult[task]&&(getresult[task].currencySymbol=='EOS'||getresult[task].baseCoin=='EOS'))
			{
				ScatterJS.scatter.connect('Bdamx').then(connected => {
			    // If the user does not have Scatter or it is Locked or Closed this will return false;
				if(!connected)
				{
					
					return false;
				} 
			    const scatter = ScatterJS.scatter;
			    // Now we need to get an identity from the user.
			    // We're also going to require an account that is connected to the network we're using.
			    const requiredFields = { accounts:[network] };
			    scatter.getIdentity(requiredFields).then(() => {
			        // Always use the accounts you got back from Scatter. Never hardcode them even if you are prompting
			        // the user for their account name beforehand. They could still give you a different account.
			        const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
						// console.log("okkkkk")
						const eosOptions = { expireInSeconds:60 };

						// Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
					
						const eos = scatter.eos(network, Eos, eosOptions);
						console.log(getresult[task].currencySymbol, 'currencySymbol');
						eos.getCurrencyBalance('eosio.token', account.name,getresult[task].currencySymbol).then(balanceget => {
							console.log(balanceget,'balanceget');
							this.query[task] = true;
							balanceget = balanceget[0];
							if(balanceget)
							{
							balanceget = balanceget.split(" ");
							var balance1 = parseFloat(balanceget[0]);
						}
						else{
							var balance1 = 0;
						}
						
							// console.log("first if goottt")
							if(balance1>0)
							{
								
								var balcheck = balance1;
								
								getresult[task].walletBalance = balcheck.toString();
							}
							else
							{
							
								getresult[task].walletBalance = '0';            
							}
						
							this.Mywalbal = getresult[task].walletBalance;
							this.MyDBbal = getresult[task].balance;
							this.MyDBhold = getresult[task].hold;
							this.Mycurn = getresult[task].currencySymbol;
							// console.log("this.Mycurn",this.Mycurn)
							this.listCurrency= getresult;
							this.allCurrency=getresult
							this.filterList();
						})
						})
					}) 
			}
			else{
				console.log("nodata")
			}
			
			
		}
		catch(e){
			getresult[task].walletBalance = 0;
			this.listCurrency= getresult;
			this.allCurrency=getresult;
			this.filterList();
		}
	}

	filterList() {
		if(typeof this.filterValue=='string'){
			var filterValue = this.filterValue.toLowerCase();
		}
		else{
			var filterValue = '';
		}
		var abovezero = this.abovezero;
		var allCurrency = this.allCurrency;
		var pushedarrays = [];
		var indexVal = 0;
		for (var i = 0; i < allCurrency.length; i++) {
			if(abovezero === 0 || ( abovezero !== 0 && ( allCurrency[i].balance > 0 || allCurrency[i].walletBalance > 0 ))){
				var symbol = allCurrency[i].currencySymbol.toLowerCase();
				var name = allCurrency[i].currencyName.toLowerCase();
				if (filterValue === '' || symbol.indexOf(filterValue) > -1 || name.indexOf(filterValue) > -1){
					pushedarrays[indexVal] = allCurrency[i];
					indexVal++;
				}
			}
		}
		// this.listCurrency=pushedarrays;
	}

	onChangedep(value){
	
		this.depcurnid = value;
		this.getBalance(value)
	}

	isNumber(evt) { 
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if (charCode != 46 && charCode > 31 
		  && (charCode < 48 || charCode > 57))
		   return false;
		return true;
	}

	copyText(val: string) {
		this._clipboardService.copyFromContent(this.originaladdress)
		this.toastr.success("Address Copied", 'SUCCESS');
	}

	addbal(){
			for(var i=0;i<this.listCurrency.length;i++){
				if(this.listCurrency[i].baseCoin == this.Basecoin){
					this.onChangewith(i)
					this.onChangedep(i)  
					this.exchange = i
					this.Mywalbal=this.listCurrency[i].balance + this.listCurrency[i].hold;
					this.MyDBbal=this.listCurrency[i].balance;
					this.MyDBhold=this.listCurrency[i].hold;
					this.Mycurn=this.listCurrency[i].currencySymbol;		
					break;
				}
			}
	}	


	async depositsite(datas,DepFormdet){
		if(typeof(this.depcurnid) == undefined || typeof this.depcurnid == "undefined"){
			this.toastr.error("Please select currency",'ERROR')
		}
		else if(datas.depamount.status == "INVALID"){
			this.toastr.error("Please enter valid amount",'ERROR')
		}
		else{
			var getresult = this.listCurrency;
			var task = this.depcurnid;
			this.curCurrency=getresult[task];
			this.curtask=task;
			this.submitloaderdep=1;
			var localaddress = localStorage.getItem("address");
			var amount = datas.depamount.value;
			if(!isNaN(amount)&&amount>0){

				if(this.curCurrency.baseCoin === 'ETH'){

				var gasLimit;
				gasLimit = this.gasLimit;
				var median = this.median;
				this.fees = gasLimit * median / 1000000000;
				var toAddress = this.adminAddress;
				var walletBalance = this.curCurrency.walletBalance;
				if(this.curCurrency.baseCoin === 'ETH' && this.curCurrency.curnType == 1){
					var total = parseFloat(amount) + parseFloat(this.fees);
				}
				else{
					var total = parseFloat(amount);
				}
				
				if(total > walletBalance){
					this.submitloaderdep=0;
					this.toastr.error("Insufficient balance",'ERROR')     
				}
				else{
					var addresstype = localStorage.getItem("addresstype");
					var validAdress = this.web3.utils.isAddress(toAddress);
					if(validAdress){
						var addresstype = localStorage.getItem("addresstype");
						if(addresstype == "metamask"){
							let instance = this;   
							if(typeof window.web3 !== 'undefined'){
								//window.web3 = new Web3(window.web3.currentProvider) 
								let instance = this;   
								instance.web3 = new Web3(window.web3.currentProvider);
								instance.web3.eth.getAccounts().then(res=>{
									
									instance.accounts=res[0];        
									//var account = await window.ethereum.enable();
									const defaultAccount = res[0]

									
									//if(defaultAccount.length > 0){
									window.web3.eth.net.getNetworkType((err, netId) => {
										if(netId == 1)
										{
											this.toastr.error("Please connect metamask to main ethereum network","ERROR");
											return false;
										
										}
										else{
									var  txid;
									var  send_amount;
									var old_amt;
									old_amt = amount;
									send_amount =  amount * Math.pow(10, this.curCurrency.decimals);
									var abiArray = this.MyownabiArray;
									var contractAddress = this.MyowncontractAddress;
									instance.contract = new instance.web3.eth.Contract(abiArray,contractAddress);  
									var _incthis =this; 
									if((this.curCurrency.baseCoin === 'ETH' && this.curCurrency.curnType == 1) ){
										instance.contract.methods.deposit().send({from:instance.accounts,value:send_amount,gas: 600000},function(error,txHash){ 
											
											if(error)
											{
												_incthis.submitloaderdep=0;
												_incthis.toastr.error("Something went wrong.Please try again",'ERROR'); return false;
											}
											else{
												//ETH integration
												txid = txHash;
												_incthis.update_transaction_my(txid,DepFormdet);

											}
										});
									}
									else{
										//Token integration
										this.Metamasktoken(send_amount,res[0],old_amt,DepFormdet);
									}
								}
							})
							// }
								})
							}
							else{
								this.toastr.warning('Your account is locked please unlock your account')
							}
						}
						else{
							var nonce = await this.web3.eth.getTransactionCount(localaddress)
							var upnonce = await nonce;
							var value;

							value = amount * Math.pow(10, this.curCurrency.decimals);

							var gasPriceValue;
							gasPriceValue = median*1000000000;
							var rawTx = {
							nonce: "0x"+((parseFloat(upnonce)).toString(16)),
							gasPrice: "0x"+(parseFloat(gasPriceValue).toString(16)),
							gasLimit: "0x"+((parseFloat(gasLimit)).toString(16)),
							to: toAddress,
							value: "0x"+((parseFloat(value)).toString(16)),
							data: '',
							v:'0x03',
							r:'0x00',
							s:'0x00'
							};
							if(this.curCurrency.baseCoin === 'ETH' && this.curCurrency.curnType == 1){
								var abiArray = this.MyownabiArray;
								var contractAddress = this.MyowncontractAddress;
								rawTx.to = contractAddress;
								const contract = await new this.web3.eth.Contract(abiArray, contractAddress);
								rawTx.data = await contract.methods.deposit().encodeABI();
								rawTx.value = value;
							
							}

							else{
								const response = await fetch(this.dynamicUrl +'/api?module=contract&action=getabi&address='+this.curCurrency.contractAddress+'&apikey=YourApiKeyToken');
								const myJson = await response.json();
								var abiArray1 = await JSON.parse(myJson.result);
								var contractAddress1 = this.curCurrency.contractAddress;
								var MycontractAddress = this.MyowncontractAddress;
								var contract1 = await new this.web3.eth.Contract(abiArray1, contractAddress1, { from: localaddress });
								var empval;
								empval=0;

								rawTx.to = contractAddress1;
								rawTx.value = "0x"+((parseFloat(empval)).toString(16));
								rawTx.data = await contract1.methods.approve(MycontractAddress,"0x"+((parseFloat(value)).toString(16))).encodeABI();
							}
							
							await this.DynamicSignin(rawTx,value,upnonce,0,DepFormdet)
						}
					}
					else{
						this.submitloaderdep=0;
						this.toastr.error('Please enter valid destination ETH address!','ERROR')
					}
				}
			}
			else{
				//EOS deposit functionality

				var total = parseFloat(amount);
				if(total > walletBalance){
					this.submitloaderdep=0;
					this.toastr.error("Insufficient balance",'ERROR')     
				}
				else{
					this.ScatterDeposit(amount,DepFormdet);
				}
			}
			}
			else{
				this.submitloaderdep=0;
				this.toastr.error("Please enter valid amount!",'ERROR')
			}
		}
	}

	update_transaction_my(txid,DepFormdet){		
		if(txid == ""){
			this.submitloaderdep=0;
			this.toastr.error('Unable to process your deposit request! Please try again some other time!',"ERROR")                      
		}
		else{
			console.log('hhiii i m executed')
			this.toastr.success("Please wait until we process your deposit request","SUCCESS",{ progressBar: true });
			this.getbaltrans();
			this.submitloaderdep=0;
			DepFormdet.reset();
		}
	}

	async Metamasktoken(send_amount,getaccount,old_amt,DepFormdet){
		//send_amount - with decimal multiplication

		const response = await fetch(this.dynamicUrl +'/api?module=contract&action=getabi&address='+this.curCurrency.contractAddress+'&apikey=YourApiKeyToken');
		const myJson = await response.json();
		console.log(myJson,'myyysssonn')

		var abiArray1 = await JSON.parse(myJson.result);
		var contractAddress1 = this.curCurrency.contractAddress;
		var decimals = this.curCurrency.decimals;
		var currencySymbol = this.curCurrency.currencySymbol;
		var MycontractAddress = this.MyowncontractAddress;
		var localaddress = localStorage.getItem("address");
		var addr=getaccount;
		var myContractInstance = await new this.web3.eth.Contract(abiArray1, contractAddress1, { from: localaddress });
		
		
		send_amount = "0x"+((parseFloat(send_amount)).toString(16));

		
		myContractInstance.methods.approve(MycontractAddress,send_amount).send({value:0}).then(
		(result)=>{
			
			if (result.status == false) {
				this.submitloaderdep=0;
				this.toastr.error("Deposit Rejected.",'ERROR'); return false;
			}
			else{
				var txid=result.transactionHash;
				
				if(result){
					this.checkkk()
					this.waitReceipt(txid,contractAddress1,addr,old_amt,MycontractAddress,abiArray1,decimals,currencySymbol,getaccount,DepFormdet);
				}
				else{
					this.submitloaderdep=0;
					this.toastr.error('Deposit Failed.','ERROR');
				}
			}
		});
	}

	async getbaltrans(){
		var getresult = this.listCurrency;
		var details = await this.getBalance(this.curtask);
		this.curCurrency=getresult[this.curtask];
		
	}

	resolved(captchaResponse: string) {
    	this.captcha=captchaResponse;
  	}

  	onChangewith(value){
		this.withcurnid = value;
		this.getBalance(value)
		this.withcalc(this.withamount);
		this.minWithdrawAmt = this.listCurrency[this.withcurnid].minwithamt;
		this.maxWithdrawAmt = this.listCurrency[this.withcurnid].maxwithamt;
	}
	withcalc(withvalue){
	
		this.withamount = withvalue;
		if (this.withamount == "" || isNaN(this.withamount) || this.withamount <= 0) {
		
			this.feeamt = 0;
			this.receiveamt = 0;
			return false;
		  }
		  else if (this.withamount.length >= 20) {
			
			this.feeamt = 0;
			this.receiveamt = 0;
			return false;
		  }
		  else {
		var getresult = this.listCurrency;
		var task = this.withcurnid;
		this.curCurrency=getresult[task];
		var feetype;
		var fee;
		feetype = this.curCurrency.feetype;
		fee = this.curCurrency.withdrawfee;
		

		if(feetype == 1){
			this.feeamt = this.rounds(+this.withamount * fee/100);
		}
		else{
			this.feeamt = this.rounds(fee);
		}
		this.receiveamt = this.rounds(+this.withamount - this.feeamt);
	}
	}

	rounds(n) {
		var roundValue = (+n).toFixed(8)
		return roundValue
	  }

	  withdrawsite(datas,SwithdrawForm,type){

		if (this.captcha) {
			if(type != 'BTC'){
				if(typeof(this.withcurnid) == undefined || typeof this.withcurnid == "undefined"){
					this.toastr.error("Please select currency",'ERROR')
					grecaptcha.reset();
            		
				}
				else if(datas.withamount.status == "INVALID"){
					this.toastr.error("Please enter valid amount",'ERROR')
            		grecaptcha.reset();
				}
				else{
					
					var getresult = this.listCurrency;
					var task = this.withcurnid;
					this.curCurrency=getresult[task];
					console.log(this.curCurrency,'currentcyyyyy')
					var withamount = this.withamount;
					var withAccessKey = datas.privatekey.value;
					if(withamount != ""){
						if(!isNaN(withamount)){
							this.submitloader=1;
							var curnid = this.curCurrency._id;
							const addr = localStorage.getItem("address"); 
							var withdata = {
								useraddress:addr,
								withamount:withamount,
								withAccessKey:withAccessKey,
								withcurrency:curnid,
								status:'Pending',
								decimals:this.curCurrency.decimals,
								baseCoin:this.curCurrency.baseCoin,
								curnType:this.curCurrency.curnType,
								contractAddress:this.adminAddress,
								txid:''

							}
							this.apiService.withdraw_request(withdata).subscribe((getresult:any)=>{
								this.response=null;
								this.captcha = '';								
								if(getresult.status){
									//this.WithdrawSignin(addr,withamount,result,message);
									this.toastr.success(getresult.Message,'SUCCESS');
									SwithdrawForm.reset();
									this.getBalanceEOS(task)
									this.getBalance(task)
									this.submitloader=0;
								}
								else{
									grecaptcha.reset();
									this.toastr.error(getresult.Message,'ERROR');
									this.submitloader=0;
								}
							})
						}
						else{
						this.toastr.success("Please enter valid amount",'SUCCESS');
						this.submitloader=0;
						this.captcha = '';
						return false;
						}
					}
					else{
						this.toastr.error("Please enter valid amount",'ERROR');
						this.submitloader=0; 
						this.captcha='';   
						return false;
					}
				}
			}
			else if(type == 'BTC'){
				this.submitloader = 1;
				var req={
					"toAddress":datas.privatekey.value,
					"useraddress":this.originaladdress,
					"withamount":this.withamount,
					"type":'user'
				}
				this.apiService.btc_withdraw(req).subscribe((res:any)=>{
					this.submitloader = 0;
					this.response=null;
					this.captcha='';   
					if(res.status == true){
						this.toastr.success(res.Message,'SUCCESS');
						this.apiService.admin_getbalance({"address":this.originaladdress.toLowerCase()}).subscribe((ress:any)=>{
							this.Mywalbal=ress.amount + ress.hold;
							this.MyDBbal=ress.amount;
							this.MyDBhold=ress.hold;		  		
						})				
						SwithdrawForm.reset();
					}
					else{
						this.captcha = '';
						return false;
						this.toastr.error(res.Message,'ERROR');
					}
				}) 	
			}
		}

		else{
			this.toastr.error('Verify captcha to continue','ERROR')

		}
	}

		async DynamicSignin(rawTx,value,upnonce,Tokendepini,DepFormdet){
		try{
			rawTx.v='0x03';
			rawTx.r='0x00';
			rawTx.s='0x00';
			var addresstype = localStorage.getItem("addresstype");
			var tx;
		
			if(addresstype === 'trezor'){
				var txvalue = rawTx.value;
				
				if(rawTx.value!='0x0'||rawTx.value!='0x00'){
					
					rawTx.value = "0x"+((parseFloat(rawTx.value)).toString(16));
				}
				TrezorConnect.manifest({
					email: 'info@bdamcoin.com',
					appUrl: 'https://bdamx.net'
				});
				var getpath = localStorage.getItem("derivationPath");
				const signedTrezorResponse =  await TrezorConnect.ethereumSignTransaction({
					path: getpath,
					transaction: rawTx
				});
				rawTx.v = signedTrezorResponse.payload.v;
				rawTx.r = signedTrezorResponse.payload.r;
				rawTx.s = signedTrezorResponse.payload.s;
				tx = new Tx(rawTx);
			}
			else if(addresstype === 'ledger'){
				if(rawTx.value!='0x0'||rawTx.value!='0x00'){
					
					rawTx.value = "0x"+((parseFloat(rawTx.value)).toString(16));
				}
				const transport = await Transport.create();
				
				var ledgerEth = new AppEth(transport);
			
				var derivationPath = localStorage.getItem("derivationPath");
				
				const tx1 = new Tx(rawTx);
				
				const serializedTx = tx1.serialize().toString('hex')
				
				const sig = await ledgerEth.signTransaction(derivationPath, serializedTx);
				
				rawTx.v = '0x' + sig.v;
				rawTx.r = '0x' + sig.r;
				rawTx.s = '0x' + sig.s;
				tx = new Tx(rawTx);
			}
			else{

			}
			console.log(tx,'transactionhassssshhh');
			// return false;
			const serializedTx = tx.serialize();
			this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'),function(receipterr,receipt) {
				
				if(receipterr!=null&&receipterr!=false){
					this.submitloaderdep=0;
					
					this.toastr.error('Unable to process your deposit request! Please try again some other time!','ERROR')                      
				}
				else{
					if((this.curCurrency.baseCoin === 'ETH' && this.curCurrency.curnType == 1) || Tokendepini ==1 ){
						this.getbaltrans();
						this.submitloaderdep=0;
						DepFormdet.reset();
						this.toastr.success('Completed. Please wait until we process your deposit request','SUCCESS')
					}
					else{
						this.TokendepCon(rawTx,upnonce,value,DepFormdet);
					}
				}
			}.bind(this));
		}
		catch(e)
		{
			this.toastr.error(e,'ERROR')
		}
	}

	async TokendepCon(rawTx,upnonce,value,DepFormdet){
		var abiArray = this.MyownabiArray;
		var contractAddress = this.MyowncontractAddress;
		rawTx.to = contractAddress;
		var localaddress = localStorage.getItem("address");
		const contract = await new this.web3.eth.Contract((abiArray), contractAddress, { from: localaddress });
		var contractAddressnew = this.curCurrency.contractAddress;
		var localaddress = localStorage.getItem("address");

		var nonce = await this.web3.eth.getTransactionCount(localaddress,'pending')
		var upnonce = await nonce;
		/*   upnonce = upnonce + 1;*/
		var newval;
		newval = 0;
		
		rawTx.nonce = "0x"+((parseFloat(upnonce)).toString(16));
		var addresstype = localStorage.getItem("addresstype");
		if(addresstype === 'trezor'){
			rawTx.value = "0x"+((parseFloat(newval)).toString(16));
		}
		else{
			rawTx.value = 0;  
		}
		var TokenIds = this.curCurrency.TokenId;
		console.log(TokenIds, 'tokkennnnnnsidddsssss')
		
		rawTx.data = await contract.methods.tokenDeposit(localaddress,TokenIds,"0x"+((parseFloat(value)).toString(16))).encodeABI();
		
		this.DynamicSignin(rawTx,value,upnonce,1,DepFormdet);
	}

	ScatterDeposit(amount,DepFormdet)
	{
		
		// First we need to connect to the user's Scatter.
ScatterJS.scatter.connect('Bdamx').then(connected => {

    // If the user does not have Scatter or it is Locked or Closed this will return false;
	if(!connected)
	{
		this.toastr.error("Please connect/install scatter")
		return false;
	} 
	

    const scatter = ScatterJS.scatter;

    // Now we need to get an identity from the user.
    // We're also going to require an account that is connected to the network we're using.
    const requiredFields = { accounts:[network] };
    scatter.getIdentity(requiredFields).then(() => {

        // Always use the accounts you got back from Scatter. Never hardcode them even if you are prompting
        // the user for their account name beforehand. They could still give you a different account.
        const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');

        // You can pass in any additional options you want into the eosjs reference.
        const eosOptions = { expireInSeconds:60 };

		// Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
	
		const eos = scatter.eos(network, Eos, eosOptions);
		
	
		const transactionOptions = { authorization:[`${account.name}@${account.authority}`] };
		var getresult = this.listCurrency;
		var task = this.depcurnid;
		this.curCurrency=getresult[task];
		amount = +amount;
        eos.transfer(account.name, this.scatteracc, amount.toFixed(4)+' '+this.curCurrency.currencySymbol, 'Bdamx', transactionOptions).then(trx => {
            // That's it!
         this.updateEOStrans(amount,trx.transaction_id,account.name,DepFormdet)
        }).catch(error => {
			this.toastr.error("Something went wrong.Please try again")
        });

    }).catch(error => {
        // The user rejected this request, or doesn't have the appropriate requirements.
		this.toastr.error("You denied deposit request")
    });
});
	}

	async checkkk(){

	} 

	async waitReceipt(hash,contract_address,addr,old_amt,admin_contractaddress,abiarray,decimals,symbol,getaccount,DepFormdet){
		const response = await fetch(this.dynamicUrl +'/api?module=contract&action=getabi&address='+admin_contractaddress+'&apikey=YourApiKeyToken');
		const myJson = await response.json();
		var abi = await JSON.parse(myJson.result);
		var _ins = this
		this.web3.eth.getTransactionReceipt(hash, function (err, receipt) {
			if (err) {
				this.toastr.error(err,'ERROR');
			}
			if (receipt !== null) {
				if(receipt.status == '0x1'){
					var addr=getaccount;
					var tokenaddr = contract_address;
					var myContractInstance1 =  new _ins.web3.eth.Contract(abi, admin_contractaddress, { from: getaccount });
					var amt;
					amt = old_amt * Math.pow(10, decimals);
					console.log(_ins.curCurrency, 'typpppee')
					var TokenIdss = _ins.curCurrency.TokenId;
					console.log(TokenIdss)
					amt= "0x"+((parseFloat(amt)).toString(16));;
					myContractInstance1.methods.tokenDeposit(addr,TokenIdss,amt).send({value:0},function(err,result){ 
						if(err)
						{
						  _ins.submitloaderdep=0;
						  _ins.toastr.error("Something went wrong!",'ERROR'); return false;
						}
						else{
				              _ins.update_transaction_my(result,DepFormdet);
				          }
					});
				}
			} 
			else{
				
				window.setTimeout(function () {
				this.waitReceipt(hash,contract_address,addr,old_amt,admin_contractaddress,abiarray,decimals,symbol);
				}, 1000);
			}
		}); 
	}
	updateEOStrans(amount,txid,accountname,DepFormdet)
	{
		var localaddress = localStorage.getItem("address");
		if(txid == ""){

			this.submitloaderdep=0;
			
			this.toastr.error('Unable to process your deposit request! Please try again some other time!',"ERROR")     
			                
		}
		else{
			var eosPubliKey = localStorage.getItem('EOSPublicKey')
			var obj = { txid:txid,depamount:amount,user:localaddress,curncyid:this.curCurrency._id,depto:eosPubliKey}
			this.apiService.user_deposit(obj).subscribe((getresult:any)=>{
				if(getresult.status)
				{
			this.getbaltrans();
			this.submitloaderdep=0;
			DepFormdet.reset();
			this.toastr.success(getresult.Message,'SUCCESS')
				}
				else{
					
					this.submitloaderdep=0;
					
					this.toastr.success(getresult.Message,'ERROR')
				}
		}) 
		}
	}


}
