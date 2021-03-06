import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { WikiComponent } from './wiki/wiki.component';
import { JoyasComponent } from './joyas/joyas.component';
import { JoyaComponent } from './joya/joya.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { SetRoleComponent } from './auth/set-role/set-role.component';
import { SmsLoginComponent } from './auth/sms-login/sms-login.component';

import { CanGuard } from './auth/guards/can-guard';
import { CanAdminGuard } from './auth/guards/can-admin-guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminOptionsComponent } from './admin-options/admin-options.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosGrafComponent } from './productos-graf/productos-graf.component';
import { GuiaAnillosComponent } from './guia-anillos/guia-anillos.component';
import { EnviosComponent } from './envios/envios.component';
import { CambiosComponent } from './cambios/cambios.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { FormasPagoComponent } from './formas-pago/formas-pago.component';
import { OfertasComponent } from './QR/ofertas/ofertas.component';

import { HttpClientModule } from '@angular/common/http';
import { VentasAdminComponent } from './ventas-admin/ventas-admin.component';
import { MisComprasComponent } from './mis-compras/mis-compras.component';
import { ComprasComponent } from './compras/compras.component';
import { ExistenciasComponent } from './existencias/existencias.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CarritoComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ToolbarComponent,
    ContactoComponent,
    WikiComponent,
    JoyasComponent,
    JoyaComponent,
    BuscadorComponent,
    FooterComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    SendEmailComponent,
    SetRoleComponent,
    SmsLoginComponent,
    AdminOptionsComponent,
    ProductosComponent,
    ProductosGrafComponent,
    GuiaAnillosComponent,
    EnviosComponent,
    CambiosComponent,
    FacturacionComponent,
    FormasPagoComponent,
    OfertasComponent,
    VentasAdminComponent,
    MisComprasComponent,
    ComprasComponent,
    ExistenciasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    AngularFireAuthModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    CanGuard,
    CanAdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
