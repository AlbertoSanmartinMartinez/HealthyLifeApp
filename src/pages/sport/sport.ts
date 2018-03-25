import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'sport',
  segment: 'sport'
})
@Component({
  selector: 'page-sport',
  templateUrl: 'sport.html'
})
export class SportPage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SportPage');
  }
}
