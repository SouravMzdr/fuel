import { Injectable } from '@angular/core';
import { lastRefil } from '../model/last-refil.model';

@Injectable({
  providedIn: 'root'
})
export class RefilService {

  constructor() { }

  // public now: Date = new Date();

  lastRefil:lastRefil={
    amount:null,
    time:null
  }

  getAmount(amount:number){
    this.lastRefil.amount = amount
    this.lastRefil.time = new Date();
  }

  showRefil(){
    console.log(this.lastRefil)
    return this.lastRefil;
  }
}
