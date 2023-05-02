import { Component } from '@angular/core';
import {DashboardService} from "../../../../services/dashboard.service";
import {LineCmdService} from "../../../../services/line-cmd.service";

@Component({
  selector: 'app-total-revenue-dash',
  templateUrl: './total-revenue-dash.component.html',
  styleUrls: ['./total-revenue-dash.component.css']
})
export class TotalRevenueDashComponent {
  totalRevenue: number;

  constructor(private dataService: DashboardService) {}

  getTotalRevenue() {
    this.dataService.getTotalRevenue().subscribe(
      (data) => {
        this.totalRevenue = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
