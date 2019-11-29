import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NbAuthComponent } from '@nebular/auth';
import { NgxAuthComponent } from './components/auth.component'; // <---
import { NgxLoginComponent } from './components/login/login.component'; // <---
import { NgxRequestPasswordComponent } from './components/request-password/request-password.component'; // <---
import { NgxResetPasswordComponent } from './components/reset-password/reset-password.component'; // <---
import { NgxsetPasswordComponent } from './components/set-password/set-password.component'; // <---
import { NgxLogoutComponent } from './components/logout/logout.component';
import { NgxotpComponent } from './components/otp-verification/otp-verification.component';
import { nopageComponent } from './components/nopage/nopage.component';

import { AuthGuard } from './guards/auth.guard';
import { LoggedGuard } from './guards/logged.guard';
import { UserService } from './services/user.service';

export 

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'BdaPLB45MKLXM8957LOO',
    component: NgxAuthComponent,
    children: [
      // {
      //   path: '',
      //   component: NgxLoginComponent,
      // },
      {
        path: 'request-password',
        component: NgxRequestPasswordComponent,
      },
      {
        path: 'otp-verification/:id',
        component: NgxotpComponent,
      },      
      {
        path: 'reset-password/:id',
        component: NgxResetPasswordComponent,
      },      
      {
        path: 'set-password/:id',
        component: NgxsetPasswordComponent,
      },        
      {
        path: 'login',
        component: NgxLoginComponent,
      },
     
      {
        path: 'logout',
        component: NgxLogoutComponent,
      },
     
    ],
  },
  {path: '404',component: nopageComponent},
  { path: '', redirectTo: '404', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
