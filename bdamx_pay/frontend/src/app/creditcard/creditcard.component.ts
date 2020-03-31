import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService';
import { ToastrService } from 'ngx-toastr';
import { FormsModule,NgForm }   from '@angular/forms';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  cardDetails = [];
  card :any={};
  editData = false;
  editId;
  cardList=[];
  bank:any = {};

  constructor(private apiService: ApiService,
  	private toastr: ToastrService) { }

  ngOnInit() {

  	this.apiService.getPageHeader('Credit Card Details');
  	this.cardLists();

  }

   cardLists(){
  	this.apiService.GetData('card/getcardetails').subscribe((result:any)=>{
  		if(result.status){
  			this.cardDetails = result.data;
  		}
  	})
  }

  saveCard(form:NgForm){
  	const data = {
  		accountholdername:form.value.accountholdername,
  		cardnumber:form.value.cardnumber,
  		expiry:form.value.expiry.split('/')[0],
      year:form.value.expiry.split('/')[1],
  		cvv:form.value.cvv
  	}
    if(this.editData){
      Object.assign(data, {_id:this.editId})
    }

  	this.apiService.SenData('card/addCard',data).subscribe((result:any)=>{
  
  		if(result.status){
  		this.toastr.success(result.msg);
        form.resetForm();
        this.cardLists();
        this.editData = false;
  		} else {
  			this.toastr.error(result.msg);
  		}
  	})
  }

  editcard(cardDetails){
   
    this.card.accountholdername = cardDetails.accountholdername;
    this.card.cardnumber = cardDetails.cardnumber;
    this.card.expiry  = cardDetails.expiry+'/'+cardDetails.year;
    this.card.cvv  = cardDetails.cvv;
    this.editId = cardDetails._id;
    this.editData = true;
  }


}
