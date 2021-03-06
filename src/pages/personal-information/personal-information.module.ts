import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalInformationPage } from './personal-information';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PersonalInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalInformationPage),
    SharedModule
  ],
  exports: [
    PersonalInformationPage
  ]
})
export class PersonalInformationPageModule {}
