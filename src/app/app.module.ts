import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { NotificacionPage } from '../pages/notificacion/notificacion';
import { OfertasPage } from '../pages/ofertas/ofertas';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MenuPage,
    NotificacionPage,
    OfertasPage,
    ConfiguracionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MenuPage,
    NotificacionPage,
    OfertasPage,
    ConfiguracionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
