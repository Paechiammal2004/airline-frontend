import { Component, OnInit } from '@angular/core';
import { Booking, BookingService } from '../../service/booking/booking-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-booking',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './add-booking.component.html',

})
export class AddBooking {
  bookings: Booking[] = [];
   newBooking: Booking = { customerId: 0, flightId: 0, bookingTime: '',bookingDate:'',seatNumber:'',status:'',payment:{
    paymentId: 0,
    amount: 0,
    paymentMethod: '',
    paymentStatus: '',
    paymentDate: ''
  }};
 
 

  constructor(private bookingService: BookingService) {}

  
 
   addBooking(): void {
    this.bookingService.addBooking(this.newBooking).subscribe(data => {
      this.bookings.push(data);
      this.newBooking = { customerId: 0, flightId: 0, bookingTime: '',bookingDate:'',seatNumber:'',status:'',payment:{
        paymentId: 0,
        amount: 0,
        paymentMethod: '',
        paymentStatus: '',
        paymentDate: ''
      } };
    });
  }
 

}

