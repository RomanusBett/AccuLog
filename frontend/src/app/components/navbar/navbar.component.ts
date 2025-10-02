import { ApiService } from './../../core/services/api.service';
import { LucideAngularModule, LogIn } from 'lucide-angular';
import { Component } from '@angular/core';
import { NavSidebarComponent } from '../nav-sidebar/nav-sidebar.component';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, NavSidebarComponent],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  readonly LogIn = LogIn;

  constructor(private apiService:ApiService){ }

  user: any = null;

  ngOnInit(){
    const storedUser = localStorage.getItem('user');
    if(storedUser){
      this.user = JSON.parse(storedUser);
    }
  }

  logoutUser(){
    this.apiService.logoutUser().subscribe({
      next: response=>{
        console.log(response);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
      },
      error: err=>{
        console.error(err)
      }
    })
  }
}
