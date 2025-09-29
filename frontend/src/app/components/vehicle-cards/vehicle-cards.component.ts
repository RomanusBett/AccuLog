import { LucideAngularModule, Car } from 'lucide-angular';
import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-vehicle-cards',
  imports: [LucideAngularModule],
  templateUrl: './vehicle-cards.component.html',
  styles: ``
})
export class VehicleCardsComponent {
  readonly Car = Car;

  type = input<string>();
  year = input<string>();
  colour = input<string>();
  license = input<string>();
  services = input<number>();

}
