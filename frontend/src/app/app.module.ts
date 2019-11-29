import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { TabsModule, AccordionModule, BsDropdownModule } from 'ngx-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmbedVideo } from 'ngx-embed-video';
import { NgxSpinnerModule } from "ngx-spinner";
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { ToastrModule } from 'ngx-toastr';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { HighchartsChartModule } from 'highcharts-angular';

import { TermsComponent } from './terms/terms.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SecurityComponent } from './security/security.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { RiskremainderComponent } from './riskremainder/riskremainder.component';
import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CustomerbusinessComponent } from './customerbusiness/customerbusiness.component';
import { NewsComponent } from './news/news.component';
import { FaqComponent } from './faq/faq.component';
import { FeesComponent } from './fees/fees.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OrdersComponent } from './orders/orders.component';
import { ContactComponent } from './contact/contact.component';
import { TradeComponent } from './trade/trade.component';
import { FundsComponent } from './funds/funds.component';
import { environment } from '../environments/environment'
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { CookieService } from 'ngx-cookie-service';
import { ChunksPipe } from './services/chunksPipe';
import { SortByPipe } from './services/orderPipe';
import { CommingsoonComponent } from './commingsoon/commingsoon.component';
import { WebviewchartComponent } from './webviewchart/webviewchart.component';

const config: SocketIoConfig = { url: environment.apiUrl };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TermsComponent,
    AboutusComponent,
    SecurityComponent,
    PrivacypolicyComponent,
    RiskremainderComponent,
    KnowledgebaseComponent,
    AnnouncementComponent,
    CustomerbusinessComponent,
    NewsComponent,
    FaqComponent,
    FeesComponent,
    NotfoundComponent,
    OrdersComponent,
    ContactComponent,
    TradeComponent,
    FundsComponent,
    CommingsoonComponent,
    ChunksPipe,
    SortByPipe,
    WebviewchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule,
    SocketIoModule.forRoot(config),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    EmbedVideo.forRoot(),
     HighchartsChartModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [ApiService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
