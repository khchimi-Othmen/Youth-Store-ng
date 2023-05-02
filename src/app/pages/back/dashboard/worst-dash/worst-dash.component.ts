import { Component } from '@angular/core';
import {DashboardService} from "../../../../services/dashboard.service";
import {LineCmdService} from "../../../../services/line-cmd.service";

@Component({
  selector: 'app-worst-dash',
  templateUrl: './worst-dash.component.html',
  styleUrls: ['./worst-dash.component.css']
})
export class WorstDashComponent {
  dashboardData: any;
  constructor(private dataService: DashboardService,
              private lineCmdService: LineCmdService,
  ) {}

  ngOnInit() {
    this.getDashboardData();
  }
  getDashboardData() {
    this.dataService.getTopWorstProducts().subscribe(data => {
      this.dashboardData = data;
    });
  }

}
