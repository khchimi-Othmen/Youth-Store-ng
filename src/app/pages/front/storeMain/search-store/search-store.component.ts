import { Component } from '@angular/core';
import {ItemService} from "../../../../services/item.service";
import {PromotionService} from "../../../../services/promotion.service";
import {ProductDto} from "../../../../dto/ProductDto";

@Component({
  selector: 'app-search-store',
  templateUrl: './search-store.component.html',
  styleUrls: ['./search-store.component.css']
})
export class SearchStoreComponent {
  productList: ProductDto[];
  searchValue: string;
  constructor(
    private productService: ItemService,) { }
  searchProducts() {
    this.productService.searchProductsByName(this.searchValue)
      .subscribe(products => {
        this.productList = products;
      });
  }


}
