import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AccessPage } from '../access/access';
import { AwardsPage } from '../awards/awards';
import { CalendarPage } from '../calendar/calendar';
import { ShopPage } from '../shop/shop';
import { PersonalInformationPage } from '../personal-information/personal-information'

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

  goToPage(item) {

    switch(item) {
      case 'access':
        this.navCtrl.push(AccessPage);
        break;
      case 'shop':
        this.navCtrl.push(ShopPage);
        break;
      case 'calendar':
        this.navCtrl.push(CalendarPage);
        break;
      case 'awards':
        this.navCtrl.push(AwardsPage);
        break;
      case 'profile':
      this.navCtrl.push(PersonalInformationPage);
      break;
    }
  }
}
