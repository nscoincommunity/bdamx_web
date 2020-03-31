/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { NB_AUTH_OPTIONS } from '../../auth.options';
// import { getDeepFromObject } from '../../helpers';
// import { NbAuthService } from '../../services/auth.service';
// import { NbAuthResult } from '../../services/auth-result';
import { CookieService } from 'ngx-cookie-service';
import { CommonService } from '../../../../common.service';

@Component({
  selector: 'ngx-logout',
  template: `
    <div>Logging out, please wait...</div>
  `,
})
export class NgxLogoutComponent implements OnInit {

  redirectDelay: number = 0;
  strategy: string = '';
  emailid:any;

  // constructor(protected service: NbAuthService,
  //             @Inject(NB_AUTH_OPTIONS) protected options = {},
  //             protected router: Router,private cookieService: CookieService,private commonservice: CommonService) {

  constructor(protected router: Router,private cookieService: CookieService,private commonservice: CommonService) {   
      console.log("this.strategy",this.strategy)
      this.logout(this.strategy);      
  }

  ngOnInit(): void {
    // this.logout(this.strategy);
  }

  logout(strategy: string): void {
    this.commonservice.requestData('admin/add_history',{'id':this.cookieService.get('session')}).subscribe(resData=>{})
    // this.commonservice.getData('api/admindetails').subscribe(resData=>{
    //   this.emailid = resData.data[0].contact_mail;

    //   console.log("resData.data[0].contact_mail",resData.data[0].contact_mail)

    //   let datum ={
    //     "role":this.cookieService.get('role'),
    //     "role_id":this.cookieService.get('session'),
    //     "category":"Logout",
    //     "to":this.emailid,
    //     "message":'Logged out'          
    //   }
    //   this.commonservice.requestData('log/addlog',datum).subscribe(resData =>{
    //   });
    // });
    // this.service.logout(strategy).subscribe((result: NbAuthResult) => {
    //   const redirect = result.getRedirect();
      // if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl('/0ec82d0ac9619f3c2a3ff2/login');
        }, this.redirectDelay);     
      // }
      this.cookieService.delete('session');
      this.cookieService.delete('role');
    // });
  }
}
