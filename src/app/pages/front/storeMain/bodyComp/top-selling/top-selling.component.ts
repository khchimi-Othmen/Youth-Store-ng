import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../../../../../services/dashboard.service";
import {LineCmdService} from "../../../../../services/line-cmd.service";
import {ShoppingCartService} from "../../../../../services/shopping-cart.service";

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.css']
})
export class TopSellingComponent implements OnInit {
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
  addToCart(productId: number) {
    const product = this.dashboardData.find((p: any) => p.productId === productId);
    if (product) {
      this.lineCmdService.createLineCmdAndAssignProduct(productId, 1, 1).subscribe((response: string) => {
        console.log(response);
      });
    }
  }


}
