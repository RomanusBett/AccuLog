import { Component } from '@angular/core';
import { FInputComponent } from '../../components/f-input/f-input.component';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-register-p',
  imports: [FInputComponent, AuthFormComponent, ReactiveFormsModule],
  templateUrl: './register-p.component.html',
  styles: ``
})
export class RegisterPComponent {
  errorMessage = "";

  constructor(private apiService:ApiService){}

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });


  handleSubmit(credentials:{name:string; email:string; password:string; confirmPassword:string}){
    if (this.profileForm.invalid){
      this.errorMessage = "Please fix the errors before submitting";
      return;
    }
    if (credentials.password !==credentials.confirmPassword){
      this.errorMessage = "Passwords do not match"
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
