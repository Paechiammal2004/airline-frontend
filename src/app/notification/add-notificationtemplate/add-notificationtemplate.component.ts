import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Notificationtemplate, NotificationtemplateService } from '../../service/notificationtemplate/notificationtemplate-service';

@Component({
  selector: 'app-add-notificationtemplate',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-notificationtemplate.component.html',
  styleUrl: './add-notificationtemplate.component.css'
})
export class AddNotificationtemplateComponent {
           notifytemplates:Notificationtemplate[]=[];
           newNotifyTemplate:Notificationtemplate={templateName:'',content:''};
           notifytemplateId?:Notificationtemplate;
      
           constructor(private notificationTemplateService :NotificationtemplateService){}
          
           
             addNotifyTemplate(): void {
              console.log("Inside Component")
               this.notificationTemplateService.addNotifyTemplate(this.newNotifyTemplate).subscribe(data => {
                 this.notifytemplates.push(data);
                 this.newNotifyTemplate = {templateName:'',content:''};
               });
             }  
}
