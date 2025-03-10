import { Component, inject } from '@angular/core';
import { TIMER_DURATION } from './timer-duration';
import { TimerComponent } from './timer.component';

@Component({
  selector: 'timer-container',
  imports: [TimerComponent],
  template: `
    <div class="flex gap-2">
      Timer container:
      <p class="italic">(timer is {{ timer }}s)</p>
    </div>
    <timer />
  `,
  host: {
    class: 'border rounded-md flex p-4 gap-10',
  },
})
export class TimerContainerComponent {
  protected readonly timer = inject(TIMER_DURATION);
}
