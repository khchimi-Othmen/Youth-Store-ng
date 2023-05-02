import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../../../../../services/dashboard.service";
import {LineCmdService} from "../../../../../services/line-cmd.service";

@Component({
  selector: 'app-item-promo',
  templateUrl: './item-promo.component.html',
  styleUrls: ['./item-promo.component.css']
})
export class ItemPromoComponent  implements OnInit {
  dashboardData: any;
  constructor(private dataService: DashboardService,
              private lineCmdService:LineCmdService) {}

  ngOnInit() {
    this.getDashboardData();
  }
  getDashboardData() {
    this.dataService.getTopWorstProducts().subscribe(data => {
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
