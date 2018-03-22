import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http'
import { BlogService } from '../services/service'

import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SportPage } from '../pages/sport/sport';
import { NutritionPage } from '../pages/nutrition/nutrition';
import { HealthPage } from '../pages/health/health';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    HomePage,
    TabsPage,
    SportPage,
    HealthPage,
    NutritionPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
    //IonicModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    HomePage,
    TabsPage,
    SportPage,
    HealthPage,
    NutritionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BlogService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
