import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usersPage = UsersPage;
  shopPage = ShopPage;

  constructor(public navCtrl: NavController) {
    
  }

}
