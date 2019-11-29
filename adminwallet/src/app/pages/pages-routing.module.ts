import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ManagecontentComponent } from './managecontent/managecontent.component';
import { ProfitComponent } from './profit/profit.component';
import { CurrencyprofitComponent } from './currencyprofit/currencyprofit.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalletHistoryComponent } from './wallet-history/wallet-history.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: DashboardComponent
  },  
  {
    path: 'profile_settings',
    component: SettingsComponent
  },
  {
    path: 'site_settings',
    component: ManagecontentComponent
  },

  {
    path: 'profit',
    component: ProfitComponent
  },
  {
    path: 'currencyprofit',
    component: CurrencyprofitComponent
  }, 
  {
    path: 'wallet',
    component: WalletComponent
  },  
    {
    path: 'wallet_history',
    component: WalletHistoryComponent
  }
                                           
    ],
  }]
                                                                          
@NgModule({                                                   
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
