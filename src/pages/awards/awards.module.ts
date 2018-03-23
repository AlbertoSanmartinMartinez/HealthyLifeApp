import { NgModule } from '@angular/core';
import { AwardsPage } from './awards';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AwardsPage
  ],
  imports: [
    IonicPageModule.forChild(AwardsPage),
    SharedModule
  ],
  exports: [
    AwardsPage
  ]
})

export class AwardsPageModule {}
