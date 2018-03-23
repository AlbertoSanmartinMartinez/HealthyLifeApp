import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginPage } from './login/login';
import { RegisterPage } from './register/register';

@IonicPage({
  name: 'access'
})
@Component({
  selector: 'page-access',
  templateUrl: 'access.html'
})

export class AccessPage {

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.push(LoginPage);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  facebook() {

  }

  google() {

  }

}
