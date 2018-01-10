import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganiserPage } from './organiser';

@NgModule({
  declarations: [
    OrganiserPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganiserPage),
  ],
})
export class OrganiserPageModule {}
