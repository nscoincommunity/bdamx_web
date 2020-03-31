import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})

export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:false,
    autoplayTimeout:6000,
    autoplayHoverPause:false,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin:15,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin:15,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin:15,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

 itemsPerSlide = 5;
  singleSlideOffset = true;
 
  strategicData = [];
  pressData = [];
  paidinData = [];
  coinData=[{'currency':'Bitcoin'}];
  newsData=[];
  benefitUsers = [];
  benefitsData = [];
  marketProblems = [];
  marketSolutions = [];
  featureData = [];
  aboutUs;
  blockChain;
  marketOpportunity;
  platformApplication;
  gettingStarted;
  banner;
  siteData;
  currencyData;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
    this.apiService.loader(true);
  	this.apiService.get_benefits({title:'users'}).subscribe((result:any)=>{
      this.apiService.loader(false);
  		this.benefitUsers = result.data;
  	})

  	this.apiService.get_news().subscribe((result:any)=>{
      console.log("newssss",result);
  		this.newsData = result.data;
  	})

  	this.apiService.get_paiddata().subscribe((result:any)=>{
  		this.paidinData = result.data;
  	})

  	this.apiService.get_pressdata().subscribe((result:any)=>{
  		this.pressData = result.data;
  	})
  	this.apiService.get_strategicdata().subscribe((result:any)=>{
  		this.strategicData = result.data
  	});

  	this.apiService.get_benefits({title:'developers'}).subscribe((result:any)=>{
  		this.benefitsData = result.data;
  	});

  	this.apiService.get_markets({title:'problem'}).subscribe((result:any)=>{
  		this.marketProblems = result.data;
  	})

  	this.apiService.get_markets({title:'solution'}).subscribe((result:any)=>{
  		this.marketSolutions = result.data;
  	})

    this.apiService.get_feature().subscribe((result:any)=>{
      this.featureData = result.data;
    });

    this.apiService.get_homecms({page_name:'bdam_pay', link: 'aboutUs'}).subscribe((result:any)=>{
      this.aboutUs = result.data[0];
    });

    this.apiService.get_homecms({page_name:'bdam_pay', link: 'blockchain'}).subscribe((result:any)=>{
      this.blockChain = result.data[0];
    });

    this.apiService.get_homecms({page_name:'bdam_pay', link: 'marketopportunity'}).subscribe((result:any)=>{
      this.marketOpportunity = result.data[0];
    });
    this.apiService.get_homecms({page_name:'bdam_pay', link: 'platformApplication'}).subscribe((result:any)=>{
      this.platformApplication = result.data[0];
    });

    this.apiService.get_homecms({page_name:'bdam_pay', link: 'gettingStarted'}).subscribe((result:any)=>{
      this.gettingStarted = result.data;
    });

    this.apiService.get_homecms({page_name:'bdam_pay', link: 'slide'}).subscribe((result:any)=>{
      this.banner = result.data;
    });

    this.apiService.get_sitesettings().subscribe((result:any)=>{
      console.log(result,'rresss');
      this.siteData = result['data'];
      
    });

    this.apiService.get_currencyusd().subscribe((result:any)=>{
      this.currencyData = result.data.filter(items=>{
        return items.curnType == 1;
      });
      console.log(this.currencyData,'currencyData')
    });

  }

  

  

}
