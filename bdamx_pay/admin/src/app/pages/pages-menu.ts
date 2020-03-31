  import { NbMenuItem } from '@nebular/theme';

  export const MENU_ITEMS = [

  {
  title: 'Dashboard',
  icon: 'nb-home',
  link: '/pages/dashboard',
  key:'dashboard'
  },
  {
  title: 'User details',
  icon: 'nb-compose',
  link: '/pages/users',
  key:'user_details'
  },
  // {
  // title: 'Token details',
  // icon: 'nb-compose',
  // link: '/pages/Token_details',
  // key:'token_details'
  // },
  // {
  // title: 'Admin Withdraw',
  // icon: 'nb-keypad',
  // link: '/pages/Admin_withdraw',
  // key:'admin_withdraw'
  // },
  {
  title: 'Currency Management',
  icon: 'nb-keypad',
  link: '/pages/banners',
  children: [
  {
  title: 'Currency Details',
  icon: 'nb-compose',
  link: '/pages/currency_management/currency_details',
  key:'currency_details'
  },
  {
  title: 'Pair details',
  icon: 'nb-compose',
  link: '/pages/currency_management/pair_details',
  key:'pair_details'
  }
  ],
  },
  {
  title: 'History Management',
  icon: 'nb-keypad',
  link: '/pages/History_management',
  children: [
  {

  title: 'Deposit',
  icon: 'nb-compose',
  link: '/pages/History_management/deposite',
  key:'deposit'
  },
  {
  title: 'Withdraw',
  icon: 'nb-compose',
  link: '/pages/History_management/withdraw',
  key:'withdraw'
  },
  {
  title: 'Profit',
  icon: 'nb-compose',
  link: '/pages/History_management/profit',
  key:'profit'
  },
  // {
  // title: 'Trade History',
  // icon: 'nb-compose',
  // link: '/pages/History_management/tradehistory',
  // key:'trade_history'
  // },
  // {
  // title: 'Order History(Active)',
  // icon: 'nb-compose',
  // link: '/pages/History_management/orderactive',
  // key:'history_active'
  // },
  // {
  // title: 'Order History(Cancelled)',
  // icon: 'nb-compose',
  // link: '/pages/History_management/ordercancel',
  // key:'history_cancelled'
  // },
  // {
  // title: 'Profit',
  // icon: 'nb-compose',
  // link: '/pages/History_management/profit',
  // key:'profit'
  // },
  // {
  // title: 'Currency Profit',
  // icon: 'nb-compose',
  // link: '/pages/History_management/currencyprofit',
  // key:'currency_profit'
  // }
  ],
  },
  {
  title: 'IP Block Management',
  icon: 'nb-compose',
  link: '/pages/contentmanage/ipblock',
  key:'ip_block_manage'
  },
  {
  title: 'User Management',
  icon: 'nb-compose',
  link: '/pages/usermanage',
  key:'usermanage'
  },
  {
  title: 'Exchange',
  icon: 'nb-compose',
  link: '/pages/History_management/exchangehistory',
  key:'Exchange'
  },
  {
  title: 'Bank Details',
  icon: 'nb-compose',
  link: '/pages/contentmanage/bankdetails',
  key:'bank_details'
  },
  {
  title: 'Admin Bank Details',
  icon: 'nb-compose',
  link: '/pages/contentmanage/adminbankdetails',
  key:'admin_bank_details'
  },
  {
  title: 'Admin Bank Info',
  icon: 'nb-compose',
  link: '/pages/contentmanage/adminbankinfo',
  key:'admin_bank_info'
  },
  {
  title: 'Profile Settings',
  icon: 'nb-gear',
  link: '/pages/profile_settings',
  key:'profile_settings'
  },
  {
  title: 'Email templates',
  icon: 'nb-gear',
  link: '/pages/email_template',
  key:'email_template'
  },   
  {
  title: 'Sub-admin',
  icon: 'nb-gear',
  link: '/pages/Sub-admin',
  key:'sub_admin',
  },

  {
  title: 'Site Settings',
  icon: 'nb-gear',
  link: '/pages/Site_settings',
  key:'site_settings'
  },

  {
  title: 'Content Management',
  icon: 'nb-keypad',
  link: '/pages/contentmanage',
  children: [
  {
  title: 'CMS Page',
  icon: 'nb-compose',
  link: '/pages/contentmanage/cmss',
  key:'cms_page'
  },
  {
  title: 'FAQ Category',
  icon: 'nb-compose',
  link: '/pages/contentmanage/faqcategory',
  key:'faqcategory'
  },
  {
  title: 'FAQ',
  icon: 'nb-compose',
  link: '/pages/contentmanage/faqs',
  key:'faq'
  },
  {
  title: 'Benefits',
  icon: 'nb-compose',
  link: '/pages/contentmanage/benefits',
  key:'benefits'
  },
  {
  title: 'Vision & Mission',
  icon: 'nb-compose',
  link: '/pages/contentmanage/contact',
  key:'news'
  },
  {

  title: 'Markets - Problem / Solutions',
  icon: 'nb-compose',
  link: '/pages/contentmanage/markets',
  key:'markets'
  },
  {
  title: 'Platform Features',
  icon: 'nb-compose',
  link: '/pages/contentmanage/feature',
  key:'feature'
  },
  
  {
 
  title: 'Get Paid in',
  icon: 'nb-compose',
  link: '/pages/contentmanage/paidin',
  key:'paidin'
  },
  {
  title: 'Strategic Partnerships',
  icon: 'nb-compose',
  link: '/pages/contentmanage/partners',
  key:'partners'
  },
  {
  title: 'Press Mentions',
  icon: 'nb-compose',
  link: '/pages/contentmanage/customers',
  key:'customers'
  },
  {
  title: 'Home CMS Page',
  icon: 'nb-compose',
  link: '/pages/contentmanage/home-cms',
  key:'home-cms'
  },
  {
  title: 'Category Comparison',
  icon: 'nb-compose',
  link: '/pages/contentmanage/category-comparison',
  key:'home-cms'
  },
  {
  title: 'Comparison',
  icon: 'nb-compose',
  link: '/pages/contentmanage/comparison',
  key:'home-cms'

  },
  {
  title: 'Type Comparison',
  icon: 'nb-compose',
  link: '/pages/contentmanage/type',
  key:'type'
  },
  {
  title: 'Meta content',
  icon: 'nb-compose',
  link: '/pages/contentmanage/metacontent',
  key:'meta_content'
  }
  ],
  }

// ,
//   {
//   title: 'Contact us',
//   icon: 'nb-compose',
//   link: '/pages/contactus',
//   key:'contact_us'
//   }   

  ];
