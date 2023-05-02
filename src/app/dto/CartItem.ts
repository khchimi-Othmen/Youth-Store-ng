import {ProductDto} from "./ProductDto";

export class CartItem {
  product: ProductDto;
  quantite: number;
  nbrRentalPerDays: number;

  constructor(product: ProductDto, quantite: number, nbrRentalPerDays: number) {
    this.product = product;
    this.quantite = quantite;
    this.nbrRentalPerDays = nbrRentalPerDays;
  }
}

