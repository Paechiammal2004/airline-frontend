import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Notificationtemplate{
  templateId?:0;
  templateName:string;
  content:string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationtemplateService {
       private baseUrl='http://localhost:5005/notification/template';
          
             constructor(private http: HttpClient) { }
          
             getAllNotifyTemplates():Observable<Notificationtemplate[]> {
              
                 return this.http.get<Notificationtemplate[]>(`${this.baseUrl}/all`);
               }
               addNotifyTemplate(notify: Notificationtemplate):Observable<Notificationtemplate>{
                console.log("Inside Service")
                 return this.http.post<Notificationtemplate>(`${this.baseUrl}/add`,notify);
             
             }
             getNotifyTemplateById(id: number): Observable<Notificationtemplate> {
               return this.http.get<Notificationtemplate>(`${this.baseUrl}/${id}`);
             }
         
       }
       
