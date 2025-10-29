import { ServiceCardsComponent } from './../../components/service-cards/service-cards.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { UniFooterComponent } from '../../components/uni-footer/uni-footer.component';

@Component({
  selector: 'app-service-history',
  imports: [NavbarComponent, UniFooterComponent, ServiceCardsComponent],
  templateUrl: './service-history.component.html',
  styles: ``
})
export class ServiceHistoryComponent {
  queuedCars = [
    {
      id: 1,
      type: 'Premium Wash & Wax',
      dueAmount: 3500,
      carModel: "Honda Civic",
      plate: "KAA002",
      customer: "John Doe",
      status: "In-Progress",
      year: "2020",
      serviceDate: "29/09/2025"
    },
    {
      id: 2,
      type: 'Basic Wash',
      dueAmount: 1200,
      carModel: "Toyota Crown",
      plate: "KBA001X",
      customer: "James Bond",
      status: "In-Progress",
      year: "2020",
      serviceDate: "29/09/2025",
    },
    {
      id: 3,
      type: 'Basic Wash',
      dueAmount: 1500,
      carModel: "Mazda 3",
      plate: "KBA0021X",
      customer: "Jumia Bond",
      status: "completed",
      year: "2020",
      serviceDate: "29/09/2025",
    }
  ]

}
