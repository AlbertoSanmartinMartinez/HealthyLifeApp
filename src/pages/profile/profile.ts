import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { CalendarPage } from '../calendar/calendar';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
