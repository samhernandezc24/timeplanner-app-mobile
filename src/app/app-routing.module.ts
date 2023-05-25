import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PermitirNavegacionGuard } from './guards/permitir-navegacion.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'registrar',
    loadChildren: () =>
      import('./pages/registrar/registrar.module').then(
        (m) => m.RegistrarPageModule
      ),
  },
  {
    path: 'home',
    canActivate: [PermitirNavegacionGuard],
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'introduccion',
    canActivate: [PermitirNavegacionGuard],
    loadChildren: () =>
      import('./pages/introduccion/introduccion.module').then(
        (m) => m.IntroduccionPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'introduccion',
    pathMatch: 'full',
  },
  {
    path: 'medicamentos',
    canActivate: [PermitirNavegacionGuard],
    loadChildren: () =>
      import('./pages/medicamentos/medicamentos.module').then(
        (m) => m.MedicamentosPageModule
      ),
  },
  {
    path: 'citas',
    canActivate: [PermitirNavegacionGuard],
    loadChildren: () =>
      import('./pages/citas/citas.module').then((m) => m.CitasPageModule),
  },
  {
    path: 'familiar',
    canActivate: [PermitirNavegacionGuard],
    loadChildren: () =>
      import('./pages/familiar/familiar.module').then(
        (m) => m.FamiliarPageModule
      ),
  },
  {
    path: 'mi-perfil',
    canActivate: [PermitirNavegacionGuard],
    loadChildren: () =>
      import('./pages/mi-perfil/mi-perfil.module').then(
        (m) => m.MiPerfilPageModule
      ),
  },
  {
    path: 'agregar-cita',
    canActivate: [PermitirNavegacionGuard],
    loadChildren: () =>
      import('./pages/agregar-cita/agregar-cita.module').then(
        (m) => m.AgregarCitaPageModule
      ),
  },
  {
    path: 'agregar-medicamentos',
    canActivate: [PermitirNavegacionGuard],
    loadChildren: () =>
      import('./pages/agregar-medicamentos/agregar-medicamentos.module').then(
        (m) => m.AgregarMedicamentosPageModule
      ),
  },
  {
    path: 'lista-medicamentos',
    canActivate: [PermitirNavegacionGuard],
    loadChildren: () =>
      import('./pages/lista-medicamentos/lista-medicamentos.module').then(
        (m) => m.ListaMedicamentosPageModule
      ),
  },
  {
    path: 'lista-citas',
    canActivate: [PermitirNavegacionGuard],
    loadChildren: () =>
      import('./pages/lista-citas/lista-citas.module').then(
        (m) => m.ListaCitasPageModule
      ),
  },
  {
    path: 'lista-familiares',
    canActivate: [PermitirNavegacionGuard],
    loadChildren: () =>
      import('./pages/lista-familiares/lista-familiares.module').then(
        (m) => m.ListaFamiliaresPageModule
      ),
  },
  {
    path: 'agregar-familiar',
    canActivate: [PermitirNavegacionGuard],
    loadChildren: () =>
      import('./pages/agregar-familiar/agregar-familiar.module').then(
        (m) => m.AgregarFamiliarPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
