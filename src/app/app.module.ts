import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ColaComponent } from './componentes/cola/cola.component';
import { ColaClienteComponent } from './componentes/cola-cliente/cola-cliente.component';
import { PanelAdministradorComponent } from './componentes/admin/panel-administrador/panel-administrador.component';
import { AdminMenuComponent } from './componentes/admin/admin-menu/admin-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ColaComponent,
    ColaClienteComponent,
    PanelAdministradorComponent,
    AdminMenuComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
