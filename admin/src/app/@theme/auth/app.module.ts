import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';
import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgxAuthRoutingModule } from './auth-routing.module';
// import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule,NbCardModule,NbLayoutModule } from '@nebular/theme';

import { NgxLoginComponent } from './components/login/login.component'; // <---
import { NgxAuthComponent } from './components/auth.component'; // <---
// import { NgxCaptchaModule } from 'ngx-captcha';
import { NgxRequestPasswordComponent } from './components/request-password/request-password.component';
import { NgxResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NgxsetPasswordComponent } from './components/set-password/set-password.component';
import { NgxotpComponent } from './components/otp-verification/otp-verification.component';
import { nopageComponent } from './components/nopage/nopage.component';
import { NgxLogoutComponent } from './components/logout/logout.component';

import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import {NgIdleModule,Idle,IdleExpiry} from '@ng-idle/core';

import { AuthGuard } from './guards/auth.guard';
import { LoggedGuard } from './guards/logged.guard';
import { UserService } from './services/user.service';
import { CacheService } from 'ng2-cache';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbCardModule,
    NbLayoutModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    RecaptchaModule,
    HttpClientModule,    // NbAuthModule,
    HttpModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    NgIdleModule
  ],
  declarations: [
    NgxLoginComponent, // <---
    NgxAuthComponent,
    NgxRequestPasswordComponent,
    NgxResetPasswordComponent,
    NgxLogoutComponent,
    NgxotpComponent,
    nopageComponent,
    NgxsetPasswordComponent
  ],
  providers: [ CookieService,AuthGuard,LoggedGuard,UserService,Idle,CacheService
        ],
})
export class NgxAuthModule {

}