import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarMedicamentosPageRoutingModule } from './agregar-medicamentos-routing.module';

import { AgregarMedicamentosPage } from './agregar-medicamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarMedicamentosPageRoutingModule,
  ],
  declarations: [AgregarMedicamentosPage],
})
export class AgregarMedicamentosPageModule {}
