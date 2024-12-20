import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../../services/exchange-rate.service';

@Component({
  selector: 'app-conversion-form',
  templateUrl: './conversion-form.component.html',
  styleUrls: ['./conversion-form.component.css']
})
export class ConversionFormComponent implements OnInit {
  currencies: any[] = [];
  exchangeRates: any = {};
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  amount: number = 1;
  result: number | null = null;

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit() {
    this.loadCurrencies();
    this.loadExchangeRates();
  }

  loadCurrencies() {
    this.exchangeRateService.getCurrencies().subscribe((data) => {
      this.currencies = Object.keys(data.rates).map((currencyCode) => ({
        symbol: currencyCode,
        value: currencyCode
      }));
    });
  }

  loadExchangeRates() {
    this.exchangeRateService.getExchangeRates(this.fromCurrency).subscribe((data) => {
      this.exchangeRates = data.rates;
      this.calculateResult();
    });
  }

  calculateResult() {
    if (this.fromCurrency && this.toCurrency && this.amount) {
      const fromRate = this.exchangeRates[this.fromCurrency];
      const toRate = this.exchangeRates[this.toCurrency];
      if (fromRate && toRate) {
        this.result = (this.amount * toRate) / fromRate;
      }
    }
  }

  onSubmit() {
    this.calculateResult();
  }

  invertCurrencies() {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
    this.calculateResult(); // Recalcular o resultado após inverter as moedas
  }
}