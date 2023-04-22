import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CommandDto} from "../dto/CommandDto";


@Injectable({
  providedIn: 'root'
})
export class CommandService {
  private baseUrl = 'http://localhost:8075/commands';

  constructor(private http: HttpClient) { }

  createCommand(command: CommandDto): Observable<CommandDto> {
    return this.http.post<CommandDto>(`${this.baseUrl}/create`, command);
  }

  cancelCommand(commandId: number): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/cancelCommand/${commandId}`, null);
  }

  updateCommand(commandNumber: number, command: CommandDto): Observable<CommandDto> {
    return this.http.put<CommandDto>(`${this.baseUrl}/updateCommand/${commandNumber}`, command);
  }

  deleteCommand(commandNumber: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteCommand/${commandNumber}`);
  }

  getCommandById(commandNumber: number): Observable<CommandDto> {
    return this.http.get<CommandDto>(`${this.baseUrl}/getCommandById/${commandNumber}`);
  }

  getAllCommands(): Observable<CommandDto[]> {
    return this.http.get<CommandDto[]>(`${this.baseUrl}/getAllCommands`);
  }
  getAllC(): Observable<CommandDto[]> {
    return this.http.get<CommandDto[]>(`${this.baseUrl}/getAllC`);
  }

  assignCommandToUser(commandId: number, userId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/assignCommandToUser/${commandId}/${userId}`, null);
  }

  assignDeliveryToCommand(deliveryId: number, commandId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/assignDeliveryToCommand/${deliveryId}/${commandId}`, null);
  }

  calculateTotalCostPerCommand(commandId: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/calculateTotalCostPerCommand/${commandId}`, null);
  }

  finalizeCommand(commandId: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/${commandId}/finalize`, null);
  }
  getCommandByRef(ref: string): Observable<CommandDto> {
    const url = `${this.baseUrl}/getCommandByRef/${ref}`;
    return this.http.get<CommandDto>(url);
  }


}
