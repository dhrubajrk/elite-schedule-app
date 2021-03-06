import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ITeam } from '../../models/index';

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {
  team: ITeam;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
  }

}
