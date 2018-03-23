import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CalendarPage
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
    SharedModule,
  ],
  exports: [
    CalendarPage
  ],
  entryComponents: [
    CalendarPage
  ],
  providers: [

  ]
})

export class CalendarPageModule {}
