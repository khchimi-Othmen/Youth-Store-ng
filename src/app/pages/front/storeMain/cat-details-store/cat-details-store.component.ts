import { Component, OnInit } from '@angular/core';
import { CategoryDto } from "../../../../dto/CategoryDto";
import { ActivatedRoute } from "@angular/router";
import { CategoriesService } from "../../../../services/categories.service";
import { ProductDto } from "../../../../dto/ProductDto";
import { ItemService } from "../../../../services/item.service";
import {LineCmdService} from "../../../../services/line-cmd.service";

@Component({
  selector: 'app-cat-details-store',
  templateUrl: './cat-details-store.component.html',
  styleUrls: ['./cat-details-store.component.css']
})
export class CatDetailsStoreComponent implements OnInit {
  category: CategoryDto;
  categoryName: string;
  id: number;
  productList: ProductDto[];
  currentPage = 1;
  itemsPerSlide = 12;
  totalSlides: number;
  autoSlideInterval: any;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private lineCmdService: LineCmdService,
  ) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getP();
  }

  getP() {
    this.categoriesService.getProductsByCategory(this.id).subscribe(
      (data: ProductDto[]) => {
        this.productList = data;
        this.totalSlides = Math.ceil(this.productList.length / this.itemsPerSlide);

        // set up automatic slide interval
        this.autoSlideInterval = setInterval(() => {
          this.nextSlide();
        }, 5000);
      });

    this.categoriesService.getCategoryById(this.id).subscribe(
      (data: CategoryDto) => {
        this.category = data;
        this.categoryName = this.category.name; // set the name of the category
      });
  }
  addToCart(productId: number) {
    const product = this.productList.find((p: any) => p.productId === productId);
    if (product) {
      this.lineCmdService.createLineCmdAndAssignProduct(productId, 1, 1).subscribe((response: string) => {
        console.log(response);
      });
    }
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

}
