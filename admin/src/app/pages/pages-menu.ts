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
      {
     title: 'Token details',
     icon: 'nb-compose',
     link: '/pages/Token_details',
     key:'token_details'
   },
   {
     title: 'Admin Withdraw',
     icon: 'nb-keypad',
     link: '/pages/Admin_withdraw',
     key:'admin_withdraw'
   },
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
        title: 'Trade History',
        icon: 'nb-compose',
        link: '/pages/History_management/tradehistory',
        key:'trade_history'
      },
      {
        title: 'Order History(Active)',
        icon: 'nb-compose',
        link: '/pages/History_management/orderactive',
        key:'history_active'
      },
      {
        title: 'Order History(Cancelled)',
        icon: 'nb-compose',
        link: '/pages/History_management/ordercancel',
        key:'history_cancelled'
      },
      {
        title: 'Profit',
        icon: 'nb-compose',
        link: '/pages/History_management/profit',
        key:'profit'
      },
      {
        title: 'Currency Profit',
        icon: 'nb-compose',
        link: '/pages/History_management/currencyprofit',
        key:'currency_profit'
      }
      ],
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
        title: 'FAQ',
        icon: 'nb-compose',
        link: '/pages/contentmanage/faqs',
        key:'faq'
      },
      {
        title: 'News',
        icon: 'nb-compose',
        link: '/pages/contentmanage/contact',
        key:'news'
      },
      {
        title: 'Features',
        icon: 'nb-compose',
        link: '/pages/contentmanage/feature',
        key:'feature'
      },
      {
        title: 'Meta content',
        icon: 'nb-compose',
        link: '/pages/contentmanage/metacontent',
        key:'meta_content'
      }
      ],
  },
    
    
     {
     title: 'Contact us',
     icon: 'nb-compose',
     link: '/pages/contactus',
     key:'contact_us'
   }   

];
