import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PAppsPage } from './p-apps';

@NgModule({
  declarations: [
    PAppsPage,
  ],
  imports: [
    IonicPageModule.forChild(PAppsPage),
  ],
})
export class PAppsPageModule {}
