import {CategoryDto} from "./CategoryDto";

export class ProductDto {
  productId!: number;
  name!: string;
  description!: string;
  price!: number;
  producer!: string;
  available: boolean = true;
  promotion!: string;
  quantityAvailable!: number;
  isRental: boolean = false;
  sales: number;
  category: CategoryDto;

}
