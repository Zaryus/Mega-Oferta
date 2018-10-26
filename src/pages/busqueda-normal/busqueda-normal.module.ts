import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusquedaNormalPage } from './busqueda-normal';

@NgModule({
  declarations: [
    BusquedaNormalPage,
  ],
  imports: [
    IonicPageModule.forChild(BusquedaNormalPage),
  ],
})
export class BusquedaNormalPageModule {}
