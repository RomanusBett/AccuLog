import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styles: ``
})
export class ButtonComponent {
  content = input<string>();
}
