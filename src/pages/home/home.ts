import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { LandingPage } from '../landing/landing';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  Login = {
    matricule: '',
    password: ''
  };
  warning_alert;
  danger_alert;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToLandignPage() {
    let loading = this.loadingCtrl.create({
      content: 'Patientez...'
    });

    loading.present();
    this.authService.LogUsers(this.Login).subscribe(
      (success) => {

        localStorage.setItem('userToken', success.token);
        localStorage.setItem('userData', JSON.stringify(success.data));
        loading.dismiss();
        this.navCtrl.push(LandingPage);
      }, (error) => {
        loading.dismiss();

        if (error.status === 400) {
          this.warning_alert = true;
          this.danger_alert = false;

        } else if (error.status === 404) {
          this.danger_alert = true;
          this.warning_alert = false;

        }
      }
    );

  }

}
