import { NgModule } from '@angular/core';
import { SportPage } from './sport';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    SportPage
  ],
  imports: [
    IonicPageModule.forChild(SportPage),
    SharedModule
  ],
  exports: [
    SportPage
  ]
})

export class SportPageModule {}
