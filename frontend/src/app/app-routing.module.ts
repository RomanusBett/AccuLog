import { Routes } from '@angular/router';
import { LoginPComponent } from './pages/login-p/login-p.component';
import { RegisterPComponent } from './pages/register-p/register-p.component';

export const routes: Routes = [
  {
    path: '/login',
    title: 'App Login Page',
    component: LoginPComponent,
  },
  {
    path: '/register',
    title: 'App Register Page',
    component: RegisterPComponent,
  },

]
