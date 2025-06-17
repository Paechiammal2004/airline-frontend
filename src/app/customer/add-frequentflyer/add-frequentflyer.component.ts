import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Frequentflyer, FrequentflyerService } from '../../service/frequentflyer/frequentflyer-service';

@Component({
  selector: 'app-add-frequentflyer',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-frequentflyer.component.html',
  styleUrl: './add-frequentflyer.component.css'
})
export class AddFrequentflyerComponent {
       flyers: Frequentflyer[] = [];
       newFrequentflyer: Frequentflyer = {membershipNumber: '', status: '', pointsEarned: 0, tierExpiryDate: '',customer:  { customerId: 0 }};
       flyerById?: Frequentflyer;
       constructor(private frequentflyerService:FrequentflyerService) {}
         
          
          
       addFrequentflyer(): void {
             this.frequentflyerService.addFrequentflyer(this.newFrequentflyer).subscribe(data => {
               this.flyers.push(data);
               this.newFrequentflyer = { membershipNumber: '', status: '', pointsEarned: 0, tierExpiryDate: '',
                customer:  { customerId: 0 }};
           
         
           });
          }
        }
          
