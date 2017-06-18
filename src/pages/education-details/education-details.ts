import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar } from 'ionic-angular';
import {EducationModel} from '../../model/education-model';
import {UtilityProvider} from '../../providers/utility/utility';
/**
 * Generated class for the EducationDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-education-details',
  templateUrl: 'education-details.html',
})
export class EducationDetailsPage {
    @ViewChild(Navbar) navBar: Navbar;
  educationItem:EducationModel;
  degree:string;
  school:string;
  cgpa:string;
  completionDate:Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, public utility:UtilityProvider) {
      this.educationItem=navParams.data.educationItem;
      this.degree=this.educationItem.degree;
      this.school=this.educationItem.school;
      this.cgpa=this.educationItem.cgpa;
      this.completionDate=this.educationItem.completionDate;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationDetailsPage');
    this.navBar.backButtonClick = (e: UIEvent) => {
      if (this.degree==null||this.degree.length==0){
        this.utility.showError('Please input Degree or Certificate');
        return false;
      }
      this.educationItem.degree=this.degree;
      this.educationItem.school=this.school;
      this.educationItem.cgpa=this.cgpa;
      this.educationItem.completionDate=this.completionDate;
      this.navCtrl.pop();
    };
  }

}
