import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { BlogService } from '../providers/blog_service';
import { AuthenticationService } from '../providers/authenticate_service';

import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { SportPage } from '../pages/sport/sport';
import { NutritionPage } from '../pages/nutrition/nutrition';
import { HealthPage } from '../pages/health/health';
import { AccessPage } from '../pages/access/access';
import { LoginPage } from '../pages/access/login/login';
import { RegisterPage } from '../pages/access/register/register';
import { CalendarPage } from '../pages/calendar/calendar';
import { AwardsPage } from '../pages/awards/awards';
import { PersonalInformationPage } from '../pages/personal-information/personal-information';
import { ShopPage } from '../pages/shop/shop';
import { PostPage } from '../pages/post/post';
import { CommentPage } from '../pages/comment/comment';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    HomePage,
    SportPage,
    HealthPage,
    NutritionPage,
    CalendarPage,
    AwardsPage,
    AccessPage,
    LoginPage,
    RegisterPage,
    PersonalInformationPage,
    ProfilePage,
    ShopPage,
    PostPage,
    CommentPage
  ],
  //modules
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  //pages
  entryComponents: [
    MyApp,
    ProfilePage,
    HomePage,
    SportPage,
    HealthPage,
    NutritionPage,
    CalendarPage,
    AwardsPage,
    AccessPage,
    LoginPage,
    RegisterPage,
    PersonalInformationPage,
    ShopPage,
    PostPage,
    CommentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BlogService,
    AuthenticationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
