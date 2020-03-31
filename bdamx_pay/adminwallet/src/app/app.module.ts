  /**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { NgxLoginComponent } from './@theme/auth/components/login/login.component'; 
import { NgxAuthComponent } from './@theme/auth/components/auth.component'; 
import { NgxRequestPasswordComponent } from './@theme/auth/components/request-password/request-password.component';
import { NgxLogoutComponent } from './@theme/auth/components/logout/logout.component';
import { nopageComponent } from './@theme/auth/components/nopage/nopage.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthGuard } from './@theme/auth/guards/auth.guard';
import { LoggedGuard } from './@theme/auth/guards/logged.guard';
import { UserService } from './@theme/auth/services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { CommonService } from './common.service';
import { RecaptchaModule } from 'ng-recaptcha';
import { ToastrModule } from 'ngx-toastr';
import {NgIdleModule} from '@ng-idle/core';
import { CacheService } from 'ng2-cache';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgxAuthModule } from './@theme/auth/app.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule, 
    NgSelectModule,
    CommonModule,
    NgxDatatableModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    RecaptchaModule,
    DataTablesModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    NgIdleModule.forRoot(),
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    FormsModule, ReactiveFormsModule,
    CKEditorModule,
    // NgxAuthModule
    NgxAuthModule
  ],
  bootstrap: [AppComponent],
  providers: [
    CommonService,AuthGuard,LoggedGuard,UserService,CookieService,CacheService,   
    { provide: APP_BASE_HREF, useValue:'/' },
  ],
})
export class AppModule {
}
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}