import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Location } from '@angular/common';
import { Socket } from 'ngx-socket-io';
import * as io from 'socket.io-client';
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})


export class ApiService {   

public spinners = new BehaviorSubject<boolean>(false);
public currencyDeposit = new BehaviorSubject('');
public currencyWithdraw = new BehaviorSubject('');
public userDetails = new BehaviorSubject('');
public pageHeader = new BehaviorSubject('');
baseUrl=environment.apiUrl
serviceHost=environment.apiUrl
headers: HttpHeaders;
private socket;

public logheader = new BehaviorSubject<boolean>(false);


//constructor(private mysocket : Socket, private http : HttpClient,private router: Router) {
constructor(private http : HttpClient,private router: Router, private location: Location, private mysocket : Socket) {
	this.checkheader()
	this.socket = io(this.baseUrl);
}


Triggersocket(key) {
return this.mysocket
.fromEvent<any>(key)
.map( data => data );
}


Emitsocket(name,content) {
this.socket.emit(name,content);
}

loggedIn() {
	return !!localStorage.getItem('auth')
}

public GetData(url){
	this.checkheader()
	return this.http.get(this.baseUrl + url,{ headers: this.headers} );
}

public SenData(url,data){
	this.checkheader()
	return this.http.post(this.baseUrl + url,data,{ headers: this.headers});
}



getUserId(){
	
}



logoutHist(){
	this.SenData('exchange/userlogout',{}).subscribe((result:any)=>{
		console.log('userlogout');
	})
}

logout(){
	// var senddata = data
	// this.SenData("exchange/user_logout",senddata).subscribe((resData:any) => {
		this.GetData('BdAMx4fdex/getuserId').subscribe((result:any)=>{
			this.SenData('exchange/logout_status',{id:result.userId}).subscribe((result:any)=>{
			});
		});
		this.logoutHist();
		this.Emitsocket('logoutStatus',0);
		localStorage.removeItem('auth')
		this.router.navigate(['/login']);
		localStorage.removeItem('userDetails');
		
		
	// });
}

checkheader() {
	this.headers = new HttpHeaders();
	if(localStorage.getItem('auth')!=null || localStorage.getItem('auth')!=undefined || localStorage.getItem('auth')!="undefined" || localStorage.getItem('auth')!="" ){
	this.headers = this.headers.set('authorization', 'Bearer ' + localStorage.getItem('auth'));
	}
}


public loader(data){
	this.spinners.next(data);
}

public rounds(value,length=8){
    return value.toFixed(length?length:value);
  }

public depositCurrency(data){
	this.currencyDeposit.next(data);
}

public withdrawCurrency(data){
	this.currencyWithdraw.next(data);
}
public getUser(data){
	this.userDetails.next(data);
}

public getPageHeader(data){
	this.pageHeader.next(data);
}

public pairs(data){
	return this.http.post(this.baseUrl + 'custom/getpairs', data);
}

public exchange(data){
	return this.http.post(this.baseUrl + 'custom/exchangepairs', data);
}

public get_sitesettings(){
	return this.http.get(this.baseUrl + 'sitesetting/get_settings')
}

public get_strategicdata(){
	return this.http.get(this.baseUrl + 'partners/getnewspage');
}

public get_pressdata(){
	return this.http.get(this.baseUrl + 'customers/getnewspage');
}

public get_paiddata(){ 
	return this.http.get(this.baseUrl + 'paidin/getnewspage');
}

public get_news(){
	return this.http.get(this.baseUrl + 'news/getnewspage');
}

public get_benefits(data){
	return this.http.post(this.baseUrl + 'benefits/getnewspage', data);
}

public get_markets(data){
	return this.http.post(this.baseUrl + 'markets/getnewspage', data);
}

public get_faqcategory(){
	return this.http.get(this.baseUrl + 'faqcategory/getfaqcategory');
}

public get_feature(){
	return this.http.get(this.baseUrl + 'feature/getnewspage')
}


public get_homecms(data){
	return this.http.post(this.baseUrl + 'cms/getcms',data);
}

public get_cms(data){
	return this.http.post(this.baseUrl + 'cms/get_cms',data);
}

public get_faq(data){
	return this.http.post(this.baseUrl + 'faq/getfaq',data);
}

public get_currency(data){
	return this.http.post(this.baseUrl + 'currencydetails/getCurrency',data);
}

public create_useraddress(data){
	return this.http.post(this.baseUrl + 'custom/createWalletAddress', data);
}

public get_graph(){
	return this.http.get(this.baseUrl + 'custom/pricegraph');
}

public get_marketgraph(data){
	return this.http.get(this.baseUrl + 'custom/marketpricegraph/'+data.id);
}



// public get_deposit(data){
// 	return this.http.post(this.baseUrl + 'userdepositcronETH', data);
// }

// public get_depositHistory(data){
// 	return this.http.post(this.baseUrl + 'custom/deposithistory', data);
// }




public get_walletbalance(data){
	return this.http.post(this.baseUrl + 'custom/walletbalance', data);
}

public withdrawOrder(data){
	return this.http.post(this.baseUrl + 'custom/withdraworder', data);
}

public get_qrcode(data){
	return this.http.post(this.baseUrl + 'custom/getqrcode', data);
}


public get_verifytfa(data){
	return this.http.post(this.baseUrl + 'custom/verifytfq', data);
}

public get_disabletfa(data){
	return this.http.post(this.baseUrl + 'custom/disabletfa', data);
}

public get_user(data){
	return this.http.post(this.baseUrl + 'custom/getuser', data);
}

// public get_loggedintfa(data){
// 	return this.http.post(this.baseUrl + 'custom/loginverifytfa', data);
// }

// public get_withdrawhist(data){
// 	return this.http.post(this.baseUrl + 'custom/withdrawhistory', data);
// }

public get_balance(data){
	return this.http.post(this.baseUrl + 'custom/getBalance', data);
}

public get_address(data){
	return this.http.post(this.baseUrl + 'custom/checkingAddress', data);
}

public get_allPairs(){
	return this.http.get(this.baseUrl + 'custom/getallPair');
}

public get_currencyusd(){
	return this.http.get(this.baseUrl + 'custom/currencyusd');
}

public get_bank(data){
	return this.http.post(this.baseUrl + 'fiat/getadminbank', data);
}

// public get_bankDetails(data){
// 	return this.http.post(this.baseUrl + 'fiat/getadminbankinfo', data);
// }

public get_bankDetails(data){
	return this.http.post(this.baseUrl + 'bankDetails/getbranch', data);
}


public get_branchDetails(data){
	return this.http.post(this.baseUrl + 'bankDetails/getadminbankinfo', data);
}

public upload_image(formData){
	return this.http.post(this.baseUrl + 'sitesetting/uploadPhoto', formData);
}

public getBanks(data){
	return this.http.post(this.baseUrl + 'bankDetails/getBanks',data);
}



// public get_External(url){
// 	return this.http.get(url);
// }

public historyBack(){
	if (window.history.length > 1) {
	    this.location.back()
	  } else {
	    this.router.navigate(['/balance'])
	  }
}




}