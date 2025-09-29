import { Component } from '@angular/core';
import { LucideAngularModule, Check, CircleAlert } from 'lucide-angular';
import { input } from '@angular/core';
import { ProgressStatusComponent } from '../progress-status/progress-status.component';

@Component({
  selector: 'app-service-cards',
  imports: [LucideAngularModule, ProgressStatusComponent],
  templateUrl: './service-cards.component.html',
  styles: ``
})
export class ServiceCardsComponent {
  readonly Check = Check
  readonly CircleAlert = CircleAlert

  type = input<string>();
  car = input<string>();
  year = input<string>();
  license = input<string>();
  date = input<string>();
  status = input<string>();
  price = input<number>();
  id = input<number>();
}
