import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrFuelMeterComponent } from './core/curr-fuel-meter/curr-fuel-meter.component';


import { environment } from 'src/environments/environment';

//Firebase

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UserComponent } from './user/user/user.component';
import { RefilComponent } from './refil/refil.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { isPlatformBrowser } from '@angular/common';

import {AgmCoreModule} from '@agm/core';
import { RefilLocationComponent } from './refil-location/refil-location.component'

@NgModule({
  declarations: [
    AppComponent,
    CurrFuelMeterComponent,
    UserComponent,
    RefilComponent,
    NavbarComponent,
    RefilLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey : environment.googleMapsKey
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
