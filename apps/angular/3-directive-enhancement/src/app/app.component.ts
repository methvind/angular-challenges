import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Person {
  name: string;
}

const DEFAULT_PERSONS: Person[] = [{ name: 'Lucy' }, { name: 'Rusty' }];

@Component({
  selector: 'app-root',
  template: `
    @for (person of persons; track person.name) {
      <div>{{ person.name }} ({{ $index + 1 }} / {{ $count }})</div>
    } @empty {
      <div>The list is empty !!</div>
    }
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  persons: Person[] = DEFAULT_PERSONS;
}
