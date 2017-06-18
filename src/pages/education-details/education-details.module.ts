import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EducationDetailsPage } from './education-details';

@NgModule({
  declarations: [
    EducationDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EducationDetailsPage),
  ],
  exports: [
    EducationDetailsPage
  ]
})
export class EducationDetailsPageModule {}
