import {ProductDto} from "./ProductDto";
import {CommandDto} from "./CommandDto";

export class LineCmdDto {
  id!: number;
  quantite!: number;
  total!: number;
  nbrRentalPerDays!: number;
  productDto!: ProductDto;
  commandDto!: CommandDto;
}
