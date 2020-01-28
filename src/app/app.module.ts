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

@NgModule({
  declarations: [
    AppComponent,
    CurrFuelMeterComponent,
    UserComponent,
    RefilComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
