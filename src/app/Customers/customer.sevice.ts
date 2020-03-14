import { Injectable } from '@angular/core';
import {ICustomer } from './customers';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import{ Observable,throwError} from 'rxjs';
import{ catchError} from 'rxjs/operators';


@Injectable()

export class CustomerService{
  private _dataUrl=  "http://bankingcustomers.azurewebsites.net/api/customers";

  constructor(private _http:HttpClient){

  }

  httpOptions={
      headers : new HttpHeaders({
          'Content-Type':'application/json'
      })
  }
  getCustomers() : Observable<ICustomer[]>{
      return this._http.get<ICustomer[]>(this._dataUrl)
      .pipe(catchError(this.handleError));
  }

  handleError(error) {

    let errorMessage='';

    if(error.error instanceof ErrorEvent){
        errorMessage =error.error.message;

    }else {
        errorMessage =`Error Code: ${error.status}\nMessage : ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);

  }

  getCustomer(id:number) : Observable<ICustomer>{
    return this._http.get<ICustomer>(this._dataUrl+'/'+id)
    .pipe(catchError(this.handleError));
}


}