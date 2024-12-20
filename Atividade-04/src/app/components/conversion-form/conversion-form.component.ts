import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../../services/exchange-rate.service';

@Component({
  selector: 'app-conversion-form',
  templateUrl: './conversion-form.component.html',
  styleUrls: ['./conversion-form.component.css']
})
export class ConversionFormComponent implements OnInit {
  currencies: any[] = [];   // Lista de moedas disponíveis
  exchangeRates: any = {};  // Dicionário de taxas de câmbio
  fromCurrency: string = 'USD';  // Moeda de origem
  toCurrency: string = 'EUR';    // Moeda de destino
  amount: number = 1;            // Valor a ser convertido
  result: number | null = null;  // Resultado da conversão

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit() {
    this.loadCurrencies();
    this.loadExchangeRates(); // Carregar taxas de câmbio ao iniciar
  }

  // Carregar lista de moedas disponíveis
  loadCurrencies() {
    this.exchangeRateService.getCurrencies().subscribe((data) => {
      this.currencies = Object.keys(data.rates);  // Pega as moedas do objeto de taxas
    });
  }

  // Carregar as taxas de câmbio baseadas na moeda selecionada
  loadExchangeRates() {
    this.exchangeRateService.getExchangeRates(this.fromCurrency).subscribe((data) => {
      this.exchangeRates = data.rates;  // Armazenar as taxas de câmbio
      this.calculateResult();  // Calcular o resultado com base nas novas taxas
    });
  }

  // Calcular o resultado da conversão
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
}
