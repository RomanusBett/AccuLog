import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface NavItem{
  label:string,
  route:string,
}

@Injectable({
  providedIn: 'root'
})
export class NavigationHelperService {
  private clientNav:NavItem[] = [
    {label:'Dashboard', route:'/client/dashboard'},
    {label:'Book a Service', route:'/client/book-service'},
    {label:'Profile', route:'/client/profile'},
    {label:'My cars', route:'/client/my-cars'}
  ]

  private adminNav:NavItem[] = [
    {label:'Dashboard', route:'/admin/dashboard'},
    {label:'Daily Overview', route:'/admin/daily-overview'},
    {label:'Service Management', route:'/admin/service-management'},
    {label:'History', route:'/admin/history'}
  ]

  private navItemsSubject = new BehaviorSubject<NavItem[]>([]);
  navItems$ = this.navItemsSubject.asObservable();

  setRole(role:'client' | 'admin'){
    if(role==='client'){
      this.navItemsSubject.next(this.clientNav)
    }else{
      this.navItemsSubject.next(this.adminNav)
    }
  }
  
}
