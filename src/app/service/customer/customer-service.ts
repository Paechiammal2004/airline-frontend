import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Customer{
  customerId?:number;
	firstName:String;
  lastName:String;
  email:String;
	phone:String;
	dateOfBirth :String;
	loyaltyPoints :String;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    private baseUrl='http://localhost:5004/customer';
   
      constructor(private http: HttpClient) { }
   
      getAllCustomers():Observable<Customer[]> {
          return this.http.get<Customer[]>(`${this.baseUrl}/all`);
        }
      addCustomer(customer: Customer):Observable<Customer>{
          return this.http.post<Customer>(`${this.baseUrl}/add`,customer);
      
      }
      getCustomerById(id: number): Observable<Customer> {
        return this.http.get<Customer>(`${this.baseUrl}/${id}`);
      }
  
}
