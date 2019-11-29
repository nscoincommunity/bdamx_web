import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment'
@Injectable({
    providedIn: 'root'
})


export class ApiService {   
public spinners = new BehaviorSubject<boolean>(false);
public loggedin = new BehaviorSubject<boolean>(false);
baseUrl=environment.apiUrl
serviceHost=environment.apiUrl
 
constructor(private http : HttpClient, private location: Location, private router: Router) {}

public get_pairs(){
    return this.http.get(this.baseUrl + '/trade/PairsGet');
}

public get_USDValues(){
	return this.http.get(this.baseUrl + '/getcurrency_usd');
}

public get_news(){
	return this.http.get(this.baseUrl + '/news/getnews');
}

public get_features(){
	return this.http.get(this.baseUrl + '/feature/getfaqlistcms');
}

public get_cms_home(){
	return this.http.get(this.baseUrl + '/cms/getcms_home');
}

public get_cms_fee(){
	return this.http.get(this.baseUrl + '/cms/getcms_fee');
}

public get_sitesettings(){
	return this.http.get(this.baseUrl + '/sitesetting/getsettings')
}

public get_cms(data){
	return this.http.post(this.baseUrl + '/cms/get_cms',data);
}

public loader(data){
	this.spinners.next(data);
}

public walletLogin(data){
	this.loggedin.next(data);
}

public get_news_page(){
	return this.http.get(this.baseUrl + '/news/getnewspage');
}

public get_faq(){
	return this.http.get(this.baseUrl + '/faq/getfaq');
}

public get_meta(data){
	return this.http.post(this.baseUrl + '/metacontent/getmeta', data);
}

public add_contact(data){
	return this.http.post(this.baseUrl + '/contactus/add_contact', data);
}

public get_funds(data){
	return this.http.post(this.baseUrl + '/trade/getCurrency', data);
}

public get_contract(){
	return this.http.post(this.baseUrl + '/trade/getContract',{});
}

public withdraw_request(data){
	return this.http.post(this.baseUrl + '/user/withdrawrequest', data);
}

public btc_withdraw(data){
	return this.http.post(this.baseUrl + '/BdAMx4fdex/btcwithdraw', data); 
}

public admin_getbalance(data){
	return this.http.post(this.baseUrl + '/admin/getbalance',data)
}

public user_deposit(data){
	return this.http.post(this.baseUrl + '/user/Depositsdet',data);
}

public send_otp(data){
	return this.http.post(this.baseUrl + '/RegOTPSend',data);
}

public login_site(data){
	return this.http.post(this.baseUrl + '/logintosite', data);
}


public get_requestData(url,data){
	return this.http.post(this.baseUrl + url, data);
}


public get_Data(url){
	return this.http.get(this.baseUrl + url);
}


public get_externalurlData(url){
	return this.http.get(url);
}



public login_send(data){
	return this.http.post(this.baseUrl + '/LogOTPSend', data);
}

public register_btc(data){
	return this.http.post(this.baseUrl + '/register', data);
}

public get_activeOrder(data){
	return this.http.post(this.baseUrl + '/trade/get_activeorder', data);
}

public get_orderHistry(data){
	return this.http.post(this.baseUrl + '/trade/get_history', data);
}

public deposit_hist(data){
	return this.http.post(this.baseUrl + '/trade/get_deposit', data);
}

public withdraw_hist(data){
	return this.http.post(this.baseUrl + '/trade/get_withdraw', data);
}

public get_chartData(data){
	return this.http.post(this.baseUrl + '/get_chartdata',data);
}

public get_all_currencies(){
	return this.http.get(this.baseUrl + '/currencyDetails/currencyget');
}

public historyBack(){
	if (window.history.length > 1) {
	    this.location.back()
	  } else {
	    this.router.navigate(['/home'])
	  }
}



}