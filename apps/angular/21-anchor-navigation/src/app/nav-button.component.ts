/* eslint-disable @angular-eslint/component-selector */
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nav-button',
  imports: [RouterLink],
  standalone: true,
  template: `
    <a [routerLink]="href()" [fragment]="fragment()">
      <ng-content></ng-content>
    </a>
  `,
  host: {
    class: 'block w-fit border border-red-500 rounded-md p-4 m-2',
  },
})
export class NavButtonComponent {
  public readonly href = input.required<string>();
  public readonly fragment = input<string>('');
}
