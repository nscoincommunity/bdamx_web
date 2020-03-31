import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiService }  from './apiService';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private commonService: ApiService, private router: Router, private idle: Idle) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.commonService.loggedIn()) {
      this.idle_run();
      return true;
    }
    else {
      this.idle.stop();
      localStorage.removeItem('auth');
      this.router.navigate(['/login']);
      
    }
    return false;
  }





  idle_run() {
    window.addEventListener('scroll', (e: Event) => {
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
    if (this.commonService.loggedIn()) {
      this.idle.watch();
      var idleState = 'Not started.';

      this.idle.setIdle(1800);
    
      this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

      this.idle.onTimeoutWarning.subscribe((countdown: number) => {
      });
      
      this.idle.onIdleStart.subscribe(() => { 


      });

      this.idle.onTimeout.subscribe(() => {
        localStorage.removeItem('auth');
        //localStorage.removeItem('join_id');
        this.router.navigate(['/login']);
        
      });
      this.idle.watch();
    }
    else {
      this.idle.stop();
    }
  }

}
