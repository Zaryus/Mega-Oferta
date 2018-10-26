import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusquedaImagenPage } from './busqueda-imagen';

@NgModule({
  declarations: [
    BusquedaImagenPage,
  ],
  imports: [
    IonicPageModule.forChild(BusquedaImagenPage),
  ],
})
export class BusquedaImagenPageModule {}
