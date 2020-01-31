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
    newLevel:null,
    time:null,
    lat:null,
    long:null
  }
  interval:any

  ngOnInit() {

    this.refreshData();
    this.interval = setInterval(() => { 
        this.refreshData(); 
    },1000); 
  }

  refreshData(){
    this.refil = this.getRefilService.showRefil();   
  }

}
