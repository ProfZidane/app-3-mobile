import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandingPage } from './landing';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    LandingPage,
  ],
  imports: [
    NgxQRCodeModule,
    IonicPageModule.forChild(LandingPage),
  ],
})
export class LandingPageModule {}
