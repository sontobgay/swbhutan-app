import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackPage } from './venue';

@NgModule({
  declarations: [
    VenuePage,
  ],
  imports: [
    IonicPageModule.forChild(VenuePage),
  ],
})
export class VenuePageModule {}
