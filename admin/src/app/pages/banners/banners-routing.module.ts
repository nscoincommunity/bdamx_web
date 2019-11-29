import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainbannerComponent } from './mainbanner/mainbanner.component';
import { AffiliatebannerComponent } from './affiliatebanner/affiliatebanner.component';
import { BannersComponent } from './banners.component';


const routes: Routes = [{
  path: '',
  component: BannersComponent,
  children: [ {
    path: 'currency_details',
    component: MainbannerComponent,
  }, {
    path: 'pair_details',
    component: AffiliatebannerComponent,
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
export class BannersRoutingModule { }
