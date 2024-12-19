import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {
  currencies: any[] = [];
  cols!: any[];
  totalRecords!: number;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe((data: any) => {
      this.currencies = Object.entries(data.symbols).map(([code, name]) => ({
        code,
        name,
      }));
    });

    this.cols = [
      { field: 'code', header: 'Código' },
      { field: 'name', header: 'Nome da Moeda' },
    ];
  }
}