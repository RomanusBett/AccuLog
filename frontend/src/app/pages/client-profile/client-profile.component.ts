import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { UniFooterComponent } from '../../components/uni-footer/uni-footer.component';

@Component({
  selector: 'app-client-profile',
  imports: [UniFooterComponent, NavbarComponent],
  templateUrl: './client-profile.component.html',
  styles: ``
})
export class ClientProfileComponent {
  
}
