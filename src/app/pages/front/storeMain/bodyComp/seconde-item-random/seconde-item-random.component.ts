import {Component, OnInit} from '@angular/core';
import {ProductDto} from "../../../../../dto/ProductDto";
import {DashboardService} from "../../../../../services/dashboard.service";
import {LineCmdService} from "../../../../../services/line-cmd.service";

@Component({
  selector: 'app-seconde-item-random',
  templateUrl: './seconde-item-random.component.html',
  styleUrls: ['./seconde-item-random.component.css']
})
export class SecondeItemRandomComponent implements OnInit{
  randomProducts: ProductDto[] = [];

  constructor(private dashboardService: DashboardService, private lineCmdService: LineCmdService) {}

  ngOnInit(): void {
    this.dashboardService.getRandomProducts().subscribe((products: ProductDto[]) => {
      this.randomProducts = products;
    });
  }

  addToCart(productId: number) {
    const product = this.randomProducts.find((p: any) => p.productId === productId);
    if (product) {
      this.lineCmdService.createLineCmdAndAssignProduct(productId, 1, 1).subscribe((response: string) => {
        console.log(response);
      });
    }
  }

}
