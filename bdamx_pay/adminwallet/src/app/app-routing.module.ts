import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { NgxLoginComponent } from './@theme/auth/components/login/login.component'; 
import { NgxAuthComponent } from './@theme/auth/components/auth.component';
import { NgxRequestPasswordComponent } from './@theme/auth/components/request-password/request-password.component';
import { NgxLogoutComponent } from './@theme/auth/components/logout/logout.component';
import { nopageComponent } from './@theme/auth/components/nopage/nopage.component';

import { AdminService } from './@theme/auth/services/admin.service';


import { AuthGuard } from './@theme/auth/guards/auth.guard';
import { LoggedGuard } from './@theme/auth/guards/logged.guard';
import { UserService } from './@theme/auth/services/user.service';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule',canActivate:[AuthGuard] },
  // { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule'},
  {

    path: '0ec82d0ac9619f3c2a3fw2',

    component: NgxAuthComponent,
    children: [
      // {
      //   path: '',
      //   component: NgxLoginComponent,
      //   canActivate:[LoggedGuard],data:{userActivation : false,clearSession : true}
      // },
      {
        path: 'login',
        component: NgxLoginComponent,
        canActivate:[LoggedGuard],data:{userActivation : false,clearSession : true}
      },
      {
        path: 'request-password',
        component: NgxRequestPasswordComponent
      },
      {
        path: 'logout',
        component: NgxLogoutComponent
      },
    ],
  },
  {path: '404',component: nopageComponent},  
  { path: '', redirectTo: '404', pathMatch: 'full'},
  { path: '**', redirectTo: '404' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: [ AuthGuard,LoggedGuard,UserService],
})
export class AppRoutingModule {
}

