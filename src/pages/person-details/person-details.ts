import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {ProfileDataProvider} from '../../providers/profile-data/profile-data';
/**
 * Generated class for the PersonDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-person-details',
  templateUrl: 'person-details.html',
})
export class PersonDetailsPage {
  @ViewChild(Navbar) navBar: Navbar;
  name: string;
  sex: string;
  dateOfBirth: string;
  address: string;
  language: string;
  contractNo: string;
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public profileDataProvider: ProfileDataProvider) {
    this.profileDataProvider.getValue(this.profileDataProvider.NAME).then((value) => {
      this.name = value;
    });
    this.profileDataProvider.getValue(this.profileDataProvider.SEX).then((value) => {
      this.sex = value;
    });
    this.profileDataProvider.getValue(this.profileDataProvider.DATEOFBIRTH).then((value) => {
      this.dateOfBirth = value;
    });
    this.profileDataProvider.getValue(this.profileDataProvider.ADDRESS).then((value) => {
      this.address = value;
    });
    this.profileDataProvider.getValue(this.profileDataProvider.LANGUAGE).then((value) => {
      this.language = value;
    });
    this.profileDataProvider.getValue(this.profileDataProvider.CONTRACT_NO).then((value) => {
      this.contractNo = value;
    });
    this.profileDataProvider.getValue(this.profileDataProvider.EMAIL).then((value) => {
      this.email = value;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonDetailsPage');
    this.navBar.backButtonClick = (e: UIEvent) => {
      if (this.name && this.name.length > 0) {
        this.profileDataProvider.setValue(this.profileDataProvider.NAME, this.name);
      }
      if (this.sex && this.sex.length > 0) {
        this.profileDataProvider.setValue(this.profileDataProvider.SEX, this.sex);
      }
      if (this.dateOfBirth && this.dateOfBirth.length > 0) {
        this.profileDataProvider.setValue(this.profileDataProvider.DATEOFBIRTH, this.dateOfBirth);
      }
      if (this.address && this.address.length > 0) {
        this.profileDataProvider.setValue(this.profileDataProvider.ADDRESS, this.address);
      }
      if (this.language && this.language.length > 0) {
        this.profileDataProvider.setValue(this.profileDataProvider.LANGUAGE, this.language);
      }
      if (this.contractNo && this.contractNo.length > 0) {
        this.profileDataProvider.setValue(this.profileDataProvider.CONTRACT_NO, this.contractNo);
      }
      if (this.email && this.email.length > 0) {
        this.profileDataProvider.setValue(this.profileDataProvider.EMAIL, this.email);
      }
      this.navCtrl.pop();
    }
  }

}
