import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DomSanitizer, SafeResourceUrl, DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Transport from '@ledgerhq/hw-transport-u2f';
import AppEth from '@ledgerhq/hw-app-eth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Web3 from 'web3';
declare let window;
import TrezorConnect from 'trezor-connect';
import ScatterJS from 'scatter-js/dist/scatter.esm';
import {HttpClient} from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import keythereum from 'keythereum';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
  captcha='';
  response = '';
  Blockchains = {
    EOSIO:'eos',
    Ethereum:'eth',
    Tron:'trx'
  };  

  blockchain = this.Blockchains.EOSIO;
  requiredFields = {
    personal:['firstname', 'lastname', 'email', 'birthdate'],
    location:['phone', 'address', 'city', 'state', 'country', 'zipcode']
  };  

  network = environment.EOS_Details
  logotp=false;
  logotp1=false;
  regotp=true;
  regotp1=false;
  regotp2=true;
	siteLogo;
  walletType;
  walletoption='';
  display=true;
  trezor_select;
  display1=false
  homeActive = false;
  loginForm: FormGroup;
  registerForm: FormGroup;
  address = [];
  wallettype;
  TreaddressLength;
  treaddresss 
  useroption=1;
  walletaddress;
  walletSeleted;
  selectedKey;
  derivationnew:'';
  show_login_btn = true;
  user_id = localStorage.getItem('address');
  basecoin = localStorage.getItem('Basecoin');
  addressledger:any;
  path;
  addressLength;
  ledgerDerivationPath;
  readOnly;
  otpstatus=0;
  submitted = false;
  submitted1 = false;
  showKeystoreFile = false;
  keyStoreFile;
  keyStorePassword;
  web3
  
  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    @Inject(DOCUMENT) private _document,
    private router:Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cookieService: CookieService) {

   }

  ngOnInit() {
    var getadd = localStorage.getItem("address");
    if(getadd != "" && getadd != null) {
      window.ethereum.on('accountsChanged', function (accounts) {
        var addresstype = localStorage.getItem("addresstype");
        if(addresstype=='metamask' && getadd != "" && getadd != null && getadd != accounts[0] && accounts[0] != "" )
        {
          localStorage.setItem("address", accounts[0]);
          location.reload()
        }
      })
    }
  	this.apiService.get_sitesettings().subscribe((resData:any)=>{
  		this.siteLogo = resData.data.site_logo;
  		this._document.getElementById('linkSiteFavicon').setAttribute('href', resData.data.favicon);
      if(this.router.url === '/'){
        this.homeActive = true;
      }
  	});

    this.loginForm = this.formBuilder.group({
      otp: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.registerForm = this.formBuilder.group({
      otp: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    if((this.user_id == null || this.user_id == undefined || !this.user_id || this.user_id.trim()=='' )&&(this.basecoin == null || this.basecoin == undefined || !this.basecoin || this.basecoin.trim()=='' )){
      this.show_login_btn = false;
    }
  }

  get f() { return this.loginForm.controls; }
  get f1() { return this.registerForm.controls; }


  submitwallet(){
   
    if(typeof this.walletType == undefined || typeof this.walletType == "undefined"){
      this.display=true; 
      this.display1=false;
      this.toastr.error("Please choose anyone of the wallet to login","ERROR")
    }
    else{
     
      localStorage.setItem("addresstype", this.walletType);
      this.display=false; 
      this.display1=true;
      this.walletoption = this.walletType;
    }
  }

  Changeuser(type){
    this.useroption=type;
  }
  
  radioChange(event){
    this.walletType = event;
    this.walletSeleted = event;
  }

  close_model(){
    var button=document.getElementById('cls_btn');
    button.click();         
    let scrollToTop = window.setInterval(() => {
      this.display = true;
      this.display1 = false;
      this.walletType = undefined;
      this.walletSeleted = ''; 
      window.clearInterval(scrollToTop);
    },800);   
  }

  async walletoptions(type){
    if(type == "metamask"){
      this.wallettype = "metamask";
      let instance = this;   
      if(typeof window.web3 !== 'undefined'){
        window.web3 = new Web3(window.web3.currentProvider)         
        var account = await window.ethereum.enable();
        const defaultAccount = account
        if(defaultAccount.length > 0){
          window.web3.eth.net.getNetworkType((err, netId) => {
            //console.log("netId",netId)
            //"main" for main network
            // "morden" for the morden test network
            // "ropsten" for the ropsten test network
            // "private" for undetectable networks.
            if(netId != environment.ETH_ENV) {
              this.toastr.error("Please connect metamask to "+environment.ETH_ENV+" ethereum network","ERROR");
              return false;
            }
            else{
            var mymetamask= defaultAccount[0];
            localStorage.setItem("addresstype", this.wallettype);
            localStorage.setItem("derivationPath", "");
            localStorage.setItem("address", mymetamask.toLowerCase());
            localStorage.setItem("Basecoin", this.walletType);
            var button=document.getElementById('cls_btn');
            button.click();      
            this.display=true;
            this.display1=false;
            this.router.navigate(['/funds']);
            }
          });
        }
        else{
        this.toastr.error("Your metamask account is locked please unlock","ERROR")
        }
      }
      else{
      this.toastr.error("Metamask extension not added on your browser","ERROR")
      }
    }
    else if(type == "trezor"){
      this.wallettype = "trezor";
      try{
        this.TreaddressLength = 5;
        this.treaddresss = [];
        await this.ListTrezorAddress();
      }
      catch (e) {
        this.toastr.error("Please unlock your trezor","ERROR");
      }
    }
    else if(type == "ledger"){
      this.wallettype = "ledger";
    }
    else if(type == "keystoreFile"){
      this.wallettype = "keystoreFile";
      this.showKeystoreFile = true;
    }
   // localStorage.setItem("address", this.walletaddress);
  }

  onFileChange(event){
    
    this.keyStorePassword = '';
         const fileReader = new FileReader();
         fileReader.readAsText(event.target.files[0], "UTF-8");
         fileReader.onload = () => {
           const result = fileReader.result;
           this.keyStoreFile = result;
        }
        fileReader.onerror = (error) => {
          console.log(error);
        }
  }

  async keystore_unlock(){
    if(this.keyStorePassword.trim() != ''){
      var privateValue = await this.isPrivate(JSON.parse(this.keyStoreFile),this.keyStorePassword);
      if(privateValue){
        var privateKey = privateValue;
      }
      else{
        this.toastr.error("Please provide valid file and password!","ERROR");
        return false;
      }
      var re = /[0-9A-Fa-f]{6}/g;
      if(re.test(privateKey)) {
        
        var account = this.getAccount(privateKey);
        if(account){
          var encrypt = CryptoJS.AES.encrypt(privateKey, '9FunEwVUN7QGAq88&-Q2').toString();
          this.cookieService.set( 'SGUJypUd+pV9aEa6R_6s', encrypt );        
          localStorage.setItem("addresstype", this.wallettype);
          localStorage.setItem("address", account.address.toLowerCase());
          // localStorage.setItem("privateKey", account.privateKey);
          localStorage.setItem("Basecoin", 'ETH');
          this.toastr.success("Account unlocked successfully","SUCCESS");
          var button=document.getElementById('cls_btn');
            button.click();  
          this.router.navigateByUrl('/funds');
        }
        else{
          this.toastr.error("Private key does not satisfy the requirements (ie. it is invalid)!","ERROR");
        }
      } 
      else{
        this.toastr.error("Private key does not satisfy the requirements (ie. it is invalid)!","ERROR");
      }    
    }
    else{
      this.toastr.error("Please enter password to continue!","ERROR");
    }
  }

  getAccount (privateKey) {
    try {
      window.web3 = new Web3(window.web3.currentProvider) 
      var account = window.web3.eth.accounts.privateKeyToAccount(privateKey);
    } catch (e) {
      console.log('privateKey',e)
      return false;
    }
    return account;
  }  

  isPrivate (jsonValue,jsonPassword) {
    try {
      var privateKey = keythereum.recover(jsonPassword, jsonValue);
      return '0x'+privateKey.toString('hex');
    } catch (e) {
      console.log('privateKey',e)
      return false;
    }
  } 

  checkPath(incs){
    var newpath = '';
    if(incs==1){
      newpath = "m/44'/60'/0'";
    }
    if(incs==2){
      newpath = "m/44'/60'/0'/0";
    }
    if(incs==3){
      newpath = "custom";
    }
    if(this.path==newpath){
      return true;
    }
    else{
      return false;
    }
  }

  OTPSend(datas){
    if(datas.email.status == "INVALID"){
      this.toastr.error("Please enter email",'ERROR')
    }
    else{
      this.regotp=false;
      this.regotp1=true;
      var obj = {email:datas.email.value}
      this.apiService.send_otp(obj).subscribe((res:any)=>{
        this.regotp1=false;
        if(res.status){
          this.toastr.success(res.Message,"SUCCESS")
        }
        else{
          this.regotp=true;
          this.toastr.error(res.Message,'ERROR')
        }
      }) 
    }
  }

  loginsite(datas){
    if(datas.otp.status == "INVALID"){
      this.toastr.error("Please enter OTP",'ERROR')
    }
    else{
      this.logotp1 = true;
      var obj = {email:datas.email.value,otp:datas.otp.value}
      this.apiService.login_site(obj).subscribe((res:any)=>{
        this.logotp1 = false;
        if(res.status){
          this.otpstatus=0;
          this.toastr.success(res.Message,'SUCCESS');
          localStorage.setItem("address", res.originaladdress);
          localStorage.setItem("original_address", res.originaladdress);
          localStorage.setItem("Basecoin", this.walletType);
          var button=document.getElementById('cls_btn');
          button.click();          
          this.display=true;
          this.display1=false;
          this.router.navigate(['/funds']);
        }
        else{
          this.toastr.error(res.Message,'ERROR')
        }
      }) 
    }
  }

  loginOTP(datas){
    if(this.captcha){
      if(datas.email.status == "INVALID"){
        this.toastr.error("Please enter email",'ERROR')
      }
      else{
        this.logotp = true;
        var obj = {email:datas.email.value}
        this.apiService.login_send(obj).subscribe((res:any)=>{
          this.captcha='';
          this.logotp = false;
          if(res.status){
            this.otpstatus=1;
            this.toastr.success(res.Message,"SUCCESS");
          }
          else{
            this.toastr.error(res.Message,'ERROR')
          }
        }) 
      }
    }
    else{
      this.toastr.error("Verify captcha to continue",'ERROR')
    }
  }

  resolved(captchaResponse: string) {
  
     this.captcha = captchaResponse
     this.response = captchaResponse;
  }



  async addMore () {
    this.addressLength = this.addressLength+5;
    await this.loadLedgerAddresses();   
  }

  async loadLedgerAddresses(){
    try{
      var addressLength = this.addressLength;
      //console.log(addressLength, 'length');
      var start = addressLength - 5;
      var ledgerDerivationPath = this.ledgerDerivationPath;
      const transport = await Transport.create();
      var ledgerEth = new AppEth(transport);
      var ledgerWalletAddresses = this.address;

      for (var i = start; i < addressLength; i++) {
        const newAddressStr= ledgerDerivationPath+'/'+i;
        const ledgerQueryResponse = await ledgerEth.getAddress(newAddressStr);
        ledgerWalletAddresses[i] = {key:newAddressStr,address:ledgerQueryResponse.address};
      }

      this.address=ledgerWalletAddresses;
    }
    catch(e){
      this.toastr.error("Please unlock your ledger wallet","ERROR")
      console.log(e);
    }
  }


  onLedgerChanged(e){
    this.path = e.currentTarget.value;
    if(e.currentTarget.value=='custom'){
      this.readOnly = false;
      this.ledgerDerivationPath = '';
    }
    else{
      this.ledgerDerivationPath = e.currentTarget.value;
    }
    this.addressLength = 5;
    this.address = [];
    this.loadLedgerAddresses();
  }



  ListTrezorAddress(){
    TrezorConnect.manifest({
      email: 'info@bdamcoin.com',
      appUrl: 'https://192.168.4.7'
    });
    var start = this.TreaddressLength - 5;
    var bundlesel = [];
    var incre = 0
    for (var i = start; i <= this.TreaddressLength; i++) {
      bundlesel[incre]={path: "m/44'/60'/"+i+"'/0/0", showOnTrezor: false}
      incre=incre+1;
    }
    TrezorConnect.ethereumGetAddress({
      bundle: bundlesel
    }).then(function(result)
    {
      //console.log(result,'result from trezor');
      var incre = 0
      if(result.payload.length > 0){
        for (var i = start; i <= this.TreaddressLength; i++) {
          result.payload[incre].key = result.payload[incre].serializedPath;
          this.treaddresss[i]=result.payload[incre];
          incre=incre+1;
        }
      }
      
      this.treaddresss=this.treaddresss;
      //console.log(this.treaddresss ,'dsfasdfasdfasfdttttttttttt')
    }.bind(this));
  }

  TreaddMore () {
    this.TreaddressLength = this.TreaddressLength+5;
    this.ListTrezorAddress();
  }


  logoutuser(){
    this.show_login_btn=false;
    localStorage.removeItem('address');   
    localStorage.removeItem('original_address');    
    localStorage.removeItem('Basecoin');    
    localStorage.removeItem('addresstype');
    localStorage.removeItem('derivationPath');
    this.router.navigate(['/']);
  }

  checkKey(pathDeriv,type){
    //console.log('checkeddd')
    if(this.selectedKey==pathDeriv){
      return true;
    }
    else{
      return false;
    }
  }

  onNewDerivationChanged(pathDeriv){
    this.selectedKey=pathDeriv;
    this.derivationnew = this.address[pathDeriv].key;
    this.addressledger = this.address[pathDeriv].address;
  }

  onNewDerivationChanged1(pathDeriv){
    //console.log(pathDeriv, 'pppathhhtddderr')
    this.selectedKey=pathDeriv;
    this.derivationnew = this.treaddresss[pathDeriv]['key'];
    this.addressledger = this.treaddresss[pathDeriv]['address'];
  }


  submitWalletForm(){
    if(this.wallettype =='trezor' || this.wallettype =='ledger'){
      if(this.addressledger == "" || this.addressledger == null ){
        this.toastr.error("please select address","ERROR")
      }
      else{
        if(this.wallettype == 'trezor')
        {
          this.toastr.success("","Trezor Connected Successfully")
        }
        if(this.wallettype == 'ledger')
        {
          this.toastr.success("","Ledger Connected successfully")
        }
        
        localStorage.setItem("addresstype", this.wallettype);
        localStorage.setItem("derivationPath", this.derivationnew);
        localStorage.setItem("address", this.addressledger.toLowerCase());
        localStorage.setItem("Basecoin", this.walletType);
        var button=document.getElementById('cls_btn');
        button.click();      
        this.display=true;
        this.display1=false;
        this.router.navigate(['/funds']);
      }
    }
    else{

    }
  }

  scatterfun(){
   
    ScatterJS.scatter.connect("BDAMX").then(connected => {
      //console.log("conne"+connected);
      if(!connected){
        this.toastr.error('Install / Login scatter to continue',"ERROR")
      }
      else{
      ScatterJS.scatter.getIdentity({accounts: [this.network]}).then(identity => {
        //console.log('identity',identity);
        localStorage.setItem("EOSPublicKey",identity.publicKey);
        ScatterJS.scatter.getPublicKey(this.blockchain).then(publicKey => {
          //console.log('publicKey',publicKey)
          // const data = '';
          var account = {
            'name':identity.name,
            'authority':'active',
            'publicKey':publicKey
          };

          this.toastr.success("You are login successfully",'SUCCESS');
          localStorage.setItem("address", identity.accounts[0].name.toLowerCase());
          localStorage.setItem("original_address", publicKey);
          localStorage.setItem("Basecoin", this.walletType);
          var button=document.getElementById('cls_btn');
          button.click();          
          this.display=true;
          this.display1=false;
          this.router.navigate(['/funds']);
                  
        })
      }).catch(error => {
      console.log(error)
      })

      }
    });
  }

    onSubmitreg(){
      
    this.submitted1 = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    else{
    this.regotp2=false;
    this.http.get<{ip:string}>('https://jsonip.com')
    .subscribe( data => {
      
      var obj ={
        'email':this.registerForm.value.email,
        'otp':this.registerForm.value.otp,
        'ip':data.ip
      } 
      this.apiService.register_btc(obj).subscribe((res:any)=>{
        if(res.status){
          this.toastr.success(res.Message,"SUCCESS")
          localStorage.setItem("address", res.address);
          localStorage.setItem("original_address", res.address);
          localStorage.setItem("Basecoin", this.walletType);
          var button=document.getElementById('cls_btn');
          button.click();          
          this.display=true;
          this.display1=false;
          this.router.navigate(['/funds']);          
        }
        else{
          this.regotp2=true;
          this.toastr.error(res.Message,'ERROR')
        }
      }) 
    })      
    }
  }






}
