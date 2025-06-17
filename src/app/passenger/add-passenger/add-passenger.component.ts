import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Passenger, PassengerService } from '../../service/passenger/passenger-service';
import { Booking, BookingService } from '../../service/booking/booking-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-passenger',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-passenger.component.html',
  
})
export class AddPassengerComponent implements OnInit {

  passenger:Passenger[]=[];
  newPassenger:Passenger={ name: '',gender: '',age: 0,passportNumber: '',nationality: '',booking:{bookingId:0}};
  passengerById?:Passenger;


  constructor(private passengerService:PassengerService,private bookingService:BookingService){}
  
  ngOnInit(): void {
  }
  addPassenger(): void {
    this.passengerService.addPassenger(this.newPassenger).subscribe(data => {
      this.passenger.push(data);
      this.newPassenger = { name: '', gender: '', age: 0,passportNumber: '',nationality: '',booking:{bookingId: 0} };
      });
    }
  }  
