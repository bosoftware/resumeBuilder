import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , Navbar} from 'ionic-angular';
import {ReferenceModel} from '../../model/reference-model';
import {ProfileDataProvider} from '../../providers/profile-data/profile-data';
import {ReferenceDetailsPage} from '../reference-details/reference-details';

/**
 * Generated class for the ReferenceListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reference-list',
  templateUrl: 'reference-list.html',
})
export class ReferenceListPage {
@ViewChild(Navbar) navBar: Navbar;
  referenceList:Array<ReferenceModel>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public profileDataProvider:ProfileDataProvider) {

        this.profileDataProvider.getValue(this.profileDataProvider.PROJECT_LIST).then((value) => {
          if (value != null) {
            this.referenceList = value;
          }

        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferenceListPage');
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.profileDataProvider.setValue(this.profileDataProvider.PROJECT_LIST, this.referenceList);
      this.navCtrl.pop();
    };
  }

  itemSelected(item) {
    if (item == null) {
      item = new ReferenceModel('','','','');
      this.referenceList.push(item);
    }
    this.navCtrl.push(ReferenceDetailsPage, {
      item: item
    });
  }

  delete(item) {
    var index = this.referenceList.indexOf(item, 0);
    if (index > -1) {
      this.referenceList.splice(index, 1);
    }
  }
}
