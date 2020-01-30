import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs:AngularFirestore) { }

  getUser(){
    // return this.afs.collection('user').doc('F9CoNWDxOHV0XTW6eR4p').valueChanges();    
    return this.afs.collection('user',ref => ref.where('kitId',"==",'testId')).valueChanges();

  }
}
