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
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import {PhotoPage} from '../pages/photo/photo';
import {EducationListPage} from '../pages/education-list/education-list';
import {EducationDetailsPage} from '../pages/education-details/education-details';
import {ExperienceListPage} from '../pages/experience-list/experience-list';
import {ExperienceDetailsPage} from '../pages/experience-details/experience-details';
import {ProjectListPage} from '../pages/project-list/project-list'
import { UtilityProvider } from '../providers/utility/utility';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    PhotoPage,
    EducationListPage,
    PersonDetailsPage,
    EducationDetailsPage,
    ExperienceDetailsPage,
    ExperienceListPage
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
    PersonDetailsPage,
    EducationListPage,
    PhotoPage,
    EducationDetailsPage,
    ExperienceListPage,
    ExperienceDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Transfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfileDataProvider,
    UtilityProvider
  ]
})
export class AppModule {}
