import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { LoginPComponent } from './app/pages/login-p/login-p.component';
import { RegisterPComponent } from './app/pages/register-p/register-p.component';
import { ClientPComponent } from './app/pages/client-p/client-p.component';
import { AdminComponent } from './app/pages/admin/admin.component';
import { CreateServiceComponent } from './app/pages/create-service/create-service.component';
import { AuthGuardService, RoleGuard } from './app/core/guards/auth-guard.service';

export const routes: Routes = [
  {
    path: 'login',
    title: 'App Login Page',
    component: LoginPComponent,
  },
  {
    path: 'register',
    title: 'App Register Page',
    component: RegisterPComponent,

  },
  {
    path: 'home',
    title: 'App Home Page',
    component: ClientPComponent,
    canActivate: [AuthGuardService],
  },
  {
    path:'site-admin',
    title: 'Admin Page',
    component: AdminComponent,
    canActivate: [AuthGuardService, RoleGuard],
  },
  {
    path:'wash/create-services',
    title:'Create Service',
    component: CreateServiceComponent,
    canActivate: [AuthGuardService, RoleGuard],
  },
  {
    path: '**', redirectTo: 'login'
  }
]


bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideRouter(routes),
  ]
})
  .catch((err) => console.error(err));
