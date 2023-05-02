import { Component } from '@angular/core';
import {DashboardService} from "../../../../services/dashboard.service";
import {LineCmdService} from "../../../../services/line-cmd.service";

@Component({
  selector: 'app-simple-dash',
  templateUrl: './simple-dash.component.html',
  styleUrls: ['./simple-dash.component.css']
})
export class SimpleDashComponent {
  dashboardData: any;
  constructor(private dataService: DashboardService,
              private lineCmdService: LineCmdService,
  ) {}

  ngOnInit() {
    this.getDashboardData();
  }
  getDashboardData() {
    this.dataService.getTotalRevenue().subscribe(data => {
      this.dashboardData = data;
    });
  }
}
