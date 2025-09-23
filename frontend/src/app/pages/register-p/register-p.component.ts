import { Component } from '@angular/core';
import { FInputComponent } from '../../components/f-input/f-input.component';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';


export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password && confirmPassword && password !== confirmPassword ? { passwordMismatch: true } : null;
  }
}

@Component({
  selector: 'app-register-p',
  imports: [FInputComponent, AuthFormComponent, ReactiveFormsModule],
  templateUrl: './register-p.component.html',
  styles: ``
})
export class RegisterPComponent {
  errorMessage = "";

  profileForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
    confirmPassword: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  },
    { validators: passwordMatchValidator() }
  );

  constructor(private apiService:ApiService){}

  onSubmit(credentials:any){
    if (this.profileForm.invalid){
      this.errorMessage = "Please fix the errors before submitting";
      return;
    }
    const {confirmPassword, ...dataToSend} = credentials;

    this.apiService.register(dataToSend).subscribe({
      next: (response)=>{
        console.log("registration successful!", response)
      },
      error: (error)=>{
        console.error("registration failed", error);
        this.errorMessage = "Registration failed, please try again"
      }
    })
  }
}
