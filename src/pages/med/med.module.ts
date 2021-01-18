import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedPage } from './med';

@NgModule({
  declarations: [
    MedPage,
  ],
  imports: [
    IonicPageModule.forChild(MedPage),
  ],
})
export class MedPageModule {}
