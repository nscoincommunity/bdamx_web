import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CKEditorModule } from 'ngx-ckeditor';
import { DataTablesModule } from 'angular-datatables';


import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ManagecontentComponent } from './managecontent/managecontent.component';
import { ProfitComponent } from './profit/profit.component';
import { CurrencyprofitComponent } from './currencyprofit/currencyprofit.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalletHistoryComponent } from './wallet-history/wallet-history.component';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DataTablesModule,
   NgbModule.forRoot(),
   NgxDatatableModule,
    CKEditorModule


  ],
  declarations: [
    ...PAGES_COMPONENTS,
    DashboardComponent,
    SettingsComponent,
    ManagecontentComponent,
    ProfitComponent,
    WalletComponent,
    WalletHistoryComponent,
    CurrencyprofitComponent
  ],
})
export class PagesModule {
}
