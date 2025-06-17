import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer, CustomerService } from '../../service/customer/customer-service';


@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
     customers:Customer[]=[];
     newCustomer:Customer={firstName:'',lastName:'',email:'',phone:'',dateOfBirth:'',loyaltyPoints:''};
     

     constructor(private customerService :CustomerService){}
       
     
       addCustomer(): void {
         this.customerService.addCustomer(this.newCustomer).subscribe(data => {
           this.customers.push(data);
           this.newCustomer = {firstName:'',lastName:'',email:'',phone:'',dateOfBirth:'',loyaltyPoints:'' };
         });
       }    
}
