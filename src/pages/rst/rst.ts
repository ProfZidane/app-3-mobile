import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestProvider } from './../../providers/request/request';

/**
 * Generated class for the RstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rst',
  templateUrl: 'rst.html',
})
export class RstPage {
  Compte;
  Meal;
  constructor(public navCtrl: NavController, private requestService: RequestProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RstPage');
    this.getCompte();
    this.getMeal();
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


  getMeal() {
    const user = JSON.parse(localStorage.getItem('userData'));
    this.requestService.getMealById(user[0]._id).subscribe(
      (data) => {
        this.Meal = data;
      }, (err) => {
        console.log(err);
      }
    );
  }

}
