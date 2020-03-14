import {Component} from '@angular/core';
import {ICustomer } from './customers';
import {CustomerService} from './customer.sevice';


@Component({
    selector: 'customers',
    templateUrl: 'customer-list.component.html',
    styleUrls :['customer-list.component.css']
})

export class CustomerListComponent {

    pageTitle :string ="Customer List";

    imageWidth :number =100;
    imageMargin : number =2;
    showimage: boolean = false;
    listFilter :number ;
    toggleImage() :void {
        this.showimage = !this.showimage;
    }

    customers : ICustomer[];
    errorMessage :string;
     constructor( private customerService:CustomerService){
        console.log("1");
     }
    ngOnInit(): void {
        console.log("onInit life cycle hooks");
       this.customerService.getCustomers().subscribe(result=>this.customers =result ,error=> this.errorMessage =<any>error);
    }

   

}