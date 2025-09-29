import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-create-button',
  imports: [],
  templateUrl: './create-button.component.html',
  styles: ``
})
export class CreateButtonComponent {
  text = input<string>();
}
