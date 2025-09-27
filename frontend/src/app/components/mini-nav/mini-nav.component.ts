import { Component, output } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-mini-nav',
  imports: [],
  templateUrl: './mini-nav.component.html',
  styles: ``
})
export class MiniNavComponent {
  navText = input<string>();  
  isActive = input<boolean>();
  clicked = output<void>();
}
