import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'user-page',
    templateUrl: `user.html`
})
export class UserPage implements OnInit {
    name: string;

    constructor(private navCtrl: NavController, private navParams: NavParams) { }

    ngOnInit() {
        this.name = this.navParams.data['username'];
    }

    onGoToRoot() {
        this.navCtrl.popToRoot();
    }
}