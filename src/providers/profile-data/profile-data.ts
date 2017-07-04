import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProfileDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProfileDataProvider {

  PROFILE = 'profile';
  NAME ="name";
  SEX = "sex";
  DATEOFBIRTH="dateOfBirth";
  ADDRESS="address";
  LANGUAGE="language";
  CONTRACT_NO = "contractNo";
  EMAIL = "email";
  EDUCATION_LIST = "educationList";
  EXPERIENCE_LIST = "experienceList";
  PROJECT_LIST = "projectList";
  REFERENCE_LIST = "referenceList";
  IMAGE_URL = "imageUrl";
  IMAGE_PATH = "imagePath";
  
  name: string;
  sex: string;
  dateOfBirth: string;
  address: string;
  language: string;
  contractNo: string;
  email: string;

  constructor(
    public events: Events,
    public storage: Storage,
    public http: Http
  ) {}

  getProfile(): Promise<any> {
    return this.getValue(this.PROFILE);
  };


  setValue(key:string,value:any):void{
    this.storage.set(key,value);
  };

  getValue(key:string):Promise<any>{
    return this.storage.get(key).then((value)=>{
      return value;
    });
  };


}
