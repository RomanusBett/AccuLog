import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }

  canActivate():boolean {
     const token = localStorage.getItem('token');
     if(!token){
      this.router.navigate(['/login']);
      return false;
     }
     return true;
  }
}

export class RoleGuard implements CanActivate{
  constructor(private router: Router){ }
  
  canActivate():boolean{
    const storedUser = localStorage.getItem('user');
    if(storedUser){
      const user = JSON.parse(storedUser);
      if(user.is_admin===true) return true;
    }
    this.router.navigate(['/home'])
    return false;
  }
}

