import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-conversion-history',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './conversion-history.component.html',
  styleUrls: ['./conversion-history.component.css'],
})
export class ConversionHistoryComponent {
  conversionHistory = [
    { date: '2024-12-01', time: '10:00', from: 'USD', to: 'BRL', amount: 1000, result: 5000, rate: 5.0 },
    { date: '2024-12-02', time: '11:30', from: 'EUR', to: 'USD', amount: 500, result: 550, rate: 1.1 },
  ];
}
