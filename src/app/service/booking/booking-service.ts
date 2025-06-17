import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface Payment{
  paymentId?:number;
  amount:number;
  paymentMethod:string;
  paymentStatus:string;
  paymentDate:string;
}
export interface Booking {
  bookingId?: number;
  customerId: number;
  flightId: number;
  bookingTime: string;
  bookingDate:string;
  seatNumber: string;
  status: string;
  payment:Payment;
}
@Injectable({
  providedIn: 'root'
})
export class BookingService {
 
  private baseUrl = 'http://localhost:5008/bookings';

  constructor(private http: HttpClient) { }


addBooking(booking: Booking): Observable<Booking> {
  return this.http.post<Booking>(`${this.baseUrl}/add`, booking);
}
loadAllBookings(): Observable<Booking[]> {
  return this.http.get<Booking[]>(`${this.baseUrl}/all`);
}

getBookingById(id: number): Observable<Booking> {
  return this.http.get<Booking>(`${this.baseUrl}/${id}`);
}
getFullBooking(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseUrl}/details/${id}`);

}
updateBooking(id: number, booking: Booking): Observable<Booking> {
  return this.http.put<Booking>(`${this.baseUrl}/update/${id}`, booking);
}

// deleteBooking(id: number): Observable<void> {
//   return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
// }
 
deleteBooking(id: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}
  
