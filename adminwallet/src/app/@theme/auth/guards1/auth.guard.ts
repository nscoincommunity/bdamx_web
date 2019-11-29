import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators'
// import {Observable} from 'rxjs';


import { AdminService } from '../services/admin.service';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private adminService:AdminService,private router: Router,private idle : Idle,private cookieService: CookieService) { }

	  canActivate(
	    next: ActivatedRouteSnapshot,
	    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

	  	if (this.adminService.userLogged())
		{
			this.idle_run();
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
	    window.onmousemove = () => { this.idlereset(); };
	    window.onmousedown = () => { this.idlereset(); };
	    window.onclick = () => { this.idlereset(); };
	    window.onscroll = () => { this.idlereset(); };
	    window.onkeypress = () => { this.idlereset(); };
	}



	idlereset() {
	  	if (this.adminService.userLogged())
		{
		    this.idle.watch();

		    this.idle.setIdle(100);
		    this.idle.setTimeout(300);
		    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

		   
		    this.idle.onTimeout.subscribe(() => {
		      localStorage.clear();
		      this.cookieService.delete('session');
		      this.cookieService.delete('role');
		      this.router.navigate(['/BdaPLB45WALLETMKLXM8957LOO/login']);
		    });
		    this.idle.watch();
		}
		else{
			this.idle.stop();
		}
	}
}