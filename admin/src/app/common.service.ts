import { Injectable } from '@angular/core';
import {
    Router,
    Event,
    NavigationStart, RoutesRecognized,RouteConfigLoadStart,
    RouteConfigLoadEnd, NavigationEnd, NavigationCancel, NavigationError
} from '@angular/router';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx'

declare var google: any;
import { BackendHost } from '../assets/varconfig';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
// import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
// import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CommonService {
	headers: Headers;
  options: RequestOptions;
  host = window.location.hostname;
  proto = window.location.protocol;

  serviceHost = BackendHost;
  usersrch: any;
  constructor(private http:Http,private router : Router) {
  	this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.headers.append("Access-Control-Allow-Origin", '*');
    this.headers.append("Access-Control-Allow-Methods", 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    this.headers.append("Access-Control-Allow-Headers", 'Origin, Content-Type, X-Auth-Token');
    this.headers.append("X-XSS-Protection","1; mode=block")
    this.headers.append("Cache-Control", "public, max-age=2592000");
    this.headers.append("Expires", new Date(Date.now() + 2592000000).toUTCString());
    this.options = new RequestOptions({ headers: this.headers });
  }

  requestData(url,values): Observable<any> {
    return this.http
    .post(this.serviceHost+url, values, this.options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  getData(url): Observable<any> {
    return this.http
    .get(this.serviceHost+url, this.options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  setusersrchvalue(usrch): Observable<any> {
     this.usersrch = usrch;
     return this.usersrch;
  }
  
  rounds(value,length=8){
    return value.toFixed(length?length:value);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    // console.log(error)
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.log(errMsg);
    return Observable.throw(errMsg);
  }

   
  getData_externalurl(url): Observable<any> {
    return this.http
    .get(url)
    .map(this.extractData)
    .catch(this.handleError);
  }

//File saver

  public exportAsExcelFile(json: any[], excelFileName: string): void {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);      
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, excelFileName);
    }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName  + EXCEL_EXTENSION);
  }


}
