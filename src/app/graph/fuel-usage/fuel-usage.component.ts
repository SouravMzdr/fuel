import { Component, OnInit } from '@angular/core';
import { FuelLevel } from 'src/app/model/curr-fuel-level';
import { GetCurrFuelService } from 'src/app/services/get-curr-fuel.service';

@Component({
  selector: 'app-fuel-usage',
  templateUrl: './fuel-usage.component.html',
  styleUrls: ['./fuel-usage.component.css']
})
export class FuelUsageComponent implements OnInit {

  constructor(private getCurrFuelService:GetCurrFuelService) { }

  data:any= new Array();
  interval:any
  oLevel:number;
  level:number


  fuelLevel:FuelLevel={
    level:null,
    density:null
  };

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    animation: {
      duration: 0, // general animation time
    },

  };  
  
  public barChartLabels:any = [];
  public barChartType = 'line';
  public barChartLegend = true;  
  public barChartData = [
    {
      data: this.data, 
      label: 'Fuel Usage',
      fill: false
    },
  ];
  ngOnInit() {
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
        // this.oLevel = this.level;
      }
    );
    if(this.fuelLevel.level != this.oLevel){
      this.data.push(this.level);
      let date = new Date()
      this.barChartLabels.push(new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds());
    }


    // this.data.push(Math.round(10 + Math.random() * (-10 - 10)))
    // console.log(data);
    
    let barChartData = [
      {data: this.data, label: 'Fuel Usage',fill:false},
    ];
    
    this.barChartData = barChartData
  }
}
