import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Component, input, output } from '@angular/core';
import { LucideAngularModule, LogIn } from 'lucide-angular';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-auth-form',
  imports: [LucideAngularModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styles: ``
})

export class AuthFormComponent {
  readonly LogIn = LogIn;

  form = input.required<FormGroup>();
  title = input<string>();
  subtitle = input<string>();
  btnText = input<string>();
  linkText = input<string>();
  linkUrl = input<string>();
  linkActionTxt = input<string>();

  formSubmit = output<any>();

thisSubmit() {
  const form = this.form();

  if (!form) return;

  if (form.invalid) {
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    });
    return; 
  }

  this.formSubmit.emit(form.value);
}
}