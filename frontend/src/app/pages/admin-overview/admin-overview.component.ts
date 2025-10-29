import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { UniFooterComponent } from '../../components/uni-footer/uni-footer.component';
import { LucideAngularModule, TrendingUp, UsersRound } from 'lucide-angular';
import { SummaryCardsComponent } from '../../components/summary-cards/summary-cards.component';

@Component({
  selector: 'app-admin-overview',
  imports: [UniFooterComponent, NavbarComponent, SummaryCardsComponent, LucideAngularModule],
  templateUrl: './admin-overview.component.html',
  styles: ``
})
export class AdminOverviewComponent {
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

  year = new Date().getFullYear()
  month = new Date().getMonth()
  day = new Date().getDate()
}
