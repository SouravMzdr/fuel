import { Component, OnInit } from '@angular/core';
import { FindNearbyService } from '../services/find-nearby.service';

@Component({
  selector: 'app-find-nearby',
  templateUrl: './find-nearby.component.html',
  styleUrls: ['./find-nearby.component.css']
})
export class FindNearbyComponent implements OnInit {

  constructor(private findNearbyService:FindNearbyService) { }

  ngOnInit() {
    this.findNearbyService.search().subscribe(data =>{
      console.log(data);
      
    })
  }

}
