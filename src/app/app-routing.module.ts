import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './Customers/customer-list.component';
import { CustomerDetailComponent } from './Customers/customer-detail.component';
import { WelcomeComponent } from './Home/welcome.component';
import { CustomerGuardService } from './Customers/customer-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers';
import { ProductListComponent } from './product-details/product-list/product-list.component';


const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'productlist', component: ProductListComponent },    
    {path:'welcome',component:WelcomeComponent},
    {path:'customers',component:CustomerListComponent},
    {path:'',redirectTo: 'login',pathMatch:'full'},
    {path:'**',redirectTo: 'login',pathMatch:'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
