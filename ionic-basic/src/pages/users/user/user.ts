import { Component, OnInit } from '@angular/core';

import { NavParams } from 'ionic-angular';

@Component({
    selector: 'user-page',
    templateUrl: `user.html`
})
export class UserPage implements OnInit {
    name: string;

    constructor(private navParams: NavParams) { }

    ngOnInit() {
        this.name = this.navParams.get('username');
    }
}