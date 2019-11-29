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
  admindetails:any
  menu: NbMenuItem[]=[];
  constructor(
    private commonservice: CommonService,
    private cookieService: CookieService
    ) {
          var adminrole = this.cookieService.get('role')
      if(+adminrole == 1) {
        this.menu = MENU_ITEMS;
      }
      else if(+adminrole == 0) {
          var data = {"_id":this.cookieService.get('session')}
          this.commonservice.requestData('admin/getsubadmin',data).subscribe(resData => {
            for (var i = 0; i < MENU_ITEMS.length; i++) {
              if(MENU_ITEMS[i].children == undefined){
                if(resData[MENU_ITEMS[i].key] == 1){
                  var datas={
                   title: MENU_ITEMS[i].title,
                   icon: MENU_ITEMS[i].icon,
                   link: MENU_ITEMS[i].link,
                  }
                  this.menu.push(datas)
                }
              }
              else{
                var check = false;
                var childrens = [];
                for (var j = 0; j < MENU_ITEMS[i].children.length; j++) {
                  if(resData[MENU_ITEMS[i].children[j].key]==1){
                    var datas1={
                     title: MENU_ITEMS[i].children[j].title,
                     icon: MENU_ITEMS[i].children[j].icon,
                     link: MENU_ITEMS[i].children[j].link,
                    }                    
                    childrens.push(datas1)
                    check = true;
                  }
                }
                if(check){
                  var push_data={
                    'title':MENU_ITEMS[i].title,
                    'icon':MENU_ITEMS[i].icon,
                    'link':MENU_ITEMS[i].link,
                    'children':childrens
                  }
                  this.menu.push(push_data)
                }
              }
            }
          })

      }
  }
}
