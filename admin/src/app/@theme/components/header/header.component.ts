import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { LayoutService } from '../../../@core/data/layout.service';
import { CookieService } from 'ngx-cookie-service';
import { CommonService } from '../../../../app/common.service';
import { Router,ActivatedRoute } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'ngx-header',
  providers:[TranslateService,AnalyticsService,NbMenuService,UserService,NbSidebarService,CookieService,CommonService,LayoutService],  
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  logo: any;
  user: any;
  admindetails:any
  lastUrl: string;
  returnUrl: string = 'pages/dashboard';
  lang_tran:any;
  lang_name:any;
  sitelogo:any;
  languageList:any={};


  userMenu = [{ title: 'Profile',link: '/pages/profile_settings' }, { title: 'Log out', link:'/BdaPLB45MKLXM8957LOO/logout' }];

	constructor(
		private sidebarService: NbSidebarService,
		private menuService: NbMenuService,
		private translate:TranslateService,

		private analyticsService: AnalyticsService,
		private layoutService: LayoutService,private userService: UserService,
		private commonservice: CommonService,
		private cookieService: CookieService,protected router: Router,
		private route: ActivatedRoute
	) {


    // if(this.cookieService.get('session') == "") {
    //   this.router.navigateByUrl( './auth/login' );
    // }
        // this.getLanguage();



     // translate.addLangs(["zh-Hans", "en"]);

    //  if(localStorage.langauge_name==undefined || localStorage.langauge_name==''|| localStorage.langauge_name==null){
    //   this.lang_tran = 'English';
       
    // }
    // else if(localStorage.langauge_name == 'en'){
    //   this.lang_tran = 'English';
     
    // }
   
    // else{
    //   this.lang_tran = 'Chinese';
      
    // }

    //  if (localStorage.langauge_name){
    //   var myDropdownLang = localStorage.langauge_name;
    // }

     // setTimeout(() => {
     //            this.setLang(myDropdownLang);
     //          }, 3000);


  }

  ngOnInit() {
    this.commonservice.getData('sitesetting/get_settings').subscribe(resData => {      
      this.sitelogo = resData.data.site_logo;
    });
    var data = {"_id" : this.cookieService.get('session')};
		this.commonservice.requestData('admin/get_admindetail',data).subscribe(resData => {
			this.admindetails = resData;
		});
  }


  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
   //language
  //  getLanguage() {
  //   this.commonservice.getData('newlanguages/languagelist')
  //      .subscribe(resData => {
  //       this.languageList = resData.data;

  //       console.log("language",this.languageList)

  //     });
  // }
  // setLang(lang) {
  //   if(lang =="zh-Hans"){
  //    this.translate.use(lang);
  //    this.lang_name="Chinese";
  //    localStorage.setItem("langauge_name",lang);
    
  //   }
  //     else {

  //     this.translate.use(lang);
  //     this.lang_name="English";

  //     localStorage.setItem("langauge_name",lang);
  // }
  // }

}
