import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopsPage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopsPage');
  }
}
