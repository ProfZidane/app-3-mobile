import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RstPage } from '../rst/rst';
import { HbgPage } from '../hbg/hbg';
import { MedPage } from '../med/med';
import { ProfilPage } from '../profil/profil';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  goToRstApp() {
    this.navCtrl.push(RstPage);
  }

  goToHbgApp() {
    this.navCtrl.push(HbgPage);
  }

  goToMedApp() {
    this.navCtrl.push(MedPage);
  }

  goToProfile() {
    this.navCtrl.push(ProfilPage);
  }

}
