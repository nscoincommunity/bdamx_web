import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannersRoutingModule } from './banners-routing.module';
import { MainbannerComponent } from './mainbanner/mainbanner.component';
import { AffiliatebannerComponent } from './affiliatebanner/affiliatebanner.component';
import { BannersComponent } from './banners.component';


const components = [
  MainbannerComponent,
  AffiliatebannerComponent,
  BannersComponent
];

@NgModule({
  imports: [
    BannersRoutingModule,
    NgxDatatableModule,
    FormsModule, 
    ReactiveFormsModule,
    ThemeModule.forRoot(),
    CommonModule,
    NgbModule.forRoot(),


  ],
  declarations: [
    ...components
  ],
})
export class BannersModule { }
