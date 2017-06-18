import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProfileDataProvider} from '../../providers/profile-data/profile-data';
import {ProfilePage} from '../profile/profile';
import {PersonDetailsPage} from '../person-details/person-details';
import {PhotoPage} from '../photo/photo';
import {EducationListPage} from '../education-list/education-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  profileName:string;
  constructor(public navCtrl: NavController,public profileDataProvider:ProfileDataProvider) {


    this.profileDataProvider.getProfile().then((profile)=>{
      if (!profile){
        this.navCtrl.push(ProfilePage);
      }else{
        this.profileName=profile;
      }
    });
  }

  showPersonDetails(){
    this.navCtrl.push(PersonDetailsPage);
  }

  showPhoto(){
    this.navCtrl.push(PhotoPage);
  }

  showEducationList(){
    this.navCtrl.push(EducationListPage);
  }
}
