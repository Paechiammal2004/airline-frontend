import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight, FlightService } from '../../service/flight/flight-service';

@Component({
  selector: 'app-add-flight',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-flight.component.html',
  styleUrl: './add-flight.component.css'
})


export class AddFlightComponent {
  flights: Flight[] = [];
  newFlight: Flight = {flightNumber: '', departureTime: '', arrivalTime: '', seatCapacity: '', availableSeats: '', status: '', departureAirport: { airportId: 0 },arrivalAirport:  { airportId: 0 }};

  flightById?: Flight;
   
  constructor(private flightService:FlightService) {}
    
      ngOnInit(): void {
        
    
      }
     
       addFlight(): void {
        this.flightService.addFlight(this.newFlight).subscribe(data => {
          this.flights.push(data);
          this.newFlight = {flightNumber:'',departureTime:'',arrivalTime:'',seatCapacity:'',availableSeats:'',status:'',departureAirport:{airportId:0} ,arrivalAirport:  { airportId: 0 }};
        });
      
    
      }
    }
