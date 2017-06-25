import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar } from 'ionic-angular';
import {ProjectDetailsModel} from '../../model/project-model';
import {UtilityProvider} from '../../providers/utility/utility';
/**
 * Generated class for the ProjectDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-project-details',
  templateUrl: 'project-details.html',
})
export class ProjectDetailsPage {
@ViewChild(Navbar) navBar: Navbar;

  projectItem:ProjectDetailsPage;
  projectTitle:string;
  projectFrom:Date;
  projectTo:Date;
  role:string;
  teamSize:string;
  expertise:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public utility:UtilityProvider) {
    this.projectItem=navParams.data.projectItem;
    this.projectTitle=this.projectItem.projectTitle;
    this.projectFrom = this.projectItem.projectFrom;
    this.projectTo = this.projectItem.projectTo;
    this.role = this.projectItem.role;
    this.teamSize=this.projectItem.teamSize;
    this.expertise = this.projectItem.expertise;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectDetailsPage');
    this.navBar.backButtonClick = (e: UIEvent) => {
      if (this.projectTitle==null||this.projectTitle.length==0){
        this.utility.showError('Please input Project Title');
        return false;
      }
      this.projectItem.projectTitle=this.projectTitle;
      this.projectItem.projectFrom=this.projectFrom;
      this.projectItem.projectTo=this.projectTo;
      this.projectItem.role=this.role;
      this.projectItem.teamSize=this.teamSize;
      this.projectItem.expertise=this.expertise;
      this.navCtrl.pop();
    };
  }

}
