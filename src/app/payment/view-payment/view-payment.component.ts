import { Component, OnInit } from '@angular/core';

import { Payment, PaymentService } from '../../service/payment/payment-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-payment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-payment.component.html',
  styleUrl: './view-payment.component.css'
})
export class ViewPaymentComponent implements OnInit{
  paymentId=0;
  payment?:Payment;
  payments: any[]=[];
 // paymentById?: Payment;

  constructor(private paymentService:PaymentService){}
  ngOnInit(): void {
    this.paymentService.getAllPayments().subscribe({
      next:data=>this.payments=data
    });
  }
  getAllPayments():void {
    this.paymentService.getAllPayments().subscribe(data => {
      this.payments = data;
    });
    console.log(this.payments);
  }
  getPaymentById(): void {
    this.paymentService.getPaymentById(this.paymentId).subscribe(data => {
      this.payment= data;
    });
  }
}
