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
    console.log("hello");

    const form = this.form();

    if (form && form.valid) {
      this.formSubmit.emit(form.value);
    }
  }
}