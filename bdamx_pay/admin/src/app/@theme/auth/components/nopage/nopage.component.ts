import { Component, Inject } from '@angular/core';

@Component({
  selector: 'ngx-request-password-page',
  styleUrls: ['./nopage.component.scss'],
  providers: [],
  template: `    
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>4<span></span>4</h1>
      </div>
      <h2>Oops! Page Not Be Found</h2>
      <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
    </div>
  </div>
  `,
})
export class nopageComponent {
  logo = "../../../../../assets/images/emoji.png";
  constructor() {}
}