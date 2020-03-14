import { Injectable } from '@angular/core';
import {ICustomer } from './customers';

import { CanActivate,ActivatedRouteSnapshot,Router} from '@angular/router';
import{ Observable,throwError} from 'rxjs';
import{ catchError} from 'rxjs/operators';


@Injectable()

export class CustomerGuardService{

    constructor(private router:Router){

    }

   canActivate(route : ActivatedRouteSnapshot) : boolean{
       let customerId =+ route.url[1].path;
       if(isNaN(customerId)){
           alert("Invalid Account Number");
           this.router.navigate(['/customers']);
           return false;
       }

    return true;

   }

}