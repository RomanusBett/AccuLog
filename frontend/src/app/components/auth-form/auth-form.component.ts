import { Component, input } from '@angular/core';
import { LucideAngularModule, LogIn } from 'lucide-angular';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-auth-form',
  imports: [LucideAngularModule, ButtonComponent],
  templateUrl: './auth-form.component.html',
  styles: ``
})

export class AuthFormComponent {
  readonly LogIn = LogIn;

  title = input<string>();
  subtitle = input<string>();
  btnText = input<string>();
  linkText = input<string>(); 
  linkUrl = input<string>();
  linkActionTxt =input<string>();
}
