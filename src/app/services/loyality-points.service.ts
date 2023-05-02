import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoyaltyPointsService {

  private readonly url = 'http://localhost:8080/LoyalityPoints';

  constructor(private http: HttpClient) {}

  redeemPointsForDiscount(commandId: number, pointsToRedeem: number) {
    return this.http.post(`${this.url}/redeemPointsForDiscount/${commandId}/${pointsToRedeem}`, null, { responseType: 'text' });
  }

}
