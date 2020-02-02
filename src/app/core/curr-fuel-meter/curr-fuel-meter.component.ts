import { Component, OnInit } from '@angular/core';
import { GetCurrFuelService } from 'src/app/services/get-curr-fuel.service';
import { FuelLevel } from 'src/app/model/curr-fuel-level';
import { RefilService } from 'src/app/services/refil.service';
// import { StreamPriorityOptions } from 'http2';


@Component({
  selector: 'app-curr-fuel-meter',
  templateUrl: './curr-fuel-meter.component.html',
  styleUrls: ['./curr-fuel-meter.component.css']
})
export class CurrFuelMeterComponent implements OnInit {

  constructor(private getCurrFuelService:GetCurrFuelService,
              private refilService:RefilService) { }

  fuelLevel:FuelLevel={
    level:null,
    density:null
  };
  level:number;
  oLevel:number;
  density:any;
  interval:any;
  mode:string;
  refil:number=null;

  lat:number
  long:number


  ngOnInit(){
    this.refreshData();

    this.interval = setInterval(() => { 
        this.refreshData(); 
    },1500); //get real time fuel level every 1 second
  }

  refreshData(){
    this.getCurrFuelService.getCurrFuel().subscribe(
      (doc)=>{
        this.fuelLevel = Object.assign({},{...doc}) as FuelLevel;
        this.oLevel = this.level;
        this.level = this.fuelLevel.level;
        this.density = this.fuelLevel.density
      }
    );
    this.checkIncrease();
  }

  checkIncrease(){
    // console.log(this.level);
    // console.log(this.oLevel);
    if (this.level > this.oLevel){
      let delta:number = this.level - this.oLevel
      if (delta > 0 ){
        this.refil = this.level - this.oLevel;    
        this.refilService.getAmount(this.refil,this.level);
      }
      
    }
    else{
      this.refil = null
    }
  }


}
