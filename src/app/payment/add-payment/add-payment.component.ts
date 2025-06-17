import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { Payment } from '../../service/payment/payment-service';
import { PaymentService } from '../../service/payment/payment-service';

@Component({
  selector: 'app-add-payment',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './add-payment.component.html',
  styleUrl: './add-payment.component.css'
})
export class AddPaymentComponent {
  
        payments: Payment[] = [];
         newPayment: Payment = { amount:0,paymentDate:'',paymentMethod:'',paymentStatus:'' };
         paymentById?: Payment;
      
       
         constructor(private paymentService: PaymentService) {}
 
 
  
  addPayment(): void {
    this.paymentService.addPayment(this.newPayment).subscribe(data => {
      this.payments.push(data);
      this.newPayment = { amount:0,paymentDate:'',paymentMethod:'',paymentStatus:'' };
    });
  }    
  
}
