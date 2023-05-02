import {Component, OnInit} from '@angular/core';
import {ProductDto} from "../../../dto/ProductDto";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../../../services/item.service";
import {LineCmdService} from "../../../services/line-cmd.service";

@Component({
  selector: 'app-item-details-user',
  templateUrl: './item-details-user.component.html',
  styleUrls: ['./item-details-user.component.css']
})
export class ItemDetailsUserComponent implements OnInit{

  id: number;
  product: ProductDto;
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private lineCmdService: LineCmdService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getProductById(this.id).subscribe((product) => {
      this.product = product;
    });
  }


  addToCart(productId: number) {
    // Call the createLineCmdAndAssignProduct method from the service
    this.lineCmdService
      .createLineCmdAndAssignProduct(this.id, 1, 1)
      .subscribe((response) => {
        console.log(response);
      });

    // Delay navigation to the user/store page
    // setTimeout(() => {
    //   this.router.navigate(['/user/store']);
    // }, 5000); // 3 second delay
  }
}
