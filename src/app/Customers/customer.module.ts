import { NgModule } from '@angular/core';
import { CustomerListComponent } from './customer-list.component';
import { CustomerFilterPipe } from './customer-pipe.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerGuardService } from './customer-guard.service';
import { CustomerService } from './customer.sevice';
import { SharedModule } from '../shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
    imports:[
        SharedModule,
        CustomerRoutingModule
    ],
    declarations:[
        CustomerListComponent,
        CustomerFilterPipe,
        CustomerDetailComponent
    ],
    providers:[
        CustomerGuardService,
        CustomerService]
})

export class CustomerModule{

}