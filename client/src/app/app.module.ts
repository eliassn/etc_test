import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';	
import { AppComponent } from './app.component';

import {apiService} from './employee/api.service'
import { formService } from './former-employee/form.service';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [apiService,formService,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
