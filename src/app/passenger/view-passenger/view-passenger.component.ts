import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Passenger, PassengerService } from '../../service/passenger/passenger-service';

@Component({
  selector: 'app-view-passenger',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-passenger.component.html',
  styleUrl: './view-passenger.component.css'
})
export class ViewPassengerComponent implements OnInit{
    passengerId=0;
    passenger?:Passenger;
    passengers:any[]=[];
    passengerById?:Passenger;

  
    constructor(private passengerService:PassengerService){}
    
    ngOnInit(): void {
      this.passengerService.loadAllPassengers().subscribe(data => {
        this.passengers = data;
      });
      console.log(this.passengers);
    }
    
    getPassengerById(): void {
      this.passengerService.getPassengerById(this.passengerId).subscribe(data => {
        this.passengerById = data;
      });
    }
    // getFullDetails(){
    //   this.passengerService.getFullPassenger(this.passengerId).subscribe((data)=>{
    //     this.paymentDetails=data;
    //   })
    // }

}
