import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerGuardService } from './customer-guard.service';
import { AuthGuard } from '../_helpers';




@NgModule({
  imports: [
    RouterModule.forChild([
        {path:'customers',component:CustomerListComponent },
        {path:'customers/:customerId',canActivate:[CustomerGuardService],component:CustomerDetailComponent},
    ])
],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }