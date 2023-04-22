import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductDto} from "../../../../dto/ProductDto";
import {ItemService} from "../../../../services/item.service";


@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {
  id: number;
  product: ProductDto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getProductById(this.id).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(product) {
    this.itemService.updateProduct(this.product).subscribe(() => {
      setTimeout(() => {
        this.router.navigate(['/admin/items']);
      }, 500); // delay for 2 seconds (2000 milliseconds)

    });
  }

  onCancel() {
    this.router.navigate(['/admin/items']);
  }

}
