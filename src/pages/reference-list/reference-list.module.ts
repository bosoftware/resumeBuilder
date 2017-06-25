import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReferenceListPage } from './reference-list';

@NgModule({
  declarations: [
    ReferenceListPage,
  ],
  imports: [
    IonicPageModule.forChild(ReferenceListPage),
  ],
  exports: [
    ReferenceListPage
  ]
})
export class ReferenceListPageModule {}
