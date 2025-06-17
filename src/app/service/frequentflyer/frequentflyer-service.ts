import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Customer{
  customerId:number;
}
export interface Frequentflyer{
  flierId?:number;
  membershipNumber:string;
  status:string;
  pointsEarned:number;
  tierExpiryDate:string;
  customer:Customer;
} 
@Injectable({
  providedIn: 'root'
})
export class FrequentflyerService {

  private baseUrl = 'http://localhost:5004/customer/flyer';
  
    constructor(private http: HttpClient) { }
  
  
  addFrequentflyer(flyer: Frequentflyer): Observable<Frequentflyer> {
    return this.http.post<Frequentflyer>(`${this.baseUrl}/add`, flyer);
  }
  loadAllFlyers(): Observable<Frequentflyer[]> {
    return this.http.get<Frequentflyer[]>(`${this.baseUrl}/all`);
  }
  
  getFlyerById(id: number): Observable<Frequentflyer> {
    return this.http.get<Frequentflyer>(`${this.baseUrl}/${id}`);
  }
}
