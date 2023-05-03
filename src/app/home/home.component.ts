import { Component } from '@angular/core';
import {Dashboard} from '../interfaces/dashboard';
import { DashboardService } from '../services/dashboard.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public dashboardData:Dashboard[]=[]
  constructor(private dashboardSerRef:DashboardService){}

  ngOnInit():void{
   this.gettingDashboardData()
  }
  
  // getting dashboard data

  public gettingDashboardData():void{
    try{
      this.dashboardSerRef.getDashboardData().subscribe({
        next:(data)=>
        {
        this.dashboardData=data
        console.log(this.dashboardData)
        },
        error:(error)=>{
        console.log(error)
        },
        complete:()=>{
          console.log("completed")
        }
      })
    }catch(error){
      console.log('error',error)
    }
  }


}
