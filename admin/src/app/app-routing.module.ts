


import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { NgxLoginComponent } from './@theme/auth/components/login/login.component'; 
import { NgxAuthComponent } from './@theme/auth/components/auth.component';
import { NgxRequestPasswordComponent } from './@theme/auth/components/request-password/request-password.component';
import { NgxResetPasswordComponent } from './@theme/auth/components/reset-password/reset-password.component';
import { NgxsetPasswordComponent } from './@theme/auth/components/set-password/set-password.component';
import { NgxLogoutComponent } from './@theme/auth/components/logout/logout.component';
import { NgxotpComponent } from './@theme/auth/components/otp-verification/otp-verification.component';
import { nopageComponent } from './@theme/auth/components/nopage/nopage.component';

import { AdminService } from './@theme/auth/services/admin.service';


import { AuthGuard } from './@theme/auth/guards/auth.guard';
import { LoggedGuard } from './@theme/auth/guards/logged.guard';
import { UserService } from './@theme/auth/services/user.service';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule',canActivate:[AuthGuard] },
  // { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule'},
  { path: 'nopage', component: nopageComponent},
  {
    path: 'BdaPLB45MKLXM8957LOO',
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
        path: 'otp-verification/:id',
        component: NgxotpComponent,
      },       
      {
        path: 'request-password',
        component: NgxRequestPasswordComponent
      },
      {
        path: 'reset-password/:id',
        component: NgxResetPasswordComponent
      },      
      {
        path: 'set-password/:id',
        component: NgxsetPasswordComponent
      },      
      {
        path: 'logout',
        component: NgxLogoutComponent
      },
    ],
  },
  { path: '', redirectTo: 'nopage', pathMatch: 'full'},
  { path: '**', redirectTo: 'nopage' },
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

