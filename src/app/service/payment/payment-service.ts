import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Payment{
  paymentId?:number;
  amount:number;
  paymentDate:string;
  paymentMethod:string;
  paymentStatus:string;
}
@Injectable({
  providedIn: 'root'
})
export class PaymentService {


  private baseUrl = 'http://localhost:5008/bookings/payment';
  
  constructor(private http: HttpClient) { }
  
  getAllPayments():Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.baseUrl}/all`);
  }
  addPayment(payment: Payment):Observable<Payment>{
    return this.http.post<Payment>(`${this.baseUrl}/add`,payment);

}
getPaymentById(id: number): Observable<Payment> {
  return this.http.get<Payment>(`${this.baseUrl}/${id}`);
}

}
