import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

import { debounceTime, take } from 'rxjs/operators'; 

 

@Injectable({
  providedIn: 'root'
})
export class GetCurrFuelService {

  constructor(private afs:AngularFirestore) { }

  getCurrFuel(){
      return this.afs.collection('fuel').doc('rt_fuel').valueChanges().pipe(
        take(1)
      )
  }
}
