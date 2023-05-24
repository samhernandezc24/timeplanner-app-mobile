import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaFamiliaresPage } from './lista-familiares.page';

const routes: Routes = [
  {
    path: '',
    component: ListaFamiliaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaFamiliaresPageRoutingModule {}
