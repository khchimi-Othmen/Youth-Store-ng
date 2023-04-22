import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineCmdService {

  private baseUrl = 'http://localhost:8080/line-cmds';

  constructor(private http: HttpClient) { }

  createLineCmdAndAssignProduct(productId: number, quantite: number, nbrRentalPerDays: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/createLineCmdAndAssignProduct/${productId}/${quantite}?nbrRentalPerDays=${nbrRentalPerDays}`, null);
  }

  assignCommandToLineCmd(lineCmdId: number, commandId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${lineCmdId}/assignCommand/${commandId}`, null);
  }

  getTotalForLineCmd(lineCmdId: number): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/getTotalForLineCmdAndSaveIt/${lineCmdId}`, null);
  }

  updateQuantityAndTotal(idLinecmd: number, productId: number, newQuantity: number, nbrRentalPerDays: number): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/updateQuantityAndTotal/${idLinecmd}/${productId}/${newQuantity}?nbrRentalPerDays=${nbrRentalPerDays}`, null);
  }
}
