import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MicuentaComponent } from './componentes/micuenta/micuenta.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { ControlcuentaComponent } from './componentes/controlcuenta/controlcuenta.component';
import { ControladminComponent } from './componentes/controladmin/controladmin.component';
import { ModalContentComponent } from './componentes/modal-content/modal-content.component';
import { SearchresultsComponent } from './componentes/searchresults/searchresults.component';
import { DetalleproductoComponent } from './componentes/detalleproducto/detalleproducto.component';
import { RegistrouserComponent } from './componentes/registrouser/registrouser.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MicuentaComponent,
    AdminComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ModalComponent,
    ControlcuentaComponent,
    ControladminComponent,
    ModalContentComponent,
    SearchresultsComponent,
    DetalleproductoComponent,
    RegistrouserComponent,
    ComentariosComponent,
    CarruselComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
