import { Component, OnInit } from '@angular/core';
import { GetCurrFuelService } from 'src/app/services/get-curr-fuel.service';
import { FuelLevel } from 'src/app/model/curr-fuel-level';


@Component({
  selector: 'app-curr-fuel-meter',
  templateUrl: './curr-fuel-meter.component.html',
  styleUrls: ['./curr-fuel-meter.component.css']
})
export class CurrFuelMeterComponent implements OnInit {

  constructor(private getCurrFuelService:GetCurrFuelService) { }

  fuelLevel:FuelLevel={
    level:null
  };
  level:number;


  ngOnInit(){
    this.getCurrFuelService.getCurrFuel().subscribe(
      (doc)=>{
        this.fuelLevel = Object.assign({},{...doc}) as FuelLevel;
        this.level = this.fuelLevel.level;
        // console.log(this.fuelLevel)
      }
    );
  }

}