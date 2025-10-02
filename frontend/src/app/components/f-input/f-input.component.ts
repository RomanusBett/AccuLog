import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, Eye, EyeClosed } from 'lucide-angular';

@Component({
  selector: 'app-f-input',
  standalone: true,
  imports: [ReactiveFormsModule, LucideAngularModule],  
  templateUrl: './f-input.component.html',
})
export class FInputComponent {
  readonly Eye = Eye;
  readonly EyeClosed = EyeClosed;

  label = input<string>();
  placeholder = input<string>();
  type = input<string>();
  fCName = input<FormControl<any>>();

  showPassword = false;

  togglePassword(){
    this.showPassword = !this.showPassword;
  }
}
