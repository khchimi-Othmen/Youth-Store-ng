import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {CategoryDto} from "../../../../dto/CategoryDto";
import {CategoriesService} from "../../../../services/categories.service";

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {
  category: CategoryDto = new CategoryDto();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.category = new CategoryDto();
    const id = +this.route.snapshot.paramMap.get('id');
  }

  addCategory() {
    this.categoriesService.createCategory(this.category).subscribe(() =>{
      setTimeout(()=>{
        this.router.navigate(['/admin/cat'])
      },500)
    })
  }
  onCancel() {
    this.router.navigate(['/admin/cat']);
  }
}
