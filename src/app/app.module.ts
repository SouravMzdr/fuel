import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrFuelMeterComponent } from './core/curr-fuel-meter/curr-fuel-meter.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrFuelMeterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
