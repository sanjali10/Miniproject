import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from './login.component';
import {AppMaterialModule} from '../material/material.module';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppMaterialModule
  ]
})
export class LoginModule { }
