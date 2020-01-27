import { Component, OnInit } from '@angular/core';
import { GetCurrFuelService } from 'src/app/services/get-curr-fuel.service';
import { FuelLevel } from 'src/app/model/curr-fuel-level';
import { RefilService } from 'src/app/services/refil.service';


@Component({
  selector: 'app-curr-fuel-meter',
  templateUrl: './curr-fuel-meter.component.html',
  styleUrls: ['./curr-fuel-meter.component.css']
})
export class CurrFuelMeterComponent implements OnInit {

  constructor(private getCurrFuelService:GetCurrFuelService,
              private refilService:RefilService) { }

  fuelLevel:FuelLevel={
    level:null
  };
  level:number;
  oLevel:number;
  interval:any;
  mode:string;
  refil:number=null;


  ngOnInit(){
    this.refreshData();
    this.interval = setInterval(() => { 
        this.refreshData(); 
    },1000); //get real time fuel level every 1 second
  }

  refreshData(){
    this.getCurrFuelService.getCurrFuel().subscribe(
      (doc)=>{
        this.fuelLevel = Object.assign({},{...doc}) as FuelLevel;
        this.oLevel = this.level;
        this.level = this.fuelLevel.level;
      }
    );
    this.checkIncrease();
  }

  checkIncrease(){
    if (this.level > this.oLevel){
    this.refil = this.level - this.oLevel;
    this.refilService.getAmount(this.refil);
    }
    else{
      this.refil = null
    }
  }

}
