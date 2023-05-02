import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map, Observable, throwError} from 'rxjs';
import {CommandDto} from "../dto/CommandDto";
import {UserDto} from "../dto/UserDto";
import {ProductDto} from "../dto/ProductDto";


@Injectable({
  providedIn: 'root'
})
export class CommandService {
  private baseUrl = 'http://localhost:8080/commands';

  constructor(private http: HttpClient) { }

  createCommand(command: CommandDto): Observable<CommandDto> {
    return this.http.post<CommandDto>(`${this.baseUrl}/create`, command);
  }

  cancelCommand(commandId: number): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/cancelCommand/${commandId}`, null);
  }
  cancelCommandWithoutId(): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/cancelCommand`, null);
  }
  updateCommand(commandDto: any) {
    return this.http.put(`${this.baseUrl}/updateCommand`, commandDto);
  }

  // updateCommand(commandNumber: number, command: CommandDto): Observable<CommandDto> {
  //   return this.http.put<CommandDto>(`${this.baseUrl}/updateCommand/${commandNumber}`, command);
  // }

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

  calculateTotalCostForPendingCommands(): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/calculateTotalCostPerCommand`, null);
  }

  assignDeliveryToCommand(deliveryId: number, commandId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/assignDeliveryToCommand/${deliveryId}/${commandId}`, null);
  }

  // calculateTotalCostPerCommand(commandId: number): Observable<string> {
  //   return this.http.post<string>(`${this.baseUrl}/calculateTotalCostPerCommand/${commandId}`, null);
  // }

  calculateTotalCostForPendingCommand(): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/calculateTotalCostPerCommand`, {});
  }
  // finalizeCommand() {
  //   return this.http.post('http://localhost:8080/commands/commandsfinalize', {});
  // }
  finalizeCommand() {
    return this.http.post('http://localhost:8080/commands/commandsfinalize', {});
  }

  // finalizeCommand(): Observable<string> {
  //   return this.http.post<string>('http://localhost:8080/commands/commandsfinalize', {});
  // }
  // finalizeCommand(commandId: number): Observable<string> {
  //   return this.http.post<string>(`${this.baseUrl}/${commandId}/finalize`, null);
  // }
  getCommandByRef(ref: string): Observable<CommandDto> {
    const url = `${this.baseUrl}/getCommandByRef/${ref}`;
    return this.http.get<CommandDto>(url);
  }

  addToCart(user: UserDto, product: ProductDto, quantity: number): Observable<any> {
    const body = {
      user: user,
      product: product,
      quantity: quantity
    };
    return this.http.post(`${this.baseUrl}/addToCart`, body);
  }
}
