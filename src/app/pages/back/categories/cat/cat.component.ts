import {Component, OnInit} from '@angular/core';
import {CategoryDto} from "../../../../dto/CategoryDto";
import {ItemService} from "../../../../services/item.service";
import {CategoriesService} from "../../../../services/categories.service";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit{
  categoryList: CategoryDto[];
  categoryName: any;
  currentPage = 1;
  itemsPerPage = 6;

  constructor(private categoriesService :CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe(
      (data: CategoryDto[])=>{
        this.categoryList = data;
        console.log(data);
      }
    )
  }

  deleteCategory(categoryId: number) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoriesService.deleteCategory(categoryId).subscribe(() => {
        this.categoryList = this.categoryList.filter(cat => cat.categoryId !== categoryId);
        alert('Category deleted successfully!');
      }, error => {
        console.log(error);
        alert('An error occurred while deleting the category.');
      });
    }
  }

  searchCategories() {
    this.categoriesService.searchCategoriesByName(this.categoryName).subscribe(
      (data: CategoryDto[]) => {
        this.categoryList = data;
      },
      error => {
        console.log(error);
        alert('An error occurred while searching categories.');
      }
    );
  }

  get totalPages(): number[] {
    const totalCats = this.categoryList.length;
    const totalPages = Math.ceil(totalCats / this.itemsPerPage);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }
}
