import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExperienceDetailsPage } from './experience-details';

@NgModule({
  declarations: [
    ExperienceDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExperienceDetailsPage),
  ],
  exports: [
    ExperienceDetailsPage
  ]
})
export class ExperienceDetailsPageModule {}
