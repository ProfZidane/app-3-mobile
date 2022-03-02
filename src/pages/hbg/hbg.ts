import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { RequestProvider } from './../../providers/request/request';

/**
 * Generated class for the HbgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hbg',
  templateUrl: 'hbg.html',
})
export class HbgPage {
OutInfo = {
    author: '',
    number_tutor: '',
    bed_number: '',
    date_started: '',
    date_finish: '',
    motivation: '',
    status: 0,
    created_at: new Date().toLocaleDateString(),
    updated_at: ''
  };
success_alert: any;
danger_alert: any;
warning_alert: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private requestService: RequestProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HbgPage');
  }

  ValidationForm() {
    let loading = this.loadingCtrl.create({
      content: 'Patientez...'
    });

    loading.present();
    console.log(this.OutInfo);
    let user = JSON.parse(localStorage.getItem('userData'));
    let author = user[0]._id;
    this.OutInfo.author = author;
    this.requestService.DoRequestOut(this.OutInfo).subscribe(
      (success) => {
        console.log(success);
        setTimeout( () => {
          loading.dismiss();

          this.success_alert = true;
          this.danger_alert = false;
          this.warning_alert = false;

        }, 1000);
      }, (err) => {
        console.log(err);
        loading.dismiss();

        if (err.status === 400) {
          this.danger_alert = false;
          this.success_alert = false;
          this.warning_alert = true;
        } else if (err.status === 404) {
          this.danger_alert = true;
          this.success_alert = false;
          this.warning_alert = false;
        }
      }
    );
  }

}
