import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfileDataProvider } from '../providers/profile-data/profile-data';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import {ProfilePage} from '../pages/profile/profile';
import {PersonDetailsPage} from '../pages/person-details/person-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    PersonDetailsPage
  ],
  imports: [
    BrowserModule,
      HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    PersonDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfileDataProvider
  ]
})
export class AppModule {}
