import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../../../../../dto/ProductDto';
import { ItemService } from '../../../../../services/item.service';
import {LineCmdService} from "../../../../../services/line-cmd.service";

@Component({
  selector: 'app-items-slide',
  templateUrl: './items-slide.component.html',
  styleUrls: ['./items-slide.component.css']
})
export class ItemsSlideComponent implements OnInit {
  productList: ProductDto[];
  currentPage = 1;
  itemsPerPage = 4;
  itemsPerSlide = 4;
  totalSlides: number;
  autoSlideInterval: any;

  constructor(private productService: ItemService,
              private lineCmdService:LineCmdService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: ProductDto[]) => {
      this.productList = data;
      this.totalSlides = Math.ceil(this.productList.length / this.itemsPerSlide);

      // set up automatic slide interval
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    });
  }

  prevSlide() {
    this.currentPage--;
    if (this.currentPage < 1) {
      this.currentPage = this.totalSlides;
    }
  }

  nextSlide() {
    this.currentPage++;
    if (this.currentPage > this.totalSlides) {
      this.currentPage = 1;
    }
  }

  addToCart(productId: number) {
    const product = this.productList.find((p: any) => p.productId === productId);
    if (product) {
      this.lineCmdService.createLineCmdAndAssignProduct(productId, 1, 1).subscribe((response: string) => {
        console.log(response);
      });
    }
  }
}
