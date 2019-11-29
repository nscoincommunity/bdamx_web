import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UserService {

  // private dataSource = new BehaviorSubject({});
  // data = this.dataSource.asObservable();

  constructor(private cookieService: CookieService) {

   }

  userLogged(){
  	if(this.cookieService.get('session')!=null &&this.cookieService.get('session')!=undefined && this.cookieService.get('session')!='')
  	{
      // //console.log("!!!!!!!!!")
  		return true;
  	}
  	return false;
  }

  getUser() {
    return this.cookieService.get('session')?this.cookieService.get('session'):false;
  }

  // hdrmenuclickMyNew(lang){
  //   this.dataSource.next(lang); 
  // }

  setUser(status){
		if(status == false)
		{
     localStorage.clear();
     this.cookieService.delete('session');
     this.cookieService.delete('role');

		}
  }

}
