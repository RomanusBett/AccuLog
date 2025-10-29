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
import { ClientBookingsComponent } from './app/pages/client-bookings/client-bookings.component';
import { ClientProfileComponent } from './app/pages/client-profile/client-profile.component';
import { AdminOverviewComponent } from './app/pages/admin-overview/admin-overview.component';
import { ServiceHistoryComponent } from './app/pages/service-history/service-history.component';
import { WashServicesComponent } from './app/pages/wash-services/wash-services.component';

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
    path: 'client/dashboard',
    title: 'Dashboard',
    component: ClientPComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'client/book-service',
    title: 'Book a Service',
    component: ClientBookingsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path:'admin/dashboard',
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
    path:'admin/daily-overview',
    title:'Daily Overview',
    component: AdminOverviewComponent,
    canActivate: [AuthGuardService, RoleGuard],
  },
  {
    path:'admin/wash-history',
    title:'Service History',
    component: ServiceHistoryComponent,
    canActivate: [AuthGuardService, RoleGuard],
  },
  {
    path:'admin/service-management',
    title:'Manage Services',
    component: WashServicesComponent,
    canActivate: [AuthGuardService, RoleGuard],
  },
  {
    path:'client/profile',
    title:'Profile',
    component: ClientProfileComponent,
    canActivate: [AuthGuardService],
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
