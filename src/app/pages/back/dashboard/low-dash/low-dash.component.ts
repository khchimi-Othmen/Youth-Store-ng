import { Component } from '@angular/core';
import {DashboardService} from "../../../../services/dashboard.service";
import {LineCmdService} from "../../../../services/line-cmd.service";

@Component({
  selector: 'app-low-dash',
  templateUrl: './low-dash.component.html',
  styleUrls: ['./low-dash.component.css']
})
export class LowDashComponent {
  dashboardData: any;
  constructor(private dataService: DashboardService,
              private lineCmdService: LineCmdService,
  ) {}

  ngOnInit() {
    this.getDashboardData();
  }
  getDashboardData() {
    this.dataService.getLowStockProducts().subscribe(data => {
      this.dashboardData = data;
    });
  }

}
