import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,Navbar} from 'ionic-angular';
import {UtilityProvider} from '../../providers/utility/utility';
import {ReferenceModel} from '../../model/reference-model';
/**
 * Generated class for the ReferenceDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reference-details',
  templateUrl: 'reference-details.html',
})
export class ReferenceDetailsPage {
@ViewChild(Navbar) navBar: Navbar;
  referenceDetails:ReferenceModel;
  name:string;
   details:string;
    contactNo:string;
     email:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public utility:UtilityProvider) {
    this.referenceDetails=navParams.data.item;
    this.name=this.referenceDetails.name;
    this.details=this.referenceDetails.details;
    this.contactNo=this.referenceDetails.contactNo;
    this.email=this.referenceDetails.email;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferenceDetailsPage');
    this.navBar.backButtonClick = (e: UIEvent) => {
      if (this.name==null||this.name.length==0){
        this.utility.showError('Please input Name');
        return false;
      }
      this.referenceDetails.name=this.name;
      this.referenceDetails.details=this.details;
      this.referenceDetails.contactNo=this.contactNo;
      this.referenceDetails.email=this.email;

      this.navCtrl.pop();
    };
  }



}
