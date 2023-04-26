import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'http://localhost:8075/dashboard';

  constructor(private http: HttpClient) { }

  getDashboardData() {
    return this.http.get<any>(`${this.baseUrl}/salesAndStockReport`);
  }
}
