import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { EventPage } from "../pages/event/event";
import { SpeakerPage } from "../pages/speaker/speaker";
import { MentorPage } from "../pages/mentor/mentor";
import { PrizePage } from "../pages/prize/prize";
import { RegistrationPage } from "../pages/registration/registration";
import { OrganiserPage } from "../pages/organiser/organiser";
import { SponsorPage } from "../pages/sponsor/sponsor";
import { FeedbackPage } from "../pages/feedback/feedback";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    EventPage,
    SpeakerPage,
    MentorPage,
    PrizePage,
    RegistrationPage,
    OrganiserPage,
    SponsorPage,
    FeedbackPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventPage,
    SpeakerPage,
    MentorPage,
    PrizePage,
    RegistrationPage,
    OrganiserPage,
    SponsorPage,
    FeedbackPage,
    AboutPage,
    ContactPage,
    HomePage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
