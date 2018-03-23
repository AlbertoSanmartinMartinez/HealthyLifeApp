import { NgModule } from '@angular/core';
import { HealthPage } from './health';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    HealthPage
  ],
  imports: [
    IonicPageModule.forChild(HealthPage)
  ],
  exports: [
    HealthPage
  ]
})

export class HealthPageModule {}
