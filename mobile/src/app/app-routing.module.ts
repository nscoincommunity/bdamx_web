import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BottombarComponent } from './component/bottombar/bottombar.component';
import { MarketsComponent } from './pages/markets/markets.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { TradeComponent } from './pages/trade/trade.component';
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



const routes: Routes = [
{ path: '', component: MarketsComponent },
{ path: 'markets', component: MarketsComponent },
{ path: 'assets', component: AssetsComponent },
{ path: 'trade', component: TradeComponent },
{ path: 'quickLinks', component: AboutComponent },
{ path: 'aboutus', component: AboutusComponent },
{ path: 'customer', component: CustomerComponent },
{ path: 'announcement', component: AnnouncementsComponent },
{ path: 'fees', component: FeesComponent },
{ path: 'knowledge', component: KnowledgeComponent },
{ path: 'privacy', component: PrivacyComponent },
{ path: 'securitystrategy', component: SecuritystrategyComponent },
{ path: 'terms', component: TermsComponent },
{ path: 'news', component: NewsComponent },
{ path: 'riskremainder', component: RiskremainderComponent },
{ path: 'trade/:pair', component: TradeComponent },
{ path: 'accounts', component: AccountComponent },
{ path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
