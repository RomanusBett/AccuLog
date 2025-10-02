import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { InfoCardsComponent } from '../../components/info-cards/info-cards.component';
import { MiniNavComponent } from '../../components/mini-nav/mini-nav.component';
import { VehicleCardsComponent } from '../../components/vehicle-cards/vehicle-cards.component';
import { ServiceCardsComponent } from '../../components/service-cards/service-cards.component';
import { Car, DollarSign, Calendar } from 'lucide-angular';
import { ButtonComponent } from '../../components/button/button.component';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { UniFooterComponent } from '../../components/uni-footer/uni-footer.component';

@Component({
  selector: 'app-client-p',
  imports: [NavbarComponent, InfoCardsComponent, MiniNavComponent, VehicleCardsComponent, ServiceCardsComponent, ButtonComponent, FormInputComponent, UniFooterComponent],
  templateUrl: './client-p.component.html',
  styles: ``
})
export class ClientPComponent {
  infoCards = [
    {
      cardTitle: "My cars",
      cardFigures: 2,
      cardLabels:"Registered Vehicles",
      cardIcon: Car,
    },
    {
      cardTitle: "Total Services",
      cardFigures: 2,
      cardLabels:"All time Services",
      cardIcon: Calendar,
    },
    {
      cardTitle: "Total Spent",
      cardFigures: 1500,
      cardLabels:"Completed Services",
      cardIcon: DollarSign,
    }
  ]
  statesToBeToggled = ['My Cars', 'Service History'];

  carCards = [
    {
      id:1,
      carType: "Toyota Camry", 
      year: "2020",
      colour: "Silver",
      License: "KAA001",
      services: 1,
    },
    {
      id:2,
      carType: "Subaru Impreza", 
      year: "2000",
      colour: "Black",
      License: "KBA001",
      services: 2,
    },
    {
      id:3,
      carType: "Porshe Cayenne", 
      year: "2014",
      colour: "Green",
      License: "KCA001X",
      services: 1,
    }
  ]

  serviceCardsInfo = [
    {
      id: 1,
      type: "Basic Wash",
      carType: "Subaru Impreza", 
      year: "2000",
      License: "KBA001",
      serviceDate: " 27/09/2025",
      status: "In-Progress",
      price: 2000,
    },
    {
      id:2,
      type: "Premium Wash & Wax",
      carType: "Porshe Cayenne", 
      year: "2019",
      License: "KCA001X",
      serviceDate: " 27/09/2025",
      status: "completed",
      price: 4000,
    }
  ]

  addingCar = false;

  addCar(){
    this.addingCar = !this.addingCar;
  }

  state = 'My Cars';

  setState(e:string){
    this.state=e;
  }
}
