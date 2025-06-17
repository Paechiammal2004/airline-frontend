import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Airport{
  airportId?:0;
  code:string;
  name:string;
  country:string;
  city:string;
}
@Injectable({
  providedIn: 'root'
})
export class AirportService {
 
  private baseUrl='http://localhost:5003/flight/airport';

   constructor(private http: HttpClient) { }

   getAllAirports():Observable<Airport[]> {
       return this.http.get<Airport[]>(`${this.baseUrl}/all`);
     }
     addAirport(airport: Airport):Observable<Airport>{
       return this.http.post<Airport>(`${this.baseUrl}/add`,airport);
   
   }
   getAirportById(id: number): Observable<Airport> {
     return this.http.get<Airport>(`${this.baseUrl}/${id}`);
   }
}
