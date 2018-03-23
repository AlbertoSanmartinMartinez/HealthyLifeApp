import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ProfilePage } from './profile'
import { SharedModule } from '../../shared/shared.module';

//import { AccessPage } from '../access/access';
import { CalendarPage } from '../calendar/calendar';
//import { AwardsPage } from '../awards/awards';
//import { PersonalInformationPage } from '../personal-information/personal-information';
//import { ShopPage } from '../shop/shop';

//import { AccessPageModule } from '../access/access.module';
//import { CalendarPageModule } from '../calendar/calendar.module';

@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    SharedModule
  ],
  exports: [
    ProfilePage
  ],
  entryComponents: [
    ProfilePage
  ],
  providers: [

  ]
})

export class ProfilePageModule { }
