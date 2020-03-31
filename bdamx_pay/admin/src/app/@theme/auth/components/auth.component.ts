import { Component, OnDestroy } from '@angular/core';
// import { NbAuthService } from '../services/auth.service';
// import { takeWhile } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';


@Component({
  // selector: 'nb-auth-block',
  selector: 'ngx-auth',
  // styles: ["/*! * @license * Copyright Akveo. All Rights Reserved. * Licensed under the MIT License. See License.txt in the project root for license information. */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{text-decoration:none}:host .navigation .link .icon{font-size:2rem}:host nb-card-body{display:flex;width:100%}:host nb-auth-block{margin:auto}@media (max-width: 767.98px){:host nb-card{border-radius:0;height:100vh}}:host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){:host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}} "],
    // template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n                   <nb-card-body>\n            <nb-auth-block>\n              <router-outlet></router-outlet>\n            </nb-auth-block>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",

    styleUrls: ['./auth.component.scss'],
    template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-body>
            <div class="col-lg-12 admin_panel_login">
              <router-outlet></router-outlet>
            </div>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,


  // styleUrls: ['./auth.component.scss'],
  // template: `
  //   <nb-layout>
  //     <nb-layout-column>
  //       <nb-card>
  //         <nb-card-body>

  //           <div class="flex-centered col-xl-4 col-lg-6 col-md-8 col-sm-12">
  //             <router-outlet></router-outlet>
  //           </div>
  //         </nb-card-body>
  //       </nb-card>
  //     </nb-layout-column>
  //   </nb-layout>
  // `,
})
export class NgxAuthComponent implements OnDestroy {

  private alive = true;

  subscription: any;

  authenticated: boolean = false;
  token: string = '';

  // showcase of how to use the onAuthenticationChange method
  // constructor(protected auth: NbAuthService) {

  //   this.subscription = auth.onAuthenticationChange()
  //     .pipe(takeWhile(() => this.alive))
  //     .subscribe((authenticated: boolean) => {
  //       this.authenticated = authenticated;
  //     });
  // }

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
