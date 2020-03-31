import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ResourceComponent } from './resource/resource.component';
import { BalanceComponent } from './balance/balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TwoFactorComponent } from './two-factor/two-factor.component';
import { BankdetailComponent } from './bankdetail/bankdetail.component';
import { BlockCryptoComponent } from './block-crypto/block-crypto.component';
import { BlockFiatComponent } from './block-fiat/block-fiat.component';
import { BlockMarketComponent } from './block-market/block-market.component';
import { CareerComponent } from './career/career.component';
import { PressComponent } from './press/press.component';
import { AboutComponent } from './about/about.component';
import { ReferralComponent } from './referral/referral.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AuthguardService } from './services/authguard.service';
import { LogguardService } from './services/logguard.service';
import { UndermaintainenceComponent } from './undermaintainence/undermaintainence.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IpblockComponent } from './ipblock/ipblock.component';
import { WebviewfiatComponent } from './webviewfiat/webviewfiat.component';
import { WebviewlineComponent } from './webviewline/webviewline.component';
import { ProfileComponent } from './profile/profile.component';
import { TradeComponent } from './trade/trade.component';
import { GraphwebviewComponent } from './graphwebview/graphwebview.component';
import { CreditcardComponent } from './creditcard/creditcard.component';


const routes: Routes = [
{path:'', component: HomeComponent},
{path:'terms', component: TermsComponent},
{path:'career', component: CareerComponent},
{path:'press', component: PressComponent},
{path:'aboutus', component: AboutComponent},
{path:'referral', component: ReferralComponent},
{path:'privacypolicy', component: PrivacyComponent},
{path:'resourcecenter', component: ResourceComponent},
{path:'faq', component: FaqComponent},
{path:'login',canActivate: [LogguardService], component: LoginComponent},
{path:'signup', canActivate: [LogguardService],component: SignupComponent},
{path:'signup/:id',canActivate: [LogguardService], component: SignupComponent},
{path:'forgot',canActivate: [LogguardService], component: ForgotpasswordComponent},
{path:'forgot/:id', canActivate: [LogguardService],component: ForgotpasswordComponent},
{path:'balance', canActivate: [AuthguardService],component: BalanceComponent},
{path:'withdraw',canActivate: [AuthguardService], component: WithdrawComponent},
{path:'withdraw/:id/:status',canActivate: [AuthguardService], component: WithdrawComponent},
{path:'deposit',canActivate: [AuthguardService], component: DepositComponent},
{path:'bankdetail',canActivate: [AuthguardService], component: BankdetailComponent},
{path:'profile',canActivate: [AuthguardService], component: ProfileComponent},
{path:'exchange',canActivate: [AuthguardService],component: BlockFiatComponent},
{path:'creditcard',canActivate: [AuthguardService],component: CreditcardComponent},
{path:'dashboard',canActivate: [AuthguardService], component: BlockCryptoComponent},
{path:'graphwebview', component: GraphwebviewComponent},
{path:'twofactor',canActivate: [AuthguardService], component: TwoFactorComponent},
{path:'tfa',canActivate: [AuthguardService], component:TwoFactorComponent},
{path:'ipblock',component:IpblockComponent},
{path:'webview/:type',component:WebviewfiatComponent},
{path:'webline',component:WebviewlineComponent},
{path:'undermaintainence', component:UndermaintainenceComponent},
{path:'trade', component:TradeComponent},
{path:'notfound', component:PagenotfoundComponent},
{path: '**', redirectTo: 'notfound'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false,scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'})],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
