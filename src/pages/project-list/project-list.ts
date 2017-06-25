import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar } from 'ionic-angular';
import {ProjectDetailsModel} from '../../model/project-model';
import {ProfileDataProvider} from '../../providers/profile-data/profile-data';
import {ProjectDetailsPage} from '../project-details/project-details';
/**
 * Generated class for the ProjectListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-project-list',
  templateUrl: 'project-list.html',
})
export class ProjectListPage {
  @ViewChild(Navbar) navBar: Navbar;
  projectList: Array<ProjectDetailsModel> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public profileDataProvider: ProfileDataProvider) {

    this.profileDataProvider.getValue(this.profileDataProvider.PROJECT_LIST).then((value) => {
      if (value != null) {
        this.projectList = value;
      }

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectListPage');
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.profileDataProvider.setValue(this.profileDataProvider.PROJECT_LIST, this.projectList);
      this.navCtrl.pop();
    };
  }

  itemSelected(projectItem) {
    if (projectItem == null) {
      projectItem = new ProjectDetailsModel('', new Date(), new Date(), '','','');
      this.projectList.push(projectItem);
    }
    this.navCtrl.push(ProjectDetailsPage, {
      projectItem: projectItem
    });
  }

  delete(projectItem) {
    var index = this.projectList.indexOf(projectItem, 0);
    if (index > -1) {
      this.projectList.splice(index, 1);
    }
  }

}
