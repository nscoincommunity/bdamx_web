import { Component,Input, OnInit} from '@angular/core';
// import { NbMenuService, NbSidebarService } from '@nebular/theme';
// import { Router,ActivatedRoute } from '@angular/router';
// import { MENU_ITEMS } from './pages-menu';
import { CookieService } from 'ngx-cookie-service';
import { CommonService } from '../../app/common.service';
// import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { MENU_ITEMS } from './pages-menu';
import { NbMenuItem } from '@nebular/theme';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {
  menu: NbMenuItem[]=[];
  
  constructor() { 
  this.menu = MENU_ITEMS;
}
}
