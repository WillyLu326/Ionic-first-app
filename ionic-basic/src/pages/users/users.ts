import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserPage } from './user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  userPage = UserPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
