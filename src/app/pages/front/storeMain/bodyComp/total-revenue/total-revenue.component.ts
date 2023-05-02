import { Component } from '@angular/core';
import {DashboardService} from "../../../../../services/dashboard.service";
import {LineCmdService} from "../../../../../services/line-cmd.service";

@Component({
  selector: 'app-total-revenue',
  templateUrl: './total-revenue.component.html',
  styleUrls: ['./total-revenue.component.css']
})
export class TotalRevenueComponent {

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
