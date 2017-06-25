import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams , Navbar} from 'ionic-angular';
import {ExperienceModel} from '../../model/experience-model';
import {ProfileDataProvider} from '../../providers/profile-data/profile-data';
import {ExperienceDetailsPage} from '../experience-details/experience-details';
/**
 * Generated class for the ExperienceListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-experience-list',
  templateUrl: 'experience-list.html',
})
export class ExperienceListPage {
  @ViewChild(Navbar) navBar: Navbar;

  experienceList: Array<ExperienceModel> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public profileDataProvider:ProfileDataProvider) {

    this.profileDataProvider.getValue(this.profileDataProvider.EXPERIENCE_LIST).then((value) => {
      if (value != null) {
        this.experienceList = value;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperienceListPage');
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.profileDataProvider.setValue(this.profileDataProvider.EXPERIENCE_LIST, this.experienceList);
      this.navCtrl.pop();
    };
  }

  itemSelected(experienceItem) {
    if (experienceItem == null) {
      experienceItem = new ExperienceModel('','',new Date(),new Date(),'','','');
      this.experienceList.push(experienceItem);
    }
    this.navCtrl.push(ExperienceDetailsPage, {
      experienceItem: experienceItem
    });
  }

  delete(experienceItem) {
    var index = this.experienceList.indexOf(experienceItem, 0);
    if (index > -1) {
      this.experienceList.splice(index, 1);
    }
  }

}
