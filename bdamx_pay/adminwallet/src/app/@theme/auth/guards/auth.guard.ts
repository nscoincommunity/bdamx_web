import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../services/user.service';

import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import { CommonService } from '../../../common.service';
import { CacheService, CacheStoragesEnum } from 'ng2-cache';
declare var $: any;
@Injectable()
export class AuthGuard implements CanActivate {

constructor(private userService:UserService,private router: Router,private idle : Idle,private reqHelper:CommonService,private _cacheService: CacheService) {
	this.getlogin();
	 
 }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  	if (this.userService.userLogged())
	{
		// this.idle_run();
      	return true;
    }
	else
	{
		this.idle.stop();
		this.router.navigate(['/BdaPLB45WALLETMKLXM8957LOO/login'], { queryParams: { returnUrl: state.url }});
	}
    return false;
  }

  idle_run() {
    window.addEventListener('scroll',(e: Event) => {
        this.idlereset();
    });
    window.onload = () => { this.idlereset(); };
 
  }

loginhistory = {"ipaddress": "","location": "","browser": "",
  "deviceinfo": "","logindatetime": new Date(),"loginstatus": ""};

	getlogin(){
		// this.reqHelper.getData_externalurl('https://ipapi.co/json/?key=5e641b0edd226b59a2f106c65b2fedea771bff80')
		// .subscribe(resData => {
		// 	this.loginhistory.ipaddress = resData.ip;

		// });
	}

 idlereset() {
 	// console.log(this.userService.userLogged());
 	// console.log(this.idle);
  	if (this.userService.userLogged()) {
	    // this.idle.watch();
	    this.idle.setIdle(100);
	    this.idle.setTimeout(300);

	    this.idle.onTimeoutWarning.subscribe((countdown:number) => {
	    });

	    this.idle.onTimeout.subscribe(() => {
	    	this._cacheService.removeAll();
	    	// localStorage.removeItem('userdata');
	    	// localStorage.removeItem('pair_val');
     	// 	localStorage.removeItem('seccur_val');

	     //    this.loginhistory.loginstatus =  "Logged Out";
	     //    this.loginhistory.location = $('#location').val();
	     //    var datas = {
	     //      _id    : localStorage.getItem('currentUser'),
	     //      loginhistory: this.loginhistory
	     //    };
        // this.reqHelper.requestData('api/sign_out',datas).subscribe(resData => {
        //   this.userService.setUser(false);
          this.router.navigate(['/BdaPLB45WALLETMKLXM8957LOO/login']);
        // });
	    });
	    this.idle.watch();
	}
	else{
		this.idle.stop();
	}
  }
}
