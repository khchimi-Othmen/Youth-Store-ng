import { Component, OnInit } from '@angular/core';
import { ProductDto } from "../../../../dto/ProductDto";
import { ItemService } from "../../../../services/item.service";
import {PromotionService} from "../../../../services/promotion.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  productList: ProductDto[];
  searchValue: string;
  currentPage = 1;
  itemsPerPage = 6;


  constructor(
    private productService: ItemService,
    private promotionService: PromotionService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: ProductDto[]) => {
      this.productList = data;
      console.log(data);
    });
  }

  searchProducts() {
    this.productService.searchProductsByName(this.searchValue)
      .subscribe(products => {
        this.productList = products;
      });
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.productList = this.productList.filter(product => product.productId !== id);
      });
    }
  }
  get totalPages(): number[] {
    const totalProducts = this.productList.length;
    const totalPages = Math.ceil(totalProducts / this.itemsPerPage);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

}
