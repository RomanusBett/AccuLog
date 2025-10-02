import { Component } from '@angular/core';
import { FInputComponent } from '../../components/f-input/f-input.component';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { ApiService } from '../../core/services/api.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-p',
  imports: [FInputComponent, AuthFormComponent, ReactiveFormsModule],
  templateUrl: './login-p.component.html',
  styles: ``
})
export class LoginPComponent {
  errorMessage:string = '';

  constructor(private apiService:ApiService, private router:Router){}

  profileForm = new FormGroup({
    email: new FormControl('', {nonNullable:true, validators:[Validators.required, Validators.email]}),
    password: new FormControl('', {nonNullable:true, validators:[Validators.required]})
  });
  
  handleSubmit(credentials:{email:string; password: string}){  
    this.errorMessage = "";
    if(!credentials.email || !credentials.password){
      this.errorMessage = "All fields are required";
      return;
    }  

    this.apiService.login(credentials).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.access_token);
        localStorage.setItem('user', JSON.stringify(response.user));
        if(response.user.is_admin){
          this.router.navigate(['/site-admin'])
        } else{
          this.router.navigate(['/client/dashboard'])
        }
      },
      error: (error)=>{
        console.error('login failed', error);
        this.errorMessage = error?.error || "invalid email or password";
      }
    })
  }
}
