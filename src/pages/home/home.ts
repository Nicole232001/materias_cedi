import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { PAppsPage } from '../p-apps/p-apps';
import { ComunicacionPage } from '../comunicacion/comunicacion';
import { RoboticaPage } from '../robotica/robotica';
import { SaludPage } from '../salud/salud';
import { MetodoPage } from '../metodo/metodo';
import { EstaPage } from '../esta/esta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
historia = HistoriaPage;
dibujo=DibujoPage;
papps=PAppsPage;
comun=ComunicacionPage;
robo=RoboticaPage;
salud=SaludPage;
metodo=MetodoPage;
esta=EstaPage;
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
  clickcomun()
  {
    this.navCtrl.push(this.comun);
  }
  clickrobotica()
  {
    this.navCtrl.push(this.robo);
  }
  clicksalud()
  {
    this.navCtrl.push(this.salud);
  }
  clickmetodo()
  {
    this.navCtrl.push(this.metodo);
  }
  clickesta()
  {
    this.navCtrl.push(this.esta);
  }
}
