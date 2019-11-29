import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
    path: 'email_template',
    component: EmailTemplateComponent
  },  
  {
    path: 'Sub-admin',
    component: SubsdminComponent
  },  
    {
    path: 'Admin_withdraw',
    component: ManageusersComponent
  },
    {
    path: 'History_management',
    loadChildren: './supportticket/supportticket.module#SupportticketModule',
  },

  {
    path: 'contentmanage',
    loadChildren: './contentmanage/contentmanage.module#ContentmanageModule',
  },
    
  {
    path: 'Site_settings',
    component: ManagecontentComponent
  },
   {
    path: 'currency_management',
    loadChildren: './banners/banners.module#BannersModule',
  },  
   
   {
     path: 'Token_details',
    component: ClickComponent
  }, 
  {
     path: 'users',
    component: UsersComponent
  },
  {
     path: 'contactus',
    component: ContactusComponent
  }
                                           
    ],
  }]
                                                                          
@NgModule({                                                   
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
