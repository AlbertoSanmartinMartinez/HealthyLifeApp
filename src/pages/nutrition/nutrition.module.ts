import { NgModule } from '@angular/core';
import { NutritionPage } from './nutrition';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    NutritionPage
  ],
  imports: [
    IonicPageModule.forChild(NutritionPage)
  ],
  exports: [
    NutritionPage
  ]
})

export class NutriPageModule {}
