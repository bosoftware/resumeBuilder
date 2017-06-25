import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExperienceListPage } from './experience-list';

@NgModule({
  declarations: [
    ExperienceListPage,
  ],
  imports: [
    IonicPageModule.forChild(ExperienceListPage),
  ],
  exports: [
    ExperienceListPage
  ]
})
export class ExperienceListPageModule {}
