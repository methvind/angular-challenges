import { inject, Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from './currency.service';

@Pipe({
  name: 'currency',
  standalone: true,
})
export class CurrencyPipe implements PipeTransform {
  private readonly currencyService = inject(CurrencyService);
  private readonly symbol = this.currencyService.symbol;

  transform(price: number): string {
    // TODO: This is not pure because symbol() changes the
    // output for a given input price. We should change the
    // pipe to take the code or symbol as a parameter.
    return `${price}${this.symbol()}`;
  }
}
