import { Injectable } from '@angular/core';

interface Conversion {
  date: string;
  time: string;
  from: string;
  to: string;
  amount: number;
  result: number;
  rate: number;
}

@Injectable({
  providedIn: 'root',
})
export class ConversionHistoryService {
  private conversionHistory: Conversion[] = [];

  addConversion(conversion: Conversion) {
    this.conversionHistory.push(conversion);
  }

  getConversionHistory(): Conversion[] {
    return this.conversionHistory;
  }
}
