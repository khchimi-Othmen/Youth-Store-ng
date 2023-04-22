import {Component, OnInit} from '@angular/core';
import {CategoryDto} from "../../../../dto/CategoryDto";
import {ActivatedRoute} from "@angular/router";
import {CategoriesService} from "../../../../services/categories.service";

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit{
  category: CategoryDto;
  id: number;

  constructor(
    private route :ActivatedRoute,
    private categoriesService : CategoriesService
  ) {
  }
  ngOnInit(): void {
    this.id =+this.route.snapshot.paramMap.get('id');
    this.categoriesService.getCategoryById(this.id).subscribe(
      (category)=>{
        this.category = category;

    }
    )
  }


}
