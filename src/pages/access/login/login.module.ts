import { NgModule } from '@angular/core';
import { LoginPage } from './login';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    SharedModule
  ],
  exports: [
    LoginPage
  ]
})

export class LoginPageModule { }
