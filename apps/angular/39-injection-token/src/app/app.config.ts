import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DEFAULT_TIMER } from './data';
import { TIMER_DURATION } from './timer-duration';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', pathMatch: 'full', redirectTo: 'video' },
      { path: 'video', loadComponent: () => import('./video.component') },
      { path: 'phone', loadComponent: () => import('./phone.component') },
    ]),
    {
      provide: TIMER_DURATION,
      useValue: DEFAULT_TIMER,
    },
  ],
};
