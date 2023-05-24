import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarCitaPageRoutingModule } from './agregar-cita-routing.module';

import { AgregarCitaPage } from './agregar-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarCitaPageRoutingModule,
  ],
  declarations: [AgregarCitaPage],
})
export class AgregarCitaPageModule {}
