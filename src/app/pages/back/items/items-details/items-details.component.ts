import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductDto} from "../../../../dto/ProductDto";
import {ItemService} from "../../../../services/item.service";

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.css']
})
export class ItemsDetailsComponent implements OnInit{

  id: number;
  product: ProductDto;
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getProductById(this.id).subscribe((product) => {
      this.product = product;
    });
  }


}
