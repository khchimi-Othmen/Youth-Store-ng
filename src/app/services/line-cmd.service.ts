import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {ProductDto} from "../dto/ProductDto";
import {LineCmdDto} from "../dto/LineCmdDto";

@Injectable({
  providedIn: 'root'
})
export class LineCmdService {

  private baseUrl = 'http://localhost:8080/line-cmds';

  constructor(private http: HttpClient) { }


  createLineCmdAndAssignProduct(productId: number, quantite: number, nbrRentalPerDays: number) {
    const url = `${this.baseUrl}/createLineCmdAndAssignProduct/${productId}/${quantite}/${nbrRentalPerDays}`;
    return this.http.post<string>(url, null);
  }
  getAllLineCmd(){
    return this.http.get<LineCmdDto[]>(this.baseUrl+"/getAllLineCmd")
  }

  deleteLineCmd(lineCmdId: number): Observable<void> {
    const url = `${this.baseUrl}/deleteLineCmd?lineCmdId=${lineCmdId}`;
    return this.http.delete<void>(url);
  }
  getLineCmdQuantity(lineCmdId: number): Observable<number> {
    const url = `${this.baseUrl}/getLineCmdQuantity?lineCmdId=${lineCmdId}`;
    return this.http.get<number>(url);
  }

  updateLineCmdQuantity(lineCmdId: number, quantity: number): Observable<LineCmdDto> {
    const url = `${this.baseUrl}/updateLineCmdQuantity/${lineCmdId}/${quantity}`;
    return this.http.put<LineCmdDto>(url, {});
  }
  updateLineCmdNbrRentalPerDays(lineCmdId: number, nbrRentalPerDays: number): Observable<LineCmdDto> {
    const url = `http://localhost:8080/line-cmds/updateLineCmdNbrRentalPerDays/${lineCmdId}/${nbrRentalPerDays}`;
    return this.http.put<LineCmdDto>(url, {});
  }

  assignLineCmdToCommand(lineCmdId: number) {
    const url = `${this.baseUrl}/assignLineCmdToCommand/${lineCmdId}`;
    return this.http.put(url, null);
  }

  // assignCommandToLineCmd(lineCmdId: number, commandId: number): Observable<void> {
  //   return this.http.put<void>(`${this.baseUrl}/${lineCmdId}/assignCommand/${commandId}`, null);
  // }

  getTotalForLineCmd(lineCmdId: number): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/getTotalForLineCmdAndSaveIt/${lineCmdId}`, null);
  }

  updateQuantityAndTotal(idLinecmd: number, productId: number, newQuantity: number, nbrRentalPerDays: number): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/updateQuantityAndTotal/${idLinecmd}/${productId}/${newQuantity}?nbrRentalPerDays=${nbrRentalPerDays}`, null);
  }


  getLineCmdsByCommandId(commandId:number){
    return this.http.get<LineCmdDto[]>(this.baseUrl+"/getLineCmdByCommandId?commandId=" + commandId)
  }
  getProductNameForLineCmd(lineCmdId: number): Observable<string> {
    const url = `${this.baseUrl}/getProductNameForLineCmd/${lineCmdId}`;
    return this.http.get(url, { responseType: 'text' })
      .pipe(
        map(response => response.trim())
      );
  }


}
