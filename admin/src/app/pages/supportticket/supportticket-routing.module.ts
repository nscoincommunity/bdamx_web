import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SupportissuesComponent } from './supportissues/supportissues.component';
import { UsersupportComponent } from './usersupport/usersupport.component';
import { SupportticketComponent } from './supportticket.component';
import { ProfitComponent } from './profit/profit.component';
import { TradehistoryComponent } from './tradehistory/tradehistory.component';
import { OrderactiveComponent } from './orderactive/orderactive.component';
import { OrdercancelComponent } from './ordercancel/ordercancel.component';
import { CurrencyprofitComponent } from './currencyprofit/currencyprofit.component';

const routes: Routes = [{
  path: '',
  component: SupportticketComponent,
  children: [ {
    path: 'deposite',
    component: UsersupportComponent,
  }, {
    path: 'withdraw',
    component: SupportissuesComponent,
  }, {
    path: 'profit',
    component: ProfitComponent,
  }, {
    path: 'tradehistory',
    component: TradehistoryComponent,
  }, {
    path: 'orderactive',
    component: OrderactiveComponent,
  }, {
    path: 'ordercancel',
    component: OrdercancelComponent,
  }, {
    path: 'currencyprofit',
    component: CurrencyprofitComponent,
  }
  ],
}];

@NgModule({
  declarations: [],
   imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],

 exports: [RouterModule]
})
export class SupportticketRoutingModule { }
