import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { InfoCardsComponent } from '../../components/info-cards/info-cards.component';
import { Car, Timer, DollarSign, TriangleAlert } from 'lucide-angular';
import { MiniNavComponent } from '../../components/mini-nav/mini-nav.component';

@Component({
  selector: 'app-admin',
  imports: [NavbarComponent, InfoCardsComponent, MiniNavComponent],
  templateUrl: './admin.component.html',
  styles: ``
})
export class AdminComponent {
  adminCards = [
    {
      cardTitle: "Total Revenue",
      cardFigures: 15,
      cardLabels: "Completed Service",
      cardIcon: DollarSign
    },
    {
      cardTitle: "Queue",
      cardFigures: 0,
      cardLabels: "Cars Waiting",
      cardIcon: Timer,
    },
    {
      cardTitle: "In progress",
      cardFigures: 1,
      cardLabels: "Total Cars",
      cardIcon: TriangleAlert,
    },
    {
      cardTitle: "total cars",
      cardFigures: 2,
      cardLabels: "Registered vehicles",
      cardIcon: Car,
    }
  ]
  statesToBeToggled = ['Service Queue', 'Daily Overview', 'All Services'];

  state = 'Service Queue';

  setState(e:string){
    this.state=e;
  }
} 
