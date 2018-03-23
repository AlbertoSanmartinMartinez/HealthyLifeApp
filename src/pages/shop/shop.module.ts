import { NgModule } from '@angular/core';
import { ShopPage } from './shop';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ShopPage
  ],
  imports: [
    IonicPageModule.forChild(ShopPage),
    SharedModule
  ],
  exports: [
    ShopPage
  ]
})

export class ShopPageModule {}
