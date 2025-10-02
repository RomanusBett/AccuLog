import { Component } from '@angular/core';
import { input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  imports: [ReactiveFormsModule],
  templateUrl: './form-input.component.html',
  styles: ``
})
export class FormInputComponent {
  holder = input<string>();
  formLabel = input<string>();
  fcName = input<FormControl<any>>();
}
