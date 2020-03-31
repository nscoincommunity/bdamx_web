import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../services/user.service';

@Injectable()
export class LoggedGuard implements CanActivate {

	constructor(private userService:UserService,private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.userService.userLogged())
		{
      return true;
    }
		else
		{
			this.router.navigate(['/pages']);
		}
    return false;
  }
}
