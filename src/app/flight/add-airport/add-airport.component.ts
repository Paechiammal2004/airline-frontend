import { Component, OnInit } from '@angular/core';
import { Airport, AirportService } from '../../service/airport/airport-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-airport',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './add-airport.component.html',
  styleUrl: './add-airport.component.css'
})

export class AddAirportComponent {
  airports:Airport[]=[];
  newAirport:Airport={code:'',name:'',country:'',city:''};
  airportById?:Airport;

  constructor(private airportService :AirportService){}
 

  addAirport(): void {
    this.airportService.addAirport(this.newAirport).subscribe(data => {
      this.airports.push(data);
      this.newAirport = { code:'',name:'',country:'',city:'' };
    });
  }    
  

}
