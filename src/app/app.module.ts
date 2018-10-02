import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { DibujoPage } from '../pages/dibujo/dibujo';
import { PAppsPage } from '../pages/p-apps/p-apps';
import { ComunicacionPage } from '../pages/comunicacion/comunicacion';
import { RoboticaPage } from '../pages/robotica/robotica';
import { SaludPage } from '../pages/salud/salud';
import { MetodoPage } from '../pages/metodo/metodo';
import { EstaPage } from '../pages/esta/esta';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    DibujoPage,
    PAppsPage,
    ComunicacionPage,
    RoboticaPage,
    SaludPage,
    MetodoPage,
    EstaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    DibujoPage,
    PAppsPage,
    ComunicacionPage,
    RoboticaPage,
    SaludPage,
    MetodoPage,
    EstaPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
