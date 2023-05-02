import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDto } from '../dto/ProductDto';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private readonly url = 'http://localhost:8080/promotions';

  constructor(private http: HttpClient) {}

  getProductsByPromotion(promotionName: string) {
    return this.http.get<ProductDto[]>(`${this.url}/getProductsByPromotion?promotionName=${promotionName}`);
  }

  // addPromotionToProduct(productId: number, promotionName: string) {
  //   console.log(`Sending PUT request to ${this.url}/${productId}/addPromotionToProduct?promotionName=${promotionName}`);
  //   return this.http.put(`${this.url}/${productId}/addPromotionToProduct?promotionName=${promotionName}`, null);
  // }
  //
  //
  // applyDiscountToProduct(productId: number, discount: number) {
  //   return this.http.put(`${this.url}/${productId}/${discount}/applyDiscountToProduct`, null);
  // }
  //
  // applyPercentageDiscountToProduct(productId: number, percentageDiscount: number) {
  //   return this.http.put(`${this.url}/${productId}/applyPercentageDiscountToProduct?percentageDiscount=${percentageDiscount}`, null);
  // }
  addPromotionToProduct(productId: number, promotionName: string) {
    return this.http.put(this.url + '/' + productId + '/addPromotionToProduct?promotionName=' + promotionName, null);
  }

  applyDiscountToProduct(productId: number, discount: number) {
    const url = `${this.url}/applyDiscountToProduct?productId=${productId}&discount=${discount}`;
    console.log('URL: ', url);
    return this.http.put(url, null);
  }

  applyPercentageDiscountToProduct(productId: number, percentageDiscount: number) {
    return this.http.put(this.url + '/' + productId + '/applyPercentageDiscountToProduct?percentageDiscount=' + percentageDiscount, null);
  }

  removePromotionFromProduct(productId: number) {
    return this.http.delete(`${this.url}/${productId}/removePromotionFromProduct`);
  }
}
