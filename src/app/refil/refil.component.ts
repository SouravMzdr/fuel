import { Component, OnInit } from '@angular/core';
import { RefilService } from '../services/refil.service';
import { lastRefil } from '../model/last-refil.model';

@Component({
  selector: 'app-refil',
  templateUrl: './refil.component.html',
  styleUrls: ['./refil.component.css']
})
export class RefilComponent implements OnInit {

  constructor(private getRefilService:RefilService) { }

  refil:lastRefil={
    amount:null,
    time:null
  }
  interval:any

  ngOnInit() {

    this.refreshData();
    this.interval = setInterval(() => { 
        this.refreshData(); 
    },1000); //get real time fuel level every 5 seconds
  }

  refreshData(){
    this.refil = this.getRefilService.showRefil();
    console.log(this.refil.time)
  }

}
