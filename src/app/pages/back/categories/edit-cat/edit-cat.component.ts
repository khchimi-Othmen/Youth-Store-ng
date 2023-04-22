import { Component, OnInit } from '@angular/core';
import { CategoryDto } from '../../../../dto/CategoryDto';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../../../services/categories.service';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css'],
})
export class EditCatComponent implements OnInit {
  id: number;
  category: CategoryDto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.categoriesService.getCategoryById(this.id).subscribe((category) => {
      this.category = category;
    });
  }

  updateCategory() {
    this.categoriesService.updateCategory(this.category).subscribe(() => {
      setTimeout(() => {
        this.router.navigate(['/admin/cat']);
      }, 500);
    });
  }

  onCancel() {
    this.router.navigate(['/admin/cat']);
  }
}
