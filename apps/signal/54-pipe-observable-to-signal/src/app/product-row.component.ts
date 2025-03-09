import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CurrencyPipe } from './currency.pipe';
import { Product } from './product.model';

@Component({
  selector: 'tr[product-row]',
  template: `
    <td>{{ productInfo.name }}</td>
    <td>{{ productInfo.priceA | currency: productInfo.currencyCode }}</td>
    <td>{{ productInfo.priceB | currency: productInfo.currencyCode }}</td>
    <td>{{ productInfo.priceC | currency: productInfo.currencyCode }}</td>
  `,
  imports: [CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductRowComponent {
  protected productInfo!: Product;

  @Input({ required: true }) set product(product: Product) {
    this.productInfo = product;
  }
}
