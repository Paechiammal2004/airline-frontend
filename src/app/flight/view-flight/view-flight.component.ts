import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight, FlightService } from '../../service/flight/flight-service';

@Component({
  selector: 'app-view-flight',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-flight.component.html',
  styleUrl: './view-flight.component.css'
})
export class ViewFlightComponent  implements OnInit {
       flightId=0; 
       flight?:Flight;
       flights:any[]=[];
       flightById?: Flight;
       
       flightDetails:any;
       constructor(private flightService:FlightService){}
  
       ngOnInit(): void {
        this.flightService.loadAllFlights().subscribe({
          next:data=>this.flights=data
        });
    
      }
    loadAllFlights() {
      this.flightService.loadAllFlights().subscribe(data => {
        this.flights = data;
      });
      console.log(this.flights);
    }
    getFlightById(): void {
      this.flightService.getFlightById(this.flightId).subscribe(data => {
        this.flightById = data;
      });
    }
    // getFullDetails(){
    //   this.flightService.getFullBooking(this.flightId).subscribe((data)=>{
    //     this.bookingDetails=data;
    //   })
    // }

}
