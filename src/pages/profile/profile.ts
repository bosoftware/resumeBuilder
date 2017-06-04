import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { Storage } from '@ionic/storage';
import {ProfileDataProvider} from '../../providers/profile-data/profile-data';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  profileName:string;
  constructor(public navCtrl: NavController,public storage:Storage,public profileDataProvider:ProfileDataProvider) {

  }

  startApp() {

    if (!this.profileName||this.profileName.length==0){
      alert('Please input profile name');
      return;
    }

    this.profileDataProvider.setValue(this.profileDataProvider.PROFILE,this.profileName);

    this.navCtrl.popToRoot(HomePage);
  }
}
