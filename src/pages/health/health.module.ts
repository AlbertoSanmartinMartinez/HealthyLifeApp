import { NgModule } from '@angular/core';
import { HealthPage } from './health';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HealthPage
  ],
  imports: [
    IonicPageModule.forChild(HealthPage),
    SharedModule
  ],
  exports: [
    HealthPage
  ]
})

export class HealthPageModule {}
