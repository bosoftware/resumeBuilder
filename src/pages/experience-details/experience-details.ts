import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar } from 'ionic-angular';
import {ExperienceModel} from '../../model/experience-model';
import {UtilityProvider} from '../../providers/utility/utility';
/**
 * Generated class for the ExperienceDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-experience-details',
  templateUrl: 'experience-details.html',
})
export class ExperienceDetailsPage {
  @ViewChild(Navbar) navBar: Navbar;
  experienceItem:ExperienceModel;
  organization:string;
  position:string;
  durationFrom:Date;
  durationTo:Date;
  location:string;
  salary:string;
  jobResponsibility:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public utility:UtilityProvider) {
    this.experienceItem=navParams.data.experienceItem;
    this.organization=this.experienceItem.organization;
    this.position=this.experienceItem.position;
    this.durationFrom=this.experienceItem.durationFrom;
    this.durationTo=this.experienceItem.durationTo;
    this.location=this.experienceItem.location;
    this.salary=this.experienceItem.salary;
    this.jobResponsibility=this.experienceItem.jobResponsibility;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperienceDetailsPage');
    this.navBar.backButtonClick = (e: UIEvent) => {
      if (this.organization==null||this.organization.length==0){
        this.utility.showError('Please input Organization');
        return false;
      }
      this.experienceItem.organization=this.organization;
      this.experienceItem.position=this.position;
      this.experienceItem.durationFrom=this.durationFrom;
      this.experienceItem.durationTo=this.durationTo;
      this.experienceItem.location=this.location;
      this.experienceItem.salary=this.salary;
      this.experienceItem.jobResponsibility=this.jobResponsibility;
      this.navCtrl.pop();
    };
  }

}
