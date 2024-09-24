import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
import { SharedPaisesModule } from './shared-paises/shared-paises.module';
import { PaisesModule } from './paises/paises.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    AppRoutingModule,
    HttpClientModule,

    SharedModule,
    GifsModule,
    SharedPaisesModule,
    PaisesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
