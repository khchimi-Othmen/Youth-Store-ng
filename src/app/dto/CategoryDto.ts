import {ProductDto} from "./ProductDto";

export class CategoryDto {
  categoryId!: number;
  name!: string;
  description!: string;
  categoryType!: string;//zayda
  code!: string;
  prduct!:ProductDto;

}
