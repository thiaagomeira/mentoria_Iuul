import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../../services/exchange-rate.service';
import { ConversionHistoryService } from '../conversion-history/conversion-history.component';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
  currencies: any[] = [];
  amount: number = 0;

  constructor(
    private exchangeRateService: ExchangeRateService,
    private conversionHistoryService: ConversionHistoryService
  ) {}

  ngOnInit() {
    this.exchangeRateService.getCurrencies().subscribe((data: any) => {
      this.currencies = Object.keys(data.rates).map((key) => ({
        symbol: key,
        name: data.rates[key],
      }));
    });
  }

  convertCurrency(amount: number, from: string, to: string, rate: number) {
    const result = amount * rate;
    const date = new Date();
    const time = date.toLocaleTimeString();
    const formattedDate = date.toLocaleDateString();

    const conversion = {
      date: formattedDate,
      time: time,
      from: from,
      to: to,
      amount: amount,
      result: result,
      rate: rate,
    };

    this.conversionHistoryService.addConversion(conversion);
  }
}
