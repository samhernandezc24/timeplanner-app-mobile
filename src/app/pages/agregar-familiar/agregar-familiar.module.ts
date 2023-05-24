import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarFamiliarPageRoutingModule } from './agregar-familiar-routing.module';

import { AgregarFamiliarPage } from './agregar-familiar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarFamiliarPageRoutingModule
  ],
  declarations: [AgregarFamiliarPage]
})
export class AgregarFamiliarPageModule {}
