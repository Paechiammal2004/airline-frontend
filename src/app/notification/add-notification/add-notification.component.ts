import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Notification, NotificationService } from '../../service/notification/notification-service';


@Component({
  selector: 'app-add-notification',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-notification.component.html',
  styleUrl: './add-notification.component.css'
})
export class AddNotificationComponent {
           
    notifications: Notification[] = [];
    newNotification: Notification = {message: '', type: '', sentStatus: '', sentDate: '',customerId:0};
  
    notificationById?: Notification;
     
    constructor(private notificationService:NotificationService) {}
      
           addNotification(): void {
          this.notificationService.addNotification(this.newNotification).subscribe(data => {
            this.notifications.push(data);
            this.newNotification = {message: '', type: '', sentStatus: '', sentDate: '',customerId:0};
        
           });
        }
      

      }