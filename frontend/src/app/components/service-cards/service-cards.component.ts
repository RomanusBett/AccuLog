import { Component } from '@angular/core';
import { LucideAngularModule, Check, TriangleAlert } from 'lucide-angular';
import { input } from '@angular/core';

@Component({
  selector: 'app-service-cards',
  imports: [LucideAngularModule],
  templateUrl: './service-cards.component.html',
  styles: ``
})
export class ServiceCardsComponent {
  readonly Check = Check
  readonly TriangleAlert = TriangleAlert

  type = input<string>();
  car = input<string>();
  year = input<string>();
  license = input<string>();
  date = input<string>();
  status = input<string>();
  price = input<number>();
  id = input<number>();
}
