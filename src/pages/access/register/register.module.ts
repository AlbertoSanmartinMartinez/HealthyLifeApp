import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { SharedModule } from '../../../shared/shared.module';
//import { AuthenticationService } from '../providers/authenticate_service';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    SharedModule
  ],
  exports: [
    RegisterPage
  ],
  providers: [
    //AuthenticationService
  ]
})

export class RegisterPageModule { }
