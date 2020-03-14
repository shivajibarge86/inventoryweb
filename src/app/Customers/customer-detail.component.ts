import {Component} from '@angular/core';
import {ICustomer } from './customers';
import {CustomerService} from './customer.sevice';
import {Location} from '@angular/common';
import {ActivatedRoute ,Router} from '@angular/router';


@Component({
    templateUrl: 'customer-detail.component.html',
    //styleUrls :['customer-detail.component.css']
})

export class CustomerDetailComponent {
    pageTitle :string ="Customer Detail";

    customer : ICustomer;
    errorMessage :string;

    constructor( private customerService:CustomerService,
        private _route :ActivatedRoute,private router:Router,private location:Location){
        
     }

     ngOnInit(): void {
         if(!this.customer){
             let customerId=+ this. _route.snapshot.paramMap.get('customerId');
             this.pageTitle +=`:${customerId}`;
             this.getCustomer(customerId);
         }
         
     }

     getCustomer(customerId:number){
        this.customerService.getCustomer(customerId).subscribe(result=>this.customer =result 
            ,error=> this.errorMessage =<any>error);
     }

     previous(){
        //this.router.navigate(['/customers']);
        this.location.back();
     }

}
