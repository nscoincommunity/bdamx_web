import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportticketRoutingModule } from './supportticket-routing.module';
import { SupportissuesComponent } from './supportissues/supportissues.component';
import { UsersupportComponent } from './usersupport/usersupport.component';
import { SupportticketComponent } from './supportticket.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfitComponent } from './profit/profit.component';
import { TradehistoryComponent } from './tradehistory/tradehistory.component';
import { OrderactiveComponent } from './orderactive/orderactive.component';
import { OrdercancelComponent } from './ordercancel/ordercancel.component';
import { CurrencyprofitComponent } from './currencyprofit/currencyprofit.component';

const components = [
  SupportissuesComponent,
  UsersupportComponent,
  SupportticketComponent

];


@NgModule({
  imports: [
    SupportticketRoutingModule,
    NgxDatatableModule,
    FormsModule, 
    ReactiveFormsModule,
    ThemeModule.forRoot(),
    CommonModule,
    NgbModule.forRoot(),


  ],
  declarations: [
    ...components,
    ProfitComponent,
    TradehistoryComponent,
    OrderactiveComponent,
    OrdercancelComponent,
    CurrencyprofitComponent,
  ],
})
export class SupportticketModule { }
