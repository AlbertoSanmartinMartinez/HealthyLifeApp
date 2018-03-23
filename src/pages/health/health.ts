import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'health'
})
@Component({
  selector: 'page-health',
  templateUrl: 'health.html'
})
export class HealthPage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthPage');
  }
}
