import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  imports: [],
  templateUrl: './form-input.component.html',
  styles: ``
})
export class FormInputComponent {
  holder = input<string>();
  formLabel = input<string>();
}
