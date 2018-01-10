import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EventPage } from "../event/event";
import { SpeakerPage } from "../speaker/speaker";
import { MentorPage } from "../mentor/mentor";
import { PrizePage } from "../prize/prize";
import { RegistrationPage } from "../registration/registration";
import { OrganiserPage } from "../organiser/organiser";
import { SponsorPage } from "../sponsor/sponsor";
import { FeedbackPage } from "../feedback/feedback";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  eventPageChild = EventPage;
  speakerPageChild = SpeakerPage;
  mentorPageChild = MentorPage;
  prizePageChild = PrizePage;
  registrationPageChild = RegistrationPage;
  organiserPageChild = OrganiserPage;
  sponsorPageChild = SponsorPage;
  feedbackPageChild = FeedbackPage;

  constructor(public navCtrl: NavController) {

  }

  openChildPage(page) {
    this.navCtrl.push(page);
  }

}
