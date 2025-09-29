import { LucideAngularModule, LucideIconData, CircleAlert, Clock, CircleCheckBig } from 'lucide-angular';
import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-summary-cards',
  imports: [LucideAngularModule],
  templateUrl: './summary-cards.component.html',
  styles: ``
})
export class SummaryCardsComponent {
  readonly Clock = Clock;
  readonly CircleAlert = CircleAlert;
  readonly CircleCheckBig = CircleCheckBig;

  cardTitle = input<string>();
  icon = input<LucideIconData>();
  stats = input<{label:string; value:number}[]>();
} 
