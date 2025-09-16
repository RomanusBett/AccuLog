import { Component } from '@angular/core';
import { FInputComponent } from '../../components/f-input/f-input.component';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';


@Component({
  selector: 'app-register-p',
  imports: [FInputComponent, AuthFormComponent],
  templateUrl: './register-p.component.html',
  styles: ``
})
export class RegisterPComponent {
}
