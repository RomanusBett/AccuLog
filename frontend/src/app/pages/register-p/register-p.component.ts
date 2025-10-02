import { Component } from '@angular/core';
import { FInputComponent } from '../../components/f-input/f-input.component';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ApiService } from '../../core/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-p',
  imports: [FInputComponent, AuthFormComponent, ReactiveFormsModule],
  templateUrl: './register-p.component.html',
  styles: ``
})
export class RegisterPComponent {
  errorMessage = "";

  constructor(private apiService: ApiService, private router: Router) { }

  profileForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
    confirmPassword: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] })
  });


  handleSubmit(credentials: { name: string; email: string; password: string; confirmPassword: string }) {
    this.errorMessage = "";

    if (!credentials.name || !credentials.email || !credentials.password || !credentials.confirmPassword) {
      this.errorMessage = "All fields are required.";
      return;
    }

    if (credentials.password.length < 6) {
      this.errorMessage = "Password must be at least 6 characters long.";
      return;
    }

    if (credentials.password !== credentials.confirmPassword) {
      this.errorMessage = "Passwords do not match.";
      return;
    }

    const { confirmPassword, ...dataToSend } = credentials;

    this.apiService.register(dataToSend).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.access_token);
        localStorage.setItem('user', JSON.stringify(response.user));
        if (response.user.is_admin) {
          this.router.navigate(['/site-admin']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      error: (error) => {
        console.error("registration failed", error);
        this.errorMessage = error?.error?.message || "Registration failed, please try again.";
      }
    });
  }
}