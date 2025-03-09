import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyCode } from './product.model';

export interface Currency {
  name: string;
  code: CurrencyCode;
  symbol: string;
}

const currency: Currency[] = [
  { name: 'Euro', code: 'EUR', symbol: '€' },
  { name: 'Dollar US', code: 'USD', symbol: 'US$' },
  { name: 'Dollar Australian', code: 'AUD', symbol: 'AU$' },
  { name: 'Pound Sterling', code: 'GBP', symbol: '£' },
  { name: 'Dollar Canadian', code: 'CAD', symbol: 'CAD' },
];

@Pipe({
  name: 'currency',
  standalone: true,
})
export class CurrencyPipe implements PipeTransform {
  transform(price: number, code: CurrencyCode): string {
    let symbol = currency.find((c) => c.code === code)?.symbol ?? code;
    return `${price}${symbol}`;
  }
}
