import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
// used to create fake backend
import { fakeBackendProvider,JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WelcomeComponent } from './Home/welcome.component';
import { CustomerModule } from './Customers/customer.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './_components';
import { ProductListComponent } from './product-details/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
     WelcomeComponent,
     LoginComponent,
     RegisterComponent,
     AlertComponent,
     ProductListComponent
    ],
  imports: [
    BrowserModule,
    MatTableModule ,
    FormsModule,
    ReactiveFormsModule,
    CustomerModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
