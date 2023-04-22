import {CategoryDto} from "./CategoryDto";

export class ProductDto {
  productId!: number;
  name!: string;
  description!: string;
  price!: number;
  producer!: string;
  available!: boolean;
  promotion!: string;
  quantityAvailable!: number;
  isRental!: boolean;
  sales: number;
  category: CategoryDto;
}
