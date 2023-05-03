import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Dashboard} from '../interfaces/dashboard'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public dashboardData:string='../../assets/data/dashboarddata.json'
  constructor(private httpRef:HttpClient) { }

  //get dashboard data
   public getDashboardData():Observable<Dashboard[]>{
    return this.httpRef.get<Dashboard[]>(this.dashboardData)
   }

}
