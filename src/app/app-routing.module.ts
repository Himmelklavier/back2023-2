import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './componentes/admin/admin.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { HomeComponent } from './componentes/home/home.component';
import { ControladminComponent } from './componentes/controladmin/controladmin.component';
import { ControlcuentaComponent } from './componentes/controlcuenta/controlcuenta.component';
import { DetalleproductoComponent } from './componentes/detalleproducto/detalleproducto.component';
import { MicuentaComponent } from './componentes/micuenta/micuenta.component';
import { RegistrouserComponent } from './componentes/registrouser/registrouser.component';
import { SearchresultsComponent } from './componentes/searchresults/searchresults.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'controladmin', component: ControladminComponent },
  { path: 'controluser', component: ControlcuentaComponent },
  { path: 'detalleproducto', component: DetalleproductoComponent },
  { path: 'micuenta', component: MicuentaComponent },
  { path: 'registro', component: RegistrouserComponent },
  { path: 'busqueda', component: SearchresultsComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
