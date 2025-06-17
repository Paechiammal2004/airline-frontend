import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Booking, BookingService } from '../../service/booking/booking-service';

@Component({
  selector: 'app-view-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.css'
})
export class ViewBookingComponent implements OnInit {
     bookingId=0; 
     booking?:Booking;
     bookings:any[]=[];
     bookingById?: Booking;
     selectedBooking?: Booking;
     bookingDetails?:any;
   
     constructor(private bookingservice:BookingService){}

     ngOnInit(): void {
      this.loadAllBookings();
      //   next:data=>this.bookings=data
      // });
  
    }
  loadAllBookings() {
    this.bookingservice.loadAllBookings().subscribe(data => {
      this.bookings = data;
    });
    
  }
  getBookingById(): void {
    this.bookingservice.getBookingById(this.bookingId).subscribe(data => {
      this.bookingById = data;
    });
  }
  editBooking(booking: Booking) {
    this.selectedBooking = { ...booking }; // clone to avoid direct mutation
  }

  getFullDetails(){
    this.bookingservice.getFullBooking(this.bookingId).subscribe((data)=>{
      this.bookingDetails=data;
    })
  }
  updateBooking() {
    if (this.selectedBooking && this.selectedBooking.bookingId) {
      this.bookingservice.updateBooking(this.selectedBooking.bookingId, this.selectedBooking)
        .subscribe(() => {
          alert('Booking updated successfully!');
          this.loadAllBookings();
          this.selectedBooking = undefined;
        });
    }
  }

  deleteBooking(id: number) {
    if (confirm('Are you sure you want to delete this booking?')) {
      this.bookingservice.deleteBooking(id).subscribe(() => {
        alert('Booking deleted successfully!');
        this.loadAllBookings();
      });
    }
  }

}
