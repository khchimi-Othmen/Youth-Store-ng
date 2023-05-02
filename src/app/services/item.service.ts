import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductDto} from "../dto/ProductDto";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly url = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<ProductDto[]>(`${this.url}/getAllProducts`);
  }

  getProductById(productId: number) {
    return this.http.get<ProductDto>(`${this.url}/getProductById/${productId}`);
  }

  createProduct2Cat(productDto: ProductDto, categoryId: number) {
    return this.http.post<ProductDto>(`${this.url}/createProductAndAssignToCategory/${categoryId}`, productDto);
  }

  updateProduct(productDto: ProductDto) {
    return this.http.put(`${this.url}/updateProduct`, productDto);
  }

  deleteProduct(productId: number) {
    return this.http.delete(`${this.url}/deleteProduct/${productId}`);
  }

  searchProductsByName(name: string) {
    return this.http.get<ProductDto[]>(`${this.url}/searchProductsByName?name=${name}`);
  }

  retrieveAllProduct(){
    return this.http.get<ProductDto[]>(this.url + '/getAllProducts')
  }


  getP() {
    return this.http.get<ProductDto[]>(this.url);
  }

  PostP(p:ProductDto){
    return this.http.post(this.url + '/createProduct', p);
  }
  isProductRental(productId: number): Observable<boolean> {
    return this.getProductById(productId).pipe(
      map((product: ProductDto) => product.isRental)
    );
  }
}
