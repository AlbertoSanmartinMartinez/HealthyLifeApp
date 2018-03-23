import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ProfilePage } from './profile'

import { AccessPage } from '../access/access';
import { CalendarPage } from '../calendar/calendar';
import { AwardsPage } from '../awards/awards';
import { PersonalInformationPage } from '../personal-information/personal-information';
import { ShopPage } from '../shop/shop';


@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage)
  ],
  exports: [
    ProfilePage
  ],
  entryComponents: [
    AccessPage,
    CalendarPage,
    AwardsPage,
    PersonalInformationPage,
    ShopPage
  ],
  providers: [

  ]
})

export class ProfilePageModule { }
