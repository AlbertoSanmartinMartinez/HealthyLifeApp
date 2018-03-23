import { NgModule } from '@angular/core';
import { SportPage } from './sport';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SportPage
  ],
  imports: [
    IonicPageModule.forChild(SportPage)
  ],
  exports: [
    SportPage
  ]
})

export class SportPageModule {}
