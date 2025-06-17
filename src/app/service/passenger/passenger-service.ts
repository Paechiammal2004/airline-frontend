import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Passenger{
  passengerId?:number;
  name:string;
  gender:string;
  age:number;
  passportNumber:string;
  nationality:string;
  booking:Booking;
}

export interface Booking{
  bookingId?:number;
}
@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  private baseUrl="http://localhost:5008/bookings/passenger";
;
  constructor(private http:HttpClient) { }

  addPassenger(passenger: Passenger):Observable<Passenger>{
    return this.http.post<Passenger>(`${this.baseUrl}/add`,passenger);
  }
  loadAllPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(`${this.baseUrl}/all`);
  }
  
  getPassengerById(id: number): Observable<Passenger> {
    return this.http.get<Passenger>(`${this.baseUrl}/${id}`);
  }
  getFullPassenger(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/details/${id}`);
  
  }
}
