import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard.service';
import {ChartData} from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: any;
  chartData: ChartData;


  constructor(private dataService: DashboardService) {}

  ngOnInit() {
    this.getDashboardData();
  }

  getDashboardData() {
    this.dataService.getDashboardData().subscribe(data => {
      this.dashboardData = data;

      const labels = this.dashboardData.topSellingProducts.map(
        (product: any) => product.name
      );
      const dataPoints = this.dashboardData.topSellingProducts.map(
        (product: any) => product.sales
      );

      this.chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Top selling products',
            data: dataPoints,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      };
    });
  }

  // getDashboardData() {
  //   this.dataService.getDashboardData().subscribe(data => {
  //     this.dashboardData = data;
  //   });
  // }
}
