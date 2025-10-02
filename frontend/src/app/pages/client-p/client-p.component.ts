import { NavigationHelperService } from './../../core/services/navigation-helper.service';
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
import { FormGroup, FormControl, ɵInternalFormsSharedModule } from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';


interface User {
  email:string,
  id:number,
  is_admin:boolean,
  name:string,
}
@Component({
  selector: 'app-client-p',
  imports: [ReactiveFormsModule, NavbarComponent, InfoCardsComponent, MiniNavComponent, VehicleCardsComponent, ServiceCardsComponent, ButtonComponent, FormInputComponent, UniFooterComponent, ɵInternalFormsSharedModule],
  templateUrl: './client-p.component.html',
  styles: ``
})
export class ClientPComponent {
  

  constructor(private apiService:ApiService, private navigationService:NavigationHelperService){ }

  ngOnInit():void{
    this.fetchVehicles();
    const storedUser = localStorage.getItem('user');
    let user: User |null = null;
    let role: 'admin'| 'client' = 'client';
    if (storedUser){
      user = JSON.parse(storedUser);
    }
    if(user?.is_admin === true){
      role = 'admin'
    }else {
      role = 'client'
    }
    this.navigationService.setRole(role);
  }
  
  statesToBeToggled = ['My Cars', 'Service History'];

  carCards:any[] = [];

  infoCards = [
    {
      cardTitle: "My cars",
      cardFigures: 0,
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

  carForm = new FormGroup({
    model: new FormControl<string>('', {nonNullable:true, validators:[Validators.required]}),
    colour: new FormControl<string>('', {nonNullable:true, validators:[Validators.required]}),
    year: new FormControl<string>('', {nonNullable:false}),
    license: new FormControl<string>('', {nonNullable:true, validators:[Validators.required]})
  })
  errorMessage = "";
  successMessage = "";
  carFetchError="";

  fetchVehicles(){
    this.apiService.getVehicles().subscribe({
      next: (cars)=>{
        this.carCards = cars;
        this.infoCards[0].cardFigures = this.carCards.length;        
      },
      error: (err)=>{
        console.error(err);
        this.carFetchError='Unable to load your vehicles';
      }
    })
  }

  handleCarSubmit(){
    this.errorMessage='';
    this.successMessage='';
    console.log(this.carForm.value);
    
    if(!this.carForm.valid){
      this.errorMessage = 'Please fill in the required fields';
      return;
    }
    this.apiService.addVehicle(this.carForm.value as {
      model:string;
      colour:string;
      year: string;
      license: string;
    }).subscribe({
      next: (response)=>{
        this.successMessage = 'Car Added successfully.';
        this.carForm.reset();
      },
      error: (err)=>{
        console.error('API error', err);
        this.errorMessage = err?.error || 'Something went wrong.';
      }
    })
    
  }

  addingCar = false;


  addCarClicked(){
    this.addingCar = !this.addingCar;
  }

  state = 'My Cars';

  setState(e:string){
    this.state=e;
  }
}
