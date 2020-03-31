import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CKEditorModule } from 'ngx-ckeditor';
import { DataTablesModule } from 'angular-datatables';


import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManageComponent } from './usermanage/usermanage.component'
import { SettingsComponent } from './settings/settings.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManagecontentComponent } from './managecontent/managecontent.component';
import { ClickComponent } from './click/click.component';
import { ContentmanageComponent } from './contentmanage/contentmanage.component';
import { BannersComponent} from'./banners/banners.component';
import { SupportticketComponent } from './supportticket/supportticket.component';
import { UsersComponent } from './users/users.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SubsdminComponent } from './subsdmin/subsdmin.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { ExchangeComponent } from './exchange/exchange.component';



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
    UserManageComponent,
    SettingsComponent,
    ManageusersComponent,
    ManagecontentComponent,
    ClickComponent,
    UsersComponent,
    ContactusComponent,
    SubsdminComponent,
    EmailTemplateComponent,
    ExchangeComponent
  ],
})
export class PagesModule {
}
