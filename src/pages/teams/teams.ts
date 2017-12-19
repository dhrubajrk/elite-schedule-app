import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../index';
import { ITeam } from '../../models/index';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  teams: ITeam[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.teams = [
      { id: 1, name: 'CSK' },
      { id: 2, name: 'MI' },
      { id: 3, name: 'KKR' }
    ];
  }
  gotoTeamPage($event, team:ITeam) {
    this.navCtrl.push(TeamHomePage,team);
  }
}
