import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Airport{
  airportId:number;
}


export interface Flight{
  flightId?:number;
  flightNumber:string;
  departureTime:string;
  arrivalTime:string;
  seatCapacity:string;
  availableSeats:string;
  status:string;
  departureAirport:Airport;
  arrivalAirport:Airport;
}
@Injectable({
  providedIn: 'root'
})

export class FlightService {

 private baseUrl = 'http://localhost:5003/flight';

  constructor(private http: HttpClient) { }


addFlight(booking: Flight): Observable<Flight> {
  return this.http.post<Flight>(`${this.baseUrl}/add`, booking);
}
loadAllFlights(): Observable<Flight[]> {
  return this.http.get<Flight[]>(`${this.baseUrl}/all`);
}

getFlightById(id: number): Observable<Flight> {
  return this.http.get<Flight>(`${this.baseUrl}/${id}`);
}
}