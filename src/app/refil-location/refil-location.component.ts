import { Component, OnInit } from '@angular/core';
import { RefilService } from '../services/refil.service';
import { lastRefil } from '../model/last-refil.model';

@Component({
  selector: 'app-refil-location',
  templateUrl: './refil-location.component.html',
  styleUrls: ['./refil-location.component.css']
})
export class RefilLocationComponent implements OnInit {

  constructor(private refilService:RefilService) { }

  location:any
  lastRefil:lastRefil
  private geoCoder;
  
  // getAddress(latitude, longitude) {
  //   this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
  //     console.log(results);
  //     console.log(status);
  //   });
  // }

  ngOnInit() {
    this.lastRefil = this.refilService.showRefil()
    this.location = {
        // latitude: this.lastRefil.lat,
        // longitude: this.lastRefil.long,
        
        // 26.7509° N, 94.2037° E
        latitude : 26.7469041,
        longitude : 94.2478312,
        zoom:15
    }
    console.log(this.location.latitude);
    
    // this.getAddress(this.location.lat,this.location.long)
}

}
