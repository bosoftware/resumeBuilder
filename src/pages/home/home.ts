import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProfileDataProvider} from '../../providers/profile-data/profile-data';
import {ProfilePage} from '../profile/profile';
import {PersonDetailsPage} from '../person-details/person-details';
import {PhotoPage} from '../photo/photo';
import {EducationListPage} from '../education-list/education-list';
import {ExperienceListPage} from '../experience-list/experience-list';
import {ProjectListPage} from '../project-list/project-list';
import {ProjectDetailsPage} from '../project-details/project-details';
import {ReferenceListPage} from '../reference-list/reference-list';
import {PdfviewPage} from '../pdfview/pdfview';

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

  showExperienceList(){
    this.navCtrl.push(ExperienceListPage);
  }

  showProjectList(){
    this.navCtrl.push(ProjectListPage);
  }
  showReferenceList(){
    this.navCtrl.push(ReferenceListPage);
  }
  showPdfview(){
    this.navCtrl.push(PdfviewPage);
  }
}
