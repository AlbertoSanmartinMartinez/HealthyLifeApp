import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { SportPage } from '../sport/sport';
import { NutritionPage } from '../nutrition/nutrition';
import { HealthPage } from '../health/health';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab4Root = SportPage;
  tab5Root = NutritionPage;
  tab6Root = HealthPage;

  constructor() {

  }
}
