import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { Dashboard } from '../interfaces/dashboard';

@Component({
  selector: 'app-dashboarddetail',
  templateUrl: './dashboarddetail.component.html',
  styleUrls: ['./dashboarddetail.component.scss']
})
export class DashboarddetailComponent implements OnInit {
  public id:string='';
  public dashboardData:Dashboard[]=[]
  constructor(private route:ActivatedRoute,private serviceRef:DashboardService){}

  ngOnInit(): void {
   this.gettingRoutingValue()
   this.onDashboardValues()
  }

  //getting routing value
  public gettingRoutingValue():void{
    this.route.params.subscribe((params)=>{
      this.id=params['id']
      console.log(this.id)
        })
  }

  //getting dashboardValues
  public onDashboardValues():void{
    try{
        this.serviceRef.getDashboardData().subscribe({
          next:(data)=>{
            this.dashboardData=data
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
