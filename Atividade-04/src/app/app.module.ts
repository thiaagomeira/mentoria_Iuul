import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { ConversionFormComponent } from './components/conversion-form/conversion-form.component';
import { ConversionHistoryComponent } from './components/conversion-history/conversion-history.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

const appRoutes: Routes = [
  { path: 'converter', component: ConversionFormComponent },
  { path: 'moedas', component: CurrencyListComponent },
  { path: 'historico', component: ConversionHistoryComponent },
  { path: '', redirectTo: '/converter', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent,
    ConversionFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    ConversionHistoryComponent,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
