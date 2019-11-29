import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CmssComponent } from './cmss/cmss.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContentmanageComponent } from './contentmanage.component';
import { ContactComponent } from './contact/contact.component';
import { FeatureComponent } from './feature/feature.component';
import { MetacontentComponent } from './metacontent/metacontent.component';

const routes: Routes = [{
  path: '',
  component: ContentmanageComponent,
  children: [ {
    path: 'faqs',
    component: FaqsComponent,
  }, 
  {
    path: 'cmss',
    component: CmssComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'feature',
    component: FeatureComponent,
  },
  {
    path: 'metacontent',
    component: MetacontentComponent,
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
export class ContentmanageRoutingModule { }
