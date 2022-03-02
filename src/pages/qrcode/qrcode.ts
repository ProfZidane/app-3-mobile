import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestProvider } from './../../providers/request/request';

/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {
  Compte;

  constructor(public navCtrl: NavController, public navParams: NavParams, private requestService: RequestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
    this.getCompte();
  }

  getCompte() {
    const user = JSON.parse(localStorage.getItem('userData'));
    this.requestService.getCompte(user[0]._id).subscribe(
      (data) => {
        console.log(data);
        this.Compte = JSON.stringify(data);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
