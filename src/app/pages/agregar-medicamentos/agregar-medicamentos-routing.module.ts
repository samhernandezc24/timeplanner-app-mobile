import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarMedicamentosPage } from './agregar-medicamentos.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarMedicamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarMedicamentosPageRoutingModule {}
