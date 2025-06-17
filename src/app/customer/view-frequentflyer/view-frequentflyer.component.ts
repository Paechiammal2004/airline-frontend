import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Frequentflyer, FrequentflyerService } from '../../service/frequentflyer/frequentflyer-service';

@Component({
  selector: 'app-view-frequentflyer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-frequentflyer.component.html',
  styleUrl: './view-frequentflyer.component.css'
})
export class ViewFrequentflyerComponent {
            frequentflyerId=0; 
            frequentflyer?:Frequentflyer;
            frequentflyers:any[]=[];
            frequentflyerById?: Frequentflyer;
            
            frequentflyerDetails:any;
            constructor(private frequentflyerService:FrequentflyerService){}
       
            ngOnInit(): void {
             this.loadAllFlyers();
         
           }
           loadAllFlyers() {
           this.frequentflyerService.loadAllFlyers().subscribe(data => {
             this.frequentflyers = data;
           });
           console.log(this.frequentflyers);
         }
         getFlyerById(): void {
           this.frequentflyerService.getFlyerById(this.frequentflyerId).subscribe(data => {
             this.frequentflyerById = data;
           });
         }
}
