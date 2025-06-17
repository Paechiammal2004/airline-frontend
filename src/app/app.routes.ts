import { Routes } from '@angular/router';
import { AddBooking } from './booking/add-booking/add-booking.component';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
import { ViewBookingComponent } from './booking/view-booking/view-booking.component';
import { Component } from '@angular/core';
import { ViewPaymentComponent } from './payment/view-payment/view-payment.component';
import { AddPassengerComponent } from './passenger/add-passenger/add-passenger.component';
import { ViewPassengerComponent } from './passenger/view-passenger/view-passenger.component';
import { HomeComponent } from './home/home.component';
import { AddAirportComponent } from './flight/add-airport/add-airport.component';
import { ViewAirportComponent } from './flight/view-airport/view-airport.component';
import { AddFlightComponent } from './flight/add-flight/add-flight.component';
import { ViewFlightComponent } from './flight/view-flight/view-flight.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';
import { AddFrequentflyerComponent } from './customer/add-frequentflyer/add-frequentflyer.component';
import { ViewFrequentflyerComponent } from './customer/view-frequentflyer/view-frequentflyer.component';
import { AddNotificationtemplateComponent } from './notification/add-notificationtemplate/add-notificationtemplate.component';
import { ViewNotificationtemplateComponent } from './notification/view-notificationtemplate/view-notificationtemplate.component';
import { AddNotificationComponent } from './notification/add-notification/add-notification.component';
import { ViewNotificationComponent } from './notification/view-notification/view-notification.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'add-booking', component:AddBooking},
    {path:'view-booking',component:ViewBookingComponent},
    {path:'add-payment',component:AddPaymentComponent},
    {path:'view-payment',component:ViewPaymentComponent},
    {path:'add-passenger',component:AddPassengerComponent},
    {path:'view-passenger',component:ViewPassengerComponent},
    {path:'add-airport',component:AddAirportComponent},
    {path:'view-airport',component:ViewAirportComponent},
    {path:'add-flight',component:AddFlightComponent},
    {path:'view-flight',component:ViewFlightComponent},
    {path:'add-customer',component:AddCustomerComponent},
    {path:'view-customer',component:ViewCustomerComponent},
    {path:'add-frequentflyer',component:AddFrequentflyerComponent},
    {path:'view-frequentflyer',component:ViewFrequentflyerComponent},
    {path:'add-notificationtemplate',component:AddNotificationtemplateComponent},
    {path:'view-notificationtemplate',component:ViewNotificationtemplateComponent},
    {path:'add-notification',component:AddNotificationComponent},
    {path:'view-notification',component:ViewNotificationComponent}
        
    

    
    
    
  
];
