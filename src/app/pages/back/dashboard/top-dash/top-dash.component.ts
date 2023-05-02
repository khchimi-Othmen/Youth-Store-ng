import { Component } from '@angular/core';
import {DashboardService} from "../../../../services/dashboard.service";
import {LineCmdService} from "../../../../services/line-cmd.service";

@Component({
  selector: 'app-top-dash',
  templateUrl: './top-dash.component.html',
  styleUrls: ['./top-dash.component.css']
})
export class TopDashComponent {
  dashboardData: any;
  constructor(private dataService: DashboardService,
              private lineCmdService: LineCmdService,
  ) {}

  ngOnInit() {
    this.getDashboardData();
  }
  getDashboardData() {
    this.dataService.getTopSellingProducts().subscribe(data => {
      this.dashboardData = data;
    });
  }


}
