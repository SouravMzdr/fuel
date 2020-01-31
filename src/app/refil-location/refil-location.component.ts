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

  ngOnInit() {
    this.lastRefil = this.refilService.showRefil()
    this.location = {
        latitude: this.lastRefil.lat,
        longitude: this.lastRefil.long,
        zoom:15
    }
}

}
