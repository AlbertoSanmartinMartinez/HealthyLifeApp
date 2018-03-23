import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-menu-profile',
  templateUrl: 'profile_menu.html',
})

export class MenuProfilePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  profileMenuViewLoad() {
    this.menuCtrl.enable(true, 'ProfileMenu');
  }

  profileMenuViewUnLoad() {
    this.menuCtrl.enable(true, 'ProfileMenu');
  }
}
