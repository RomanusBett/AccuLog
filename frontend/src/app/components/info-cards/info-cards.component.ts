import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-info-cards',
  imports: [],
  templateUrl: './info-cards.component.html',
  styles: ``
})
export class InfoCardsComponent {
  title = input<string>();
  figure = input<number>();
  label = input<string>();

}
