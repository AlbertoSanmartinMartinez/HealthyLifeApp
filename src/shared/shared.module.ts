import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CalendarPageModule } from '../pages/calendar/calendar.module';
import { AccessPageModule } from '../pages/access/access.module';
import { LoginPageModule } from '../pages/access/login/login.module';
import { RegisterPageModule } from '../pages/access/register/register.module';
import { AwardsPageModule } from '../pages/awards/awards.module';
import { HealthPageModule } from '../pages/health/health.module';
import { HomePageModule } from '../pages/home/home.module';
import { NutriPageModule } from '../pages/nutrition/nutrition.module';
import { PersonalInformationPageModule } from '../pages/personal-information/personal-information.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ShopPageModule } from '../pages/shop/shop.module';
import { SportPageModule } from '../pages/sport/sport.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { TutorialPageModule } from '../pages/tutorial/tutorial.module';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
//todos los modulos

@NgModule({
  declarations: [
    CalendarPageModule,
    AccessPageModule,
    LoginPageModule,
    RegisterPageModule,
    AwardsPageModule,
    HealthPageModule,
    HomePageModule,
    NutriPageModule,
    PersonalInformationPageModule,
    ProfilePageModule,
    ShopPageModule,
    SportPageModule,
    TabsPageModule,
    TutorialPageModule,
    WelcomePageModule
  ],
  imports: [
    IonicModule
  ],
  exports: [
    CalendarPageModule,
    AccessPageModule,
    LoginPageModule,
    RegisterPageModule,
    AwardsPageModule,
    HealthPageModule,
    HomePageModule,
    NutriPageModule,
    PersonalInformationPageModule,
    ProfilePageModule,
    ShopPageModule,
    SportPageModule,
    TabsPageModule,
    TutorialPageModule,
    WelcomePageModule
  ]
})

export class SharedModule {}
