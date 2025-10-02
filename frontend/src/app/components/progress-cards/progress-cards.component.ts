import { Component } from '@angular/core';
import { input } from '@angular/core';
import { ProgressStatusComponent } from "../progress-status/progress-status.component";
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-progress-cards',
  imports: [ButtonComponent, ProgressStatusComponent],
  templateUrl: './progress-cards.component.html',
  styles: ``
})
export class ProgressCardsComponent {
  serviceType = input<string>();
  year = input<string>();
  model = input<string>();
  plate = input<string>();
  dueAmount = input<number>();
  customer = input<string>();
  status = input<string>();
  id = input<number>();
}
