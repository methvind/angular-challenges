import { computed, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserStore {
  public readonly user = signal({
    name: 'Bob',
    address: {
      street: '',
      zipCode: '',
      city: '',
    },
    note: '',
    title: '',
    salary: 0,
  });

  public readonly userName = computed(() => this.user().name);
  public readonly userAddress = computed(() => this.user().address, {
    equal: (a, b) => {
      return (
        (a === undefined && b === undefined) ||
        (a === null && b === null) ||
        (a.street === b.street && a.zipCode === b.zipCode && a.city === b.city)
      );
    },
  });
  public readonly userNote = computed(() => this.user().note);
  public readonly userTitle = computed(() => this.user().title);
  public readonly salary = computed(() => this.user().salary);
}
