import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiService }  from './apiService';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
@Injectable({
  providedIn: 'root'
})
export class LogguardService {

  constructor(private commonService: ApiService, private router: Router, private idle: Idle) {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.commonService.loggedIn())
    {
    return true;
    localStorage.removeItem('auth');
    }
    else
    {
      this.router.navigate(['/']);
    }
    return false;
  }
}
