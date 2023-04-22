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

  searchCategories(categoryName: string) {
    this.categoriesService.searchCategoriesByName(categoryName).subscribe(
      (data: CategoryDto[]) => {
        this.categoryList = data;
      },
      error => {
        console.log(error);
        alert('An error occurred while searching categories.');
      }
    );
  }


}
