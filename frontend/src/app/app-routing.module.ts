import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { CommingsoonComponent } from './commingsoon/commingsoon.component';

import { WebviewchartComponent } from './webviewchart/webviewchart.component';


const routes: Routes = [
{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'terms',component: TermsComponent },
{ path: 'aboutus',component: AboutusComponent },
{ path: 'security', component: SecurityComponent },
{ path: 'privacypolicy', component: PrivacypolicyComponent },
{ path: 'riskremainder', component: RiskremainderComponent },
{ path: 'knowledgebase', component: KnowledgebaseComponent },
{ path: 'announcement', component: AnnouncementComponent },
{ path: 'customerservices', component: CustomerbusinessComponent },
{ path: 'news', component: NewsComponent },
{ path: 'faq', component: FaqComponent },
{ path: 'fees', component: FeesComponent },
{ path: 'orders', component: OrdersComponent},
{ path: 'contact', component: ContactComponent },
{ path: 'trade', component: TradeComponent },
{ path: 'trade/:pair', component: TradeComponent },

{ path: 'webviewchart', component: WebviewchartComponent },
{ path: 'webviewchart/:pair', component: WebviewchartComponent },


{ path: '404', component: NotfoundComponent},
{ path: 'funds', component: FundsComponent },
{ path: 'comingsoon', component: CommingsoonComponent},
{path: '**', redirectTo: '/404'}
];
 
const config = {useHash:false };

@NgModule({
imports: [RouterModule.forRoot(routes,{useHash:false,scrollPositionRestoration: 'enabled',
anchorScrolling: 'enabled'})],
exports: [RouterModule]
})
export class AppRoutingModule { }
