import { LucideAngularModule, LogIn } from 'lucide-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  readonly LogIn = LogIn;

  user: any = null;

  ngOnInit(){
    const storedUser = localStorage.getItem('user');
    if(storedUser){
      this.user = JSON.parse(storedUser);
    }
  }

  logoutUser(){
    window.location.href = '/login';
  }
}
