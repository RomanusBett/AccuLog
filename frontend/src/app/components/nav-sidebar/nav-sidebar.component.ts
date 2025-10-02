import { NavigationHelperService, NavItem } from './../../core/services/navigation-helper.service';
import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-nav-sidebar',
  imports: [LucideAngularModule],
  templateUrl: './nav-sidebar.component.html',
  styles: ``
})
export class NavSidebarComponent {
  readonly Menu = Menu;
  readonly X = X;

  navItems: NavItem[] = [];
  
  constructor(private navigationService: NavigationHelperService){ 
    this.navigationService.navItems$.subscribe(items=>this.navItems = items)
  }

  isOpen:boolean = false;

  @ViewChild('sidebar') sidebar!: ElementRef
  @ViewChild('toggleButton') toggleButton!: ElementRef

  toggleSideBar(){
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event:Event){
    const clickedInside = this.sidebar?.nativeElement.contains(event.target);
    const clickedToggleButton = this.toggleButton?.nativeElement.contains(event.target);

    if(!clickedInside && this.isOpen && !clickedToggleButton){
      this.isOpen = false
    }
  }
}
