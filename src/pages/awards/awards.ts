import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'awards'
})
@Component({
  selector: 'page-awards',
  templateUrl: 'awards.html'
})
export class AwardsPage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AwardsPage');
  }
}
