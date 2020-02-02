import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrFuelMeterComponent } from './core/curr-fuel-meter/curr-fuel-meter.component';


import { environment } from 'src/environments/environment';
import { ChartsModule } from 'ng2-charts';


//Firebase

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UserComponent } from './user/user/user.component';
import { RefilComponent } from './refil/refil.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { DatePipe } from '@angular/common'

import {AgmCoreModule} from '@agm/core';
import { RefilLocationComponent } from './refil-location/refil-location.component';
import { FindNearbyComponent } from './find-nearby/find-nearby.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FuelUsageComponent } from './graph/fuel-usage/fuel-usage.component';
import { PannelComponent } from './ui/pannel/pannel.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrFuelMeterComponent,
    UserComponent,
    RefilComponent,
    NavbarComponent,
    RefilLocationComponent,
    FindNearbyComponent,
    FuelUsageComponent,
    PannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey : environment.googleMapsKey,
    }),
    ChartsModule
    
  ],
  providers: [
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
