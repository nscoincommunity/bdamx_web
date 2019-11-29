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
  ],
})
export class ContentmanageModule { }
