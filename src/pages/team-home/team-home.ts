import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage, StandingsPage } from '../index';
import { ITeam } from '../../models/index';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  team: ITeam;
  teamDetailsTab = TeamDetailPage;
  standingsTab = StandingsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

  returnToHome() {
    this.navCtrl.popToRoot();
  }

}
