import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Notificationtemplate, NotificationtemplateService } from '../../service/notificationtemplate/notificationtemplate-service';

@Component({
  selector: 'app-view-notificationtemplate',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-notificationtemplate.component.html',
  styleUrl: './view-notificationtemplate.component.css'
})
export class ViewNotificationtemplateComponent implements OnInit{
    
         notifyTemplateId=0; 
         notifyTemplate?:Notificationtemplate;
         notifyTemplates:any[]=[];
         notifyTemplateById?: Notificationtemplate;
         
         notifyTemplateDetails:any;
         constructor(private notificationTemplateService:NotificationtemplateService){}
    
         ngOnInit(): void {
          this.notificationTemplateService.getAllNotifyTemplates().subscribe({
            next:data=>this.notifyTemplates=data
          });
      
        }
        getAllNotifyTemplates() {
        this.notificationTemplateService.getAllNotifyTemplates().subscribe(data => {
          this.notifyTemplates = data;
        });
        console.log(this.notifyTemplates);
      }
      getNotifyTemplateById(): void {
        this.notificationTemplateService.getNotifyTemplateById(this.notifyTemplateId).subscribe(data => {
          this.notifyTemplateById = data;
        });
      }

}
