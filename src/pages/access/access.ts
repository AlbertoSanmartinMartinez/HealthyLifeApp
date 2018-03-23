import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-access',
  templateUrl: 'access.html'
})

export class AccessPage {

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

  facebook() {

  }

  google() {

  }

}
