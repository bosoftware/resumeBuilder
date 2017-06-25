import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReferenceDetailsPage } from './reference-details';

@NgModule({
  declarations: [
    ReferenceDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReferenceDetailsPage),
  ],
  exports: [
    ReferenceDetailsPage
  ]
})
export class ReferenceDetailsPageModule {}
