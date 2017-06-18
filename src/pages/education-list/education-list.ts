import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,Navbar} from 'ionic-angular';
import {ProfileDataProvider} from '../../providers/profile-data/profile-data';
import {EducationModel} from '../../model/education-model';
import {EducationDetailsPage} from '../../pages/education-details/education-details';
/**
 * Generated class for the EducationListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-education-list',
  templateUrl: 'education-list.html',
})
export class EducationListPage {
  @ViewChild(Navbar) navBar: Navbar;
  educationList:Array<EducationModel> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public profileDataProvider:ProfileDataProvider) {
    this.profileDataProvider.getValue(this.profileDataProvider.EDUCATION_LIST).then((value) => {
      if (value!=null){
        this.educationList = value;
      }

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationListPage');
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.profileDataProvider.setValue(this.profileDataProvider.EDUCATION_LIST,this.educationList);
      this.navCtrl.pop();
    };
  }

  itemSelected(educationItem){
    if (educationItem==null){
      educationItem = new EducationModel('','','',new Date());
      this.educationList.push(educationItem);
    }
    this.navCtrl.push(EducationDetailsPage,{
        educationItem:educationItem
    });
  }
}
