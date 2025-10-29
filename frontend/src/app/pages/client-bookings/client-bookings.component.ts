import { NavigationHelperService } from './../../core/services/navigation-helper.service';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { UniFooterComponent } from '../../components/uni-footer/uni-footer.component';

@Component({
  selector: 'app-client-bookings',
  imports: [NavbarComponent, UniFooterComponent],
  templateUrl: './client-bookings.component.html',
  styles: ``
})
export class ClientBookingsComponent {
  constructor(){}
  
}
