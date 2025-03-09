import { CDFlashingDirective } from '@angular-challenges/shared/directives';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserStore } from './user.service';

@Component({
  selector: 'address-user',
  template: `
    <div cd-flash class="m-4 block border border-gray-500 p-4">
      Address:
      <div>Street: {{ address().street }}</div>
      <div>ZipCode: {{ address().zipCode }}</div>
      <div>City: {{ address().city }}</div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CDFlashingDirective],
})
export class AddressComponent {
  private readonly userService = inject(UserStore);
  protected readonly address = this.userService.userAddress;
}
