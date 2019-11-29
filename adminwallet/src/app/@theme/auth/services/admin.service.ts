import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AdminService {

  constructor(private cookieService: CookieService) { }

  userLogged(){
  	if(this.cookieService.get('session'))
  	{
  		return true;
  	}
  	return false;
  }

  getUser() {
    return this.cookieService.get('session')?this.cookieService.get('session'):false;
  }

  setUser(status){
		if(status == false)
		{
		 localStorage.clear();
		 this.cookieService.delete('session');
     this.cookieService.delete('role');
		}
  }

}