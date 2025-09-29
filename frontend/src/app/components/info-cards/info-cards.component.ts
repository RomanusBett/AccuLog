
import { Component } from '@angular/core';
import { input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-info-cards',
  imports: [LucideAngularModule],
  templateUrl: './info-cards.component.html',
  styles: ``
})
export class InfoCardsComponent {
  title = input<string>();
  figure = input<number>();
  label = input<string>();
  icon = input<LucideIconData>();
}
