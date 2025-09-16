import { Component, input } from '@angular/core';

@Component({
  selector: 'app-f-input',
  imports: [],
  templateUrl: './f-input.component.html',
  styles: ``
})
export class FInputComponent {
  label = input<string>();
  placeholder = input<string>();
  type = input<string>();
}
