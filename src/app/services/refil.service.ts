import { Injectable } from '@angular/core';
import { lastRefil } from '../model/last-refil.model';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class RefilService {

  constructor(private locationService:LocationService){ }

  // public now: Date = new Date();

  lastRefil:lastRefil={
    amount:null,
    newLevel:null,
    time:null,
    lat:null,
    long:null
  }

  lat:number
  long:number
  

  getAmount(amount:number,newLevel:number){

    this.locationService.getLocation().subscribe(response => {
      this.lastRefil.lat = response.coords.latitude
      this.lastRefil.long = response.coords.longitude
    })
    this.lastRefil.amount = amount
    this.lastRefil.newLevel = newLevel   
    this.lastRefil.time = new Date();

  }

  showRefil(){
    // console.log(this.lastRefil)
    return this.lastRefil;
  }
}
