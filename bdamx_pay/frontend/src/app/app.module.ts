import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BalanceComponent } from './balance/balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TwoFactorComponent } from './two-factor/two-factor.component';
import { BlockCryptoComponent } from './block-crypto/block-crypto.component';
import { BlockFiatComponent } from './block-fiat/block-fiat.component';
import { BlockMarketComponent } from './block-market/block-market.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';

import { ApiService } from './services/apiService';
import { ChartsModule } from 'ng2-charts';
import { NgxSpinnerModule } from "ngx-spinner";


// import { CarouselModule } from 'ngx-carousels';

import { TabsModule, AccordionModule, ModalModule } from 'ngx-bootstrap';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ResourceComponent } from './resource/resource.component';
import { CareerComponent } from './career/career.component';
import { PressComponent } from './press/press.component';
import { AboutComponent } from './about/about.component';
import { ReferralComponent } from './referral/referral.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {NgIdleModule} from '@ng-idle/core';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from '../environments/environment'
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { BankdetailComponent } from './bankdetail/bankdetail.component';
import { ExportAsModule } from 'ngx-export-as';
import { UndermaintainenceComponent } from './undermaintainence/undermaintainence.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IpblockComponent } from './ipblock/ipblock.component';
import { WebviewfiatComponent } from './webviewfiat/webviewfiat.component';
import { WebviewlineComponent } from './webviewline/webviewline.component';
import { ProfileComponent } from './profile/profile.component';
import { TradeComponent } from './trade/trade.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { GraphwebviewComponent } from './graphwebview/graphwebview.component';
import { CreditcardComponent } from './creditcard/creditcard.component';


const config: SocketIoConfig = { url: environment.apiUrl };

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    LoginComponent,
    HomeComponent,
    BalanceComponent,
    DepositComponent,
    WithdrawComponent,
    TwoFactorComponent,
    
    BlockCryptoComponent,
    BlockFiatComponent,
    BlockMarketComponent,
    HeaderComponent,
    FooterComponent,
    DashboardHeaderComponent,
    SidebarComponent,
    TermsComponent,
    PrivacyComponent,
    ResourceComponent,
    CareerComponent,
    PressComponent, 
    AboutComponent,
    ReferralComponent,
    SidebarComponent,
    SignupComponent,
    ForgotpasswordComponent,
    BankdetailComponent,
    UndermaintainenceComponent,
    PagenotfoundComponent,
    IpblockComponent,
    WebviewfiatComponent,
    WebviewlineComponent,
    ProfileComponent,
    TradeComponent,
    GraphwebviewComponent,
    CreditcardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecaptchaV3Module,
    HttpClientModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,
    SocketIoModule.forRoot(config),
    NgIdleModule.forRoot(),
    ChartsModule,
    NgxSpinnerModule,
    ExportAsModule,
    //NgxIntlTelInputModule,
    //BsDropdownModule.forRoot(),
    CarouselModule,
    ToastrModule.forRoot({
    timeOut: 8000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    }),
    TabsModule.forRoot(),
    CommonModule,
    MalihuScrollbarModule.forRoot(),

  ],
  providers: [ApiService,{ provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LcvA8YUAAAAAFRrlaQXMFakv3pXYG2Mb1b3BVm5' }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
