import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Notification{
  notificationId?:number;
  message:string;
  type:string;
  sentStatus:string;
  sentDate:string;
  customerId:number;
}
@Injectable({
  providedIn: 'root'
})

export class NotificationService {
     
      private baseUrl = 'http://localhost:5005/notification';
     
       constructor(private http: HttpClient) { }
     
     
    addNotification(notification: Notification): Observable<Notification> {
       return this.http.post<Notification>(`${this.baseUrl}/add`, notification);
     }
     loadAllNotification(): Observable<Notification[]> {
       return this.http.get<Notification[]>(`${this.baseUrl}/all`);
     }
     
     getNotificationById(id: number): Observable<Notification> {
       return this.http.get<Notification>(`${this.baseUrl}/${id}`);
     }
}
