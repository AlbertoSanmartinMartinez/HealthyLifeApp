import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccessPage } from './access';
import { LoginPage } from './login/login';
import { RegisterPage } from './register/register';

@NgModule({
  declarations: [
    AccessPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    IonicPageModule.forChild(AccessPage),
  ],
  entryComponents: [
    LoginPage,
    RegisterPage
  ],
  exports: [
    AccessPage.
    LoginPage,
    RegisterPage
  ],
  providers: [

  ]
})

export class AccessPageModule { }
