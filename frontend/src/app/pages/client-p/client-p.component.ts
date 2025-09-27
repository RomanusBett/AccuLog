import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { InfoCardsComponent } from '../../components/info-cards/info-cards.component';
import { MiniNavComponent } from '../../components/mini-nav/mini-nav.component';


@Component({
  selector: 'app-client-p',
  imports: [NavbarComponent, InfoCardsComponent, MiniNavComponent],
  templateUrl: './client-p.component.html',
  styles: ``
})
export class ClientPComponent {
  infoCards = [
    {
      cardTitle: "My cars",
      cardFigures: 2,
      cardLabels:"Registered Vehicles" 
    },
    {
      cardTitle: "Total Services",
      cardFigures: 2,
      cardLabels:"All time Services" 
    },
    {
      cardTitle: "Total Spent",
      cardFigures: 1500,
      cardLabels:"Completed Services" 
    }
  ]
  statesToBeToggled = ['My Cars', 'Service History'];

  state = 'My Cars';

  setState(e:string){
    this.state=e;
  }
}
