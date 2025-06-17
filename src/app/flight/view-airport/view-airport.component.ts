import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Airport, AirportService } from '../../service/airport/airport-service';

@Component({
  selector: 'app-view-airport',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-airport.component.html',
  styleUrl: './view-airport.component.css'
})
export class ViewAirportComponent implements OnInit {
    airportId=0;
    airport?:Airport ;
    airports:any[]=[];
    airportById?:Airport;

    constructor(private airportService:AirportService){}
      ngOnInit(): void {
        this.airportService.getAllAirports().subscribe(
          data=>{
            this.airports=data;
          });
          console.log(this.airports);
      }
      
      
      getAirportById(): void {
        this.airportService.getAirportById(this.airportId).subscribe(data => {
          this.airport= data;
        });
      }
}
