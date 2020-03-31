import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from '../services/apiService';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
	userId = localStorage.getItem('userId');
  balanceData = [];
  img_qr='';
  coinAddress;
  selectedCurrency;
  modalRef: BsModalRef;
  constructor(
  	private apiService: ApiService,
  	private toastr: ToastrService,
    private router: Router,
    private _clipboardService: ClipboardService,
    private modalService: BsModalService) { }


  ngOnInit() {
    this.apiService.getPageHeader('Balance');
    this.apiService.loader(true);
    var sendata = {userId:this.userId}
  	this.apiService.GetData("custom/getBalance").subscribe((result:any)=>{
      this.apiService.loader(false);
      this.balanceData = result.data;
  	});
  }

  deposit(currencySymbol){
    this.apiService.depositCurrency(currencySymbol);
    this.router.navigateByUrl('/deposit');
  }

  withdraw(currencySymbol){
    this.apiService.withdrawCurrency(currencySymbol);
    this.router.navigateByUrl('/withdraw');
  }

  openQR(template: TemplateRef<any>, currencySymbol) {
    this.apiService.SenData('custom/checkingAddress',{currency:currencySymbol}).subscribe((result:any)=>{
      if(result.data && result.data.address){
        this.coinAddress = result.data.address;
        this.modalRef = this.modalService.show(template);
        this.img_qr = 'https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=' + this.coinAddress + '&choe=UTF-8&chld=L';
      }else {
        this.toastr.error("Your Wallet for corresponding currency is not created yet");
        this.deposit(currencySymbol);
      }
    });
  }
  copyText(val: string) {
    this._clipboardService.copyFromContent(val)
    this.toastr.success("Address Copied", 'SUCCESS');
  }



}
