import { CreateButtonComponent } from './../../components/create-button/create-button.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { InfoCardsComponent } from '../../components/info-cards/info-cards.component';
import { Car, Clock, DollarSign, CircleAlert, LucideAngularModule, TrendingUp, UsersRound } from 'lucide-angular';
import { MiniNavComponent } from '../../components/mini-nav/mini-nav.component';
import { ProgressCardsComponent } from '../../components/progress-cards/progress-cards.component';
import { SummaryCardsComponent } from '../../components/summary-cards/summary-cards.component';
import { ServiceCardsComponent } from '../../components/service-cards/service-cards.component';
import { AppDropdownComponent } from '../../components/app-dropdown/app-dropdown.component';

@Component({
  selector: 'app-admin',
  imports: [NavbarComponent, AppDropdownComponent, InfoCardsComponent, MiniNavComponent, LucideAngularModule, ProgressCardsComponent, CreateButtonComponent, SummaryCardsComponent, ServiceCardsComponent],
  templateUrl: './admin.component.html',
  styles: ``
})
export class AdminComponent {
  readonly CircleAlert = CircleAlert;
  readonly TrendingUp = TrendingUp;
  readonly UsersRound = UsersRound;

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
      cardIcon: Clock,
    },
    {
      cardTitle: "In progress",
      cardFigures: 1,
      cardLabels: "Total Cars",
      cardIcon: CircleAlert,
    },
    {
      cardTitle: "total cars",
      cardFigures: 2,
      cardLabels: "Registered vehicles",
      cardIcon: Car,
    }
  ]

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

  overviews = [
    {
      title: 'Revenue Summary',
      icon: TrendingUp,
      stats: [
        { label: 'Completed Services', value: 1 },
        { label: 'Total Revenue', value: 5400 },
        { label: 'Average per Service', value: 3021 },
      ],
    },
    {
      title: 'Service Status',
      icon: UsersRound,
      stats: [
        { label: 'Pending', value: 0 },
        { label: 'In Progress', value: 1 },
        { label: 'Completed', value: 1 },
      ],
    },
  ];

  onVehicleChange(value: string) {
    console.log('Selected vehicle:', value);
  }

  onServiceChange(value: string) {
    console.log('Selected service:', value);
  }

  addingCar = false;

  addCarToQueue() {
    this.addingCar = true;
  }

  statesToBeToggled = ['Service Queue', 'Daily Overview', 'All Services'];

  state = 'Service Queue';

  year = new Date().getFullYear()
  month = new Date().getMonth()
  day = new Date().getDate()

  setState(e: string) {
    this.state = e;
  }
} 
