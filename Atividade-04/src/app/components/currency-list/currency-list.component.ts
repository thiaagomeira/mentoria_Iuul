import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../../services/exchange-rate.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
onSearch($event: Event,arg1: string) {
throw new Error('Method not implemented.');
}
  currencies: any[] = [];

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit() {
    this.exchangeRateService.getCurrencies().subscribe((data: any) => {
      this.currencies = data;  // Supondo que "data" seja um array de moedas
    });
  }
}
