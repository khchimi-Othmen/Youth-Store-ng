import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductDto} from "../dto/ProductDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'http://localhost:8080/dashboard';

  constructor(private http: HttpClient) { }

  getTopSellingProducts(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.baseUrl}/top-selling`);
  }

  getTopWorstProducts(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.baseUrl}/top-worst`);
  }

  getLowStockProducts(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.baseUrl}/low-stock`);
  }

  getTotalRevenue(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/revenue`);
  }


  getRandomProducts(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`http://localhost:8080/products/randomProducts`);
  }


}
