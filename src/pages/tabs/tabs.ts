import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { SportPage } from '../sport/sport';
import { NutritionPage } from '../nutrition/nutrition';
import { HealthPage } from '../health/health';

@IonicPage({
  name: 'tabspage'
})
@Component({
  templateUrl: 'tabs.html',
  selector: 'page-tabs'
})

//tabIndex: number = 0;

export class TabsPage {

  homeRoot = HomePage;
  profileRoot = ProfilePage;
  sportRoot = SportPage;
  nutritionRoot = NutritionPage;
  healthRoot = HealthPage;

  constructor() {

  }

  //hacer click (click)
  clickEvent(e) {

  }

  //hacer doble click (dbclick)
  doubleClickEcvent(e) {

  }

  //presionar (press)
  pressEvent(e) {

  }

  //golpear (tap)
  tapEvent(e) {

  }
}

/*
Documentacion Ejemplo Control Gestos

https://github.com/ionic-team/ionic-preview-app/tree/master/src/pages/gestures/basic

press
pan
swipe
rotate
pinch
*/
