import { computed, Injectable, signal } from '@angular/core';
import { CurrencyCode } from './product.model';

export interface Currency {
  name: string;
  code: CurrencyCode;
  symbol: string;
}

export const currency: Currency[] = [
  { name: 'Euro', code: 'EUR', symbol: '€' },
  { name: 'Dollar US', code: 'USD', symbol: 'US$' },
  { name: 'Dollar Australian', code: 'AUD', symbol: 'AU$' },
  { name: 'Pound Sterling', code: 'GBP', symbol: '£' },
  { name: 'Dollar Canadian', code: 'CAD', symbol: 'CAD' },
];

@Injectable()
export class CurrencyService {
  private code = signal<CurrencyCode>('EUR');

  readonly symbol = computed(() => {
    let code = this.code();
    return currency.find((c) => c.code === code)?.symbol ?? code;
  });

  public updateCode(code: CurrencyCode) {
    this.code.set(code);
  }
}
