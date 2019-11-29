import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BottombarComponent } from './component/bottombar/bottombar.component';
import { TradeComponent } from './pages/trade/trade.component';
import { MarketsComponent } from './pages/markets/markets.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { AccountComponent } from './pages/account/account.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { FeesComponent } from './pages/fees/fees.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { NewsComponent } from './pages/news/news.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { SecuritystrategyComponent } from './pages/securitystrategy/securitystrategy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { RiskremainderComponent } from './pages/riskremainder/riskremainder.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ApiService } from './services/api.service';

import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { ToastrModule } from 'ngx-toastr';
import { HighchartsChartModule } from 'highcharts-angular';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { CookieService } from 'ngx-cookie-service';
import { ChunksPipe } from './services/chunksPipe';
import { SortByPipe } from './services/orderPipe';
import { environment } from '../environments/environment';
import { DeviceDetectorModule } from 'ngx-device-detector';


const config: SocketIoConfig = { url: environment.apiUrl };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BottombarComponent,
    TradeComponent,
    MarketsComponent,
    AssetsComponent,
    AccountComponent,
    AboutComponent,
    AboutusComponent,
    AnnouncementsComponent,
    CustomerComponent,
    FeesComponent,
    KnowledgeComponent,
    NewsComponent,
    PrivacyComponent,
    SecuritystrategyComponent,
    TermsComponent,
    RiskremainderComponent,
    ContactComponent,
    ChunksPipe,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    HighchartsChartModule,
    SocketIoModule.forRoot(config),
    ToastrModule.forRoot(),
    DeviceDetectorModule.forRoot()
  ],
  providers: [ApiService, CookieService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
