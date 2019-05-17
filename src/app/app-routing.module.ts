import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  // { path: 'ubicacion', loadChildren: './pages/ubicacion/ubicacion.module#UbicacionPageModule' },
  // { path: 'graficas', loadChildren: './pages/graficas/graficas.module#GraficasPageModule' },
  // { path: 'usuarios', loadChildren: './pages/usuarios/usuarios.module#UsuariosPageModule' },
  // { path: 'datos', loadChildren: './pages/datos/datos.module#DatosPageModule' },
  // { path: 'otros', loadChildren: './pages/otros/otros.module#OtrosPageModule' },
  // { path: 'camara', loadChildren: './pages/camara/camara.module#CamaraPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
