import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContentmanageRoutingModule } from './contentmanage-routing.module';
import { CmssComponent } from './cmss/cmss.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContentmanageComponent } from './contentmanage.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { ContactComponent } from './contact/contact.component';
import { MetacontentComponent } from './metacontent/metacontent.component';
import { FeatureComponent } from './feature/feature.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { SmartcaseComponent } from './smartcase/smartcase.component';
import { PaidinComponent } from './paidin/paidin.component';
import { HomeCmsComponent } from './home-cms/home-cms.component';
import { CustomersComponent } from './customers/customers.component';
import { PartnersComponent } from './partners/partners.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { CategoryComparisonComponent } from './category-comparison/category-comparison.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { MarketsComponent } from './markets/markets.component';
import { FaqcategoryComponent } from './faqcategory/faqcategory.component';
import { TypeComparisonComponent } from './type-comparison/type-comparison.component';
import { AdminbankdetailsComponent } from './adminbankdetails/adminbankdetails.component';
import { AdminbankinfoComponent } from './adminbankinfo/adminbankinfo.component';
import { IpblockComponent } from './ipblock/ipblock.component';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';


const components = [
  CmssComponent,
  FaqsComponent,
  ContentmanageComponent

];

@NgModule({
  imports: [
    ContentmanageRoutingModule,
    NgxDatatableModule,
    FormsModule, 
    CKEditorModule,
    ReactiveFormsModule,
    ThemeModule.forRoot(),
    CommonModule,
    NgbModule.forRoot(),


  ],
  declarations: [
    ...components,
    ContactComponent,
    MetacontentComponent,
    FeatureComponent,

    LearnmoreComponent,
    SmartcaseComponent,

    PaidinComponent,
    HomeCmsComponent,
    CustomersComponent,
    PartnersComponent,
    ComparisonComponent,
    CategoryComparisonComponent,
    BenefitsComponent,
    MarketsComponent,
    FaqcategoryComponent,
    TypeComparisonComponent,
    AdminbankdetailsComponent,
    AdminbankinfoComponent,
    IpblockComponent,
    BankdetailsComponent
  ],
})
export class ContentmanageModule { }
