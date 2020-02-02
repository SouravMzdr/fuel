import { Component, OnInit } from '@angular/core';
import { RefilService } from '../services/refil.service';
import { lastRefil } from '../model/last-refil.model';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-refil',
  templateUrl: './refil.component.html',
  styleUrls: ['./refil.component.css']
})
export class RefilComponent implements OnInit {

  constructor(private getRefilService:RefilService,
              public datepipe: DatePipe) { }

  refil:lastRefil={
    amount:null,
    newLevel:null,
    time:null,
    lat:null,
    long:null
  }
  interval:any
  date:any
  time:any

  ngOnInit() {

    this.refreshData();
    this.interval = setInterval(() => { 
        this.refreshData(); 
    },1000); 
  }

  refreshData(){
    this.refil = this.getRefilService.showRefil();   
    this.date =this.datepipe.transform(this.refil.time, 'yyyy-MM-dd');
    this.time =this.datepipe.transform(this.refil.time, 'hh:mm');
  }

}
