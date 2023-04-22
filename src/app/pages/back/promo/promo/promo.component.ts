import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../../../../services/promotion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDto } from '../../../../dto/ProductDto';
import { ItemService } from '../../../../services/item.service';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css'],
})
export class PromoComponent implements OnInit {
  product: ProductDto;
  promotionName: string;
  promotionAdded = false;
  subtractDiscount: number;
  percentageDiscount: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private promotionService: PromotionService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.itemService.getProductById(productId).subscribe((product) => {
      this.product = product;
      console.log('Product: ', this.product);
    });
  }
  addPromotion() {
    console.log('Adding promotion to product...');
    console.log('Product Id: ', this.product.productId);
    console.log('Promotion Name: ', this.promotionName);
    this.product.promotion = this.promotionName;
    this.itemService.updateProduct(this.product).subscribe(() => {
      this.promotionService.addPromotionToProduct(this.product.productId, this.promotionName).subscribe(() => {
        this.promotionAdded = true;
      });
    });
  }
  applyPercentageDiscount() {
    console.log('Applying percentage discount to product...');
    console.log('Product Id: ', this.product.productId);
    console.log('Percentage Discount: ', this.percentageDiscount);
    this.itemService.updateProduct(this.product).subscribe(() => {
      this.promotionService.applyPercentageDiscountToProduct(this.product.productId, this.percentageDiscount).subscribe(() => {
        console.log('Percentage Discount applied successfully');
      });
    });
  }


  applySubtractDiscount() {
    console.log('Applying ---- discount to product...');
    console.log('Product Id: ', this.product.productId);
    console.log('subtractDiscount : ', this.subtractDiscount);
    this.itemService.updateProduct(this.product).subscribe(() => {
      this.promotionService.applyDiscountToProduct(this.product.productId, this.subtractDiscount).subscribe(() => {
        console.log('subtractDiscount  applied successfully');
      });
    });
  }


  removePromotion() {
    console.log('Removing promotion from product...');
    console.log('Product Id: ', this.product.productId);
    this.product.promotion = null;
    this.itemService.updateProduct(this.product).subscribe(() => {
      this.promotionService.removePromotionFromProduct(this.product.productId).subscribe(() => {
      this.promotionAdded = false;
    });
    });
  }

  onReturn() {
    this.router.navigate(['/admin/items']);
  }

  onCancel() {
    this.router.navigate(['/admin/items']);
  }


}
