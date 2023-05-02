import {Component, OnInit} from '@angular/core';
import {ProductDto} from "../../../../../dto/ProductDto";
import {ItemService} from "../../../../../services/item.service";
import {DashboardService} from "../../../../../services/dashboard.service";

@Component({
  selector: 'app-item-random',
  templateUrl: './item-random.component.html',
  styleUrls: ['./item-random.component.css']
})
export class ItemRandomComponent implements OnInit{
  randomProducts: ProductDto[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getRandomProducts().subscribe((products: ProductDto[]) => {
      this.randomProducts = products;
    });
  }
}
