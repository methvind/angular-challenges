import { Component } from '@angular/core';
import { createVehicle } from './vehicle.utils';

@Component({
  standalone: true,
  selector: 'app-root',
  template: ``,
})
export class AppComponent {
  car = createVehicle('car', 'diesel');
  moto = createVehicle('moto', 'diesel');
  bus = createVehicle('bus', 20, true); // Could also have been boat = createVehicle('boat', 20);
  boat = createVehicle('boat', 300); // Could also have been bus = createVehicle('bus', 300, true);
  bicycle = createVehicle('bicycle');
}
