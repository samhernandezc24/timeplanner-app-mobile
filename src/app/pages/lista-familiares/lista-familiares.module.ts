import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaFamiliaresPageRoutingModule } from './lista-familiares-routing.module';

import { ListaFamiliaresPage } from './lista-familiares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaFamiliaresPageRoutingModule
  ],
  declarations: [ListaFamiliaresPage]
})
export class ListaFamiliaresPageModule {}
