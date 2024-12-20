import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/';

  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}USD`);
  }

  convertCurrency(from: string, to: string, amount: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${from}`);
  }
}
