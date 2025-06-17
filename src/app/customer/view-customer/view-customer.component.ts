import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer, CustomerService } from '../../service/customer/customer-service';

@Component({
  selector: 'app-view-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent implements OnInit{
         customerId=0; 
         customer?:Customer;
         customers:any[]=[];
         customerById?: Customer;
         
         customerDetails:any;
         constructor(private customerService:CustomerService){}
    
         ngOnInit(): void {
          this.customerService.getAllCustomers().subscribe({
            next:data=>this.customers=data
          });
      
        }
        getAllCustomers() {
        this.customerService.getAllCustomers().subscribe(data => {
          this.customers = data;
        });
        console.log(this.customers);
      }
      getCustomerById(): void {
        this.customerService.getCustomerById(this.customerId).subscribe(data => {
          this.customerById = data;
        });
      }

}
