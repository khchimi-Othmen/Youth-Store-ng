import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharityDto} from "../dto/CharityDto";

@Injectable({
  providedIn: 'root'
})
export class CharityService {

  private baseUrl = 'http://localhost:8075/charity';

  constructor(private http: HttpClient) { }

  createCharity(charity: CharityDto): Observable<CharityDto> {
    return this.http.post<CharityDto>(`${this.baseUrl}/createCharity`, charity);
  }

  updateCharity(id: number, charity: CharityDto): Observable<CharityDto> {
    return this.http.put<CharityDto>(`${this.baseUrl}/updateCharity/${id}`, charity);
  }

  getAllCharities(): Observable<CharityDto[]> {
    return this.http.get<CharityDto[]>(`${this.baseUrl}`);
  }

  getCharityById(id: number): Observable<CharityDto> {
    return this.http.get<CharityDto>(`${this.baseUrl}/getCharityById/${id}`);
  }

  deleteCharity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteCharity/${id}`);
  }

  assignCharityToCommand(commandId: number, charityId: number): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/assignCommandToCharity/${commandId}/${charityId}`, null);
  }

  markCommandAsDonationBEFOREFINALIZ(commandId: number): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/markCommandAsDonationBEFOREFINALIZ/${commandId}`, null);
  }
}
