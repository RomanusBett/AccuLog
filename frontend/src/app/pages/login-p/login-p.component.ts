import { Component } from '@angular/core';
import { FInputComponent } from '../../components/f-input/f-input.component';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { ApiService } from '../../core/services/api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-login-p',
  imports: [FInputComponent, AuthFormComponent, ReactiveFormsModule],
  templateUrl: './login-p.component.html',
  styles: ``
})
export class LoginPComponent {
  errorMessage:string = '';

  constructor(private apiService:ApiService){}

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  
  handleSubmit(credentials:{email:string; password: string}){    
    this.apiService.login(credentials).subscribe({
      next: (response) => {
        window.location.href = '/home';
        console.log("login successful", response)
      },
      error: (error)=>{
        console.error('login failed', error);
        this.errorMessage = "invalid email or password";
      }
    })
  }
}
