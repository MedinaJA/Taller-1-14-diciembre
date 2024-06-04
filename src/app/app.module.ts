import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthModule } from '@auth0/auth0-angular';
import { PreciosComponent } from './components/precios/precios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-yafjdsikub1y733r.us.auth0.com',
      clientId: 'sAUaW88rPUnwDIX4JF9M8p1D6GlYqHq7',
      authorizationParams: {
        redirect_uri: window.location.origin
      },
      cacheLocation: 'localstorage',
      useRefreshTokens: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
