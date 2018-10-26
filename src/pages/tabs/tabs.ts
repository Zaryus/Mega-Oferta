import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { NotificacionPage } from '../notificacion/notificacion';
import { OfertasPage } from '../ofertas/ofertas';
import { ConfiguracionPage } from '../configuracion/configuracion';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MenuPage;
  tab3Root = NotificacionPage;
  tab4Root = OfertasPage;
  tab5Root = ConfiguracionPage;
  
  constructor() {

  }
}
