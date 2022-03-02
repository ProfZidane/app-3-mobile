import { QrcodePageModule } from './../pages/qrcode/qrcode.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPageModule } from '../pages/landing/landing.module';

import { RstPageModule } from '../pages/rst/rst.module';
import { MedPageModule } from '../pages/med/med.module';
import { HbgPageModule } from '../pages/hbg/hbg.module';
import { ProfilPageModule } from '../pages/profil/profil.module';
import { AuthProvider } from '../providers/auth/auth';
import { RequestProvider } from '../providers/request/request';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    LandingPageModule,
    RstPageModule,
    MedPageModule,
    HbgPageModule,
    ProfilPageModule,
    HttpClientModule,
    NgxQRCodeModule,
    QrcodePageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    RequestProvider
  ]
})
export class AppModule {}
