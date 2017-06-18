import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the UtilityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UtilityProvider {

  constructor(public http: Http,public alertCtrl: AlertController) {
    console.log('Hello UtilityProvider Provider');
  }

  showError(error) {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: error,
      buttons: ['OK']
    });
    alert.present();
  }
}
