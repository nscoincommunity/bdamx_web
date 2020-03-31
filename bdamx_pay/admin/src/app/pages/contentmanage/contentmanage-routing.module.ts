import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CmssComponent } from './cmss/cmss.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContentmanageComponent } from './contentmanage.component';
import { ContactComponent } from './contact/contact.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FeatureComponent } from './feature/feature.component';
import { PaidinComponent } from './paidin/paidin.component';
import { PartnersComponent } from './partners/partners.component';
import { CustomersComponent } from './customers/customers.component';
import { MetacontentComponent } from './metacontent/metacontent.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { SmartcaseComponent } from './smartcase/smartcase.component';
import { HomeCmsComponent } from './home-cms/home-cms.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { CategoryComparisonComponent } from './category-comparison/category-comparison.component';
import { MarketsComponent } from './markets/markets.component';
import { FaqcategoryComponent } from './faqcategory/faqcategory.component';
import { TypeComparisonComponent } from './type-comparison/type-comparison.component';
import { AdminbankdetailsComponent } from './adminbankdetails/adminbankdetails.component';
import { AdminbankinfoComponent } from './adminbankinfo/adminbankinfo.component';
import { IpblockComponent } from './ipblock/ipblock.component';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';


const routes: Routes = [{
  path: '',
  component: ContentmanageComponent,
  children: [ 
  {
    path: 'faqcategory',
    component: FaqcategoryComponent,
  }, 
  {
    path: 'faqs',
    component: FaqsComponent,
  }, 
  {
    path: 'cmss',
    component: CmssComponent,
  },
  {
    path: 'ipblock',
    component: IpblockComponent,
  },
  {
    path: 'adminbankdetails',
    component: AdminbankdetailsComponent,
  },
   {
    path: 'bankdetails',
    component: BankdetailsComponent,
  },
  {
    path: 'adminbankinfo',
    component: AdminbankinfoComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'benefits',
    component: BenefitsComponent,
  },
  {
    path: 'markets',
    component: MarketsComponent,
  },
  {
    path: 'feature',
    component: FeatureComponent,
  },
  {
    path: 'home-cms',
    component: HomeCmsComponent,
  },
  {
    path: 'category-comparison',
    component: CategoryComparisonComponent,
  },
  {
    path: 'comparison',
    component: ComparisonComponent,
  },
  {
    path: 'type',
    component: TypeComparisonComponent,
  },
  {
    path: 'paidin',
    component: PaidinComponent,
  },
  {
    path: 'partners',
    component: PartnersComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'metacontent',
    component: MetacontentComponent,
  },
  {
    path: 'smartcase',
    component: SmartcaseComponent,
  },
  {
    path: 'learnmore',
    component: LearnmoreComponent,
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
