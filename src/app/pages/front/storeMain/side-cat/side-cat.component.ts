import {Component, OnInit} from '@angular/core';
import {CategoryDto} from "../../../../dto/CategoryDto";
import {CategoriesService} from "../../../../services/categories.service";
import {ProductDto} from "../../../../dto/ProductDto";
import {DashboardService} from "../../../../services/dashboard.service";

@Component({
  selector: 'app-side-cat',
  templateUrl: './side-cat.component.html',
  styleUrls: ['./side-cat.component.css']
})
export class SideCatComponent implements OnInit{
  categoryList: CategoryDto[];
  randomProducts: ProductDto[] = [];


  constructor(private categoriesService :CategoriesService,
              private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getCat();
    this.getRandomProducts();
  }
  getCat(){
    this.categoriesService.getAllCategories().subscribe(
      (data: CategoryDto[])=>{
        this.categoryList = data;
        console.log(data);
      }
    )
  }
  getRandomProducts(){
    this.dashboardService.getRandomProducts().subscribe((products: ProductDto[]) => {
      this.randomProducts = products;
    });
  }

}
