import { HomePage } from './../home/home';
import { QrcodePage } from './../qrcode/qrcode';
import { RequestProvider } from './../../providers/request/request';
import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
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
user;
Compte;
Out;
Status;
  constructor(public navCtrl: NavController, public navParams: NavParams, private requestService: RequestProvider, public loadingCtrl: LoadingController) {
    if (localStorage.getItem('userToken') !== null ) {
      this.user = JSON.parse(localStorage.getItem('userData'));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
    this.getCompte();
    this.getOut();
    this.getStatus();
  }

  reload() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  Logout() {
    if (localStorage.getItem('userToken') !== null) {
      localStorage.removeItem('userToken');
    }
    localStorage.removeItem('userData');

    this.navCtrl.setRoot(HomePage);
  }

  getCompte() {
    const user = JSON.parse(localStorage.getItem('userData'));
    this.requestService.getCompte(user[0]._id).subscribe(
      (data) => {
        console.log(data);
        this.Compte = data;
      }, (err) => {
        console.log(err);
      }
    );
  }

  goToQrcode() {
    this.navCtrl.push(QrcodePage);
  }


  getOut() {
    const user = JSON.parse(localStorage.getItem('userData'));
    this.requestService.getCounter(user[0]._id).subscribe(
      (data) => {
        console.log(data);
        this.Out = data.length;
      }, (err) => {
        console.log(err);
      }
    );
  }

  getStatus() {
    const user = JSON.parse(localStorage.getItem('userData'));
    this.requestService.getStatusById(user[0]._id).subscribe(
      (data) => {
        console.log(data);
        if (data.length === 0) {
          this.Status = 'Favorable';
        } else {
          this.Status = data[data.length - 1].status;
        }
      }, (err) => {
        console.log(err);
      }
    );
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
    this.navCtrl.push(ProfilPage, { user : this.user });
  }

}
