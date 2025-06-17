import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Booking, BookingService } from '../service/booking/booking-service';

@Component({
  selector: 'app-update-booking',
  standalone: true,
  imports: [],
  templateUrl: './update-booking.component.html',
  styleUrl: './update-booking.component.css'
})
export class UpdateBookingComponent implements OnInit{
 
  constructor(private bookingService: BookingService) {}
  ngOnInit(): void {
    this.bookingService.loadAllBookings().subscribe({
      next:data=>this.bookings=data
    });
    
  }
  bookings:any[]=[];
  updateBookingData: Booking = { bookingId: 0, customerId: 0, flightId: 0, bookingTime: '' ,bookingDate:'',
    seatNumber:'',status:'',payment:{
      paymentId: 0,
      amount: 0,
      paymentMethod: '',
      paymentStatus: '',
      paymentDate: ''
    }};
    loadAllBookings() {
      this.bookingService.loadAllBookings().subscribe(data => {
        this.bookings = data;
      });
      console.log(this.bookings);
    }
 
  updateBooking(): void {
    if (this.updateBookingData.bookingId != null) {
      this.bookingService.updateBooking(this.updateBookingData.bookingId, this.updateBookingData)
        .subscribe(data => {
          this.loadAllBookings(); 
          this.updateBookingData = {
            bookingId: 0,
            flightId:0,
            customerId:0,
            bookingTime:'',
            bookingDate: '',
            seatNumber: '',
            status: '',
            
            payment:{
              paymentId: 0,
              amount: 0,
              paymentMethod: '',
              paymentStatus: '',
              paymentDate: ''
            }

          };
        });
    }
  }
  populateUpdateForm(booking: Booking): void {
    this.updateBookingData = { 
      
             bookingId: booking.bookingId,
             flightId:booking.flightId,
             customerId:booking.customerId,
             bookingTime:booking.bookingTime,
             bookingDate: booking.bookingDate,
             seatNumber: booking.seatNumber,
             status: booking.status,
             payment:booking.payment

     }; 
  }

deleteBooking(id: number): void {
  this.bookingService.deleteBooking(id).subscribe(() => {
    this.bookings = this.bookings.filter(p => p.id !== id);
  });
}


}
