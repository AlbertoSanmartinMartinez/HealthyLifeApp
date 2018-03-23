import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccessPage } from './access';
import { SharedModule } from '../../shared/shared.module';

import { LoginPage } from './login/login';
import { LoginPageModule } from './login/login.module';
import { RegisterPage } from './register/register';
import { RegisterPageModule } from './register/register.module';

@NgModule({
  declarations: [
    AccessPage
  ],
  imports: [
    IonicPageModule.forChild(AccessPage),
    SharedModule
  ],
  entryComponents: [

  ],
  exports: [
    AccessPage
  ],
  providers: [

  ]
})

export class AccessPageModule {}
