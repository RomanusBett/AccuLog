import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface NavItem{
  label:string,
  route:string,
}

export interface User {
  email:string,
  id:number,
  is_admin:boolean,
  name:string,
}

@Injectable({
  providedIn: 'root'
})
export class NavigationHelperService {
  private clientNav:NavItem[] = [
    {label:'Dashboard', route:'/client/dashboard'},
    {label:'Book a Service', route:'/client/book-service'},
    {label:'My profile', route:'/client/profile'},
  ]

  private adminNav:NavItem[] = [
    {label:'Dashboard', route:'/admin/dashboard'},
    {label:'Daily Overview', route:'/admin/daily-overview'},
    {label:'Service Management', route:'/admin/service-management'},
    {label:'History', route:'/admin/wash-history'}
  ]

  private navItemsSubject = new BehaviorSubject<NavItem[]>([]);
  navItems$ = this.navItemsSubject.asObservable();


  private urole: 'admin' | 'client' = 'client';

  setRole(role:'client' | 'admin'){
    this.urole = role;
    
    if(role==='client'){
      this.navItemsSubject.next(this.clientNav)
    }else{
      this.navItemsSubject.next(this.adminNav)
    }
  }

  getRole():'client' | 'admin'{
    console.log('Hi');
    
    return this.urole;
  }

  initRoleFromStorage(){    
    const storedUser = localStorage.getItem('user');
    let user: User | null = null;
    let role: 'client' | 'admin' = 'client';
    if (storedUser){
      user = JSON.parse(storedUser);
    }
    if(user?.is_admin===true){
      role = 'admin'
    }
    this.setRole(role)
  }
}
