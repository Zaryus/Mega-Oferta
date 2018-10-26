import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroVendedorPage } from './registro-vendedor';

@NgModule({
  declarations: [
    RegistroVendedorPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroVendedorPage),
  ],
})
export class RegistroVendedorPageModule {}
