import { Component } from '@angular/core';
import {Notification, NotificationService } from '../../service/notification/notification-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-notification',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-notification.component.html',
  styleUrl: './view-notification.component.css'
})
export class ViewNotificationComponent {
              notificationId=0; 
              notification?:Notification;
              notifications:any[]=[];
              notificationById?: Notification;
              
              notificationDetails:any;
              constructor(private notificationService:NotificationService){}
         
              ngOnInit(): void {
               this.notificationService.loadAllNotification().subscribe({
                 next:data=>this.notifications=data
               });
           
             }
             loadAllNotification() {
             this.notificationService.loadAllNotification().subscribe(data => {
               this.notifications = data;
             });
             console.log(this.notifications);
           }
           getNotificationById(): void {
            this.notificationService.getNotificationById(this.notificationId).subscribe(data => {
              this.notificationById = data;
            });
          }
          
       
       }

