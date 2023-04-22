import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../../../../dto/ProductDto';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../../../services/item.service';
import { CategoryDto } from '../../../../dto/CategoryDto';
import { CategoriesService } from '../../../../services/categories.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  product: ProductDto;
  id: number;
  categories: CategoryDto[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.product = new ProductDto(); // Create a new instance of ProductDto
    this.loadCategories(); // load the categories
  }

  loadCategories() {
    // Call getAllCategories() from the CategoriesService and subscribe to the returned Observable
    this.categoriesService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  addProduct(product) {
    const categoryId = this.product.category.categoryId; // get the id of the selected category
    this.itemService.createProduct2Cat(this.product, categoryId).subscribe(() => {
      setTimeout(() => {
        this.router.navigate(['/admin/items']);
      }, 500); // delay for 0.5 seconds (500 milliseconds)
    });

  }


  onCancel() {
    this.router.navigate(['/admin/items']);
  }
}
