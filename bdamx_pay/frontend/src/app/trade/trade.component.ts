import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {
public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };

  constructor() { 
  
  }

  ngOnInit() {
  }

}
