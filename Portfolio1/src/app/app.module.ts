import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/plataform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FondoheaderComponent } from './components/fondoheader/fondoheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FondoheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
