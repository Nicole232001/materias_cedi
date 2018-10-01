import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { PAppsPage } from '../p-apps/p-apps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
historia = HistoriaPage;
dibujo=DibujoPage;
papps=PAppsPage;
  constructor(public navCtrl: NavController) {

  }
  clickhistoria()
  {
    this.navCtrl.push(this.historia);
  }
  clickdibujo()
  {
    this.navCtrl.push(this.dibujo);
  }
  clickpapps()
  {
    this.navCtrl.push(this.papps);
  }
}
