import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/menu/usuarios',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'usuarios',
        loadChildren: '../usuarios/usuarios.module#UsuariosPageModule'
      },
      {
        path: 'camara',
        loadChildren: '../camara/camara.module#CamaraPageModule'
      },
      {
        path: 'datos',
        loadChildren: '../datos/datos.module#DatosPageModule'
      },
      {
        path: 'graficas',
        loadChildren: '../graficas/graficas.module#GraficasPageModule'
      },
      {
        path: 'ubicacion',
        loadChildren: '../ubicacion/ubicacion.module#UbicacionPageModule'
      },
      {
        path: 'otros',
        loadChildren: '../otros/otros.module#OtrosPageModule'
      }
    ]
  }
];

  // { path: 'ubicacion', loadChildren: './pages/ubicacion/ubicacion.module#UbicacionPageModule' },
  // { path: 'graficas', loadChildren: './pages/graficas/graficas.module#GraficasPageModule' },
  // { path: 'usuarios', loadChildren: './pages/usuarios/usuarios.module#UsuariosPageModule' },
  // { path: 'datos', loadChildren: './pages/datos/datos.module#DatosPageModule' },
  // { path: 'otros', loadChildren: './pages/otros/otros.module#OtrosPageModule' },
  // { path: 'camara', loadChildren: './pages/camara/camara.module#CamaraPageModule' },

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
