import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingComponent } from './view-booking.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('ViewBookingComponent', () => {
  let component: ViewBookingComponent;
  let fixture: ComponentFixture<ViewBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //imp:httpclient
      imports: [ViewBookingComponent,FormsModule,CommonModule,HttpClientModule],
     
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    //getid with bind element
    it('should be bind element bookingId',async()=>{
      const input=fixture.debugElement.query(By.css("input[name=bookingId")).nativeElement;
      input.value='1';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.bookingId).toBe(1);
    })
  //getid with click
  it('should call getBookingById() when "view Bookings" button is clicked', () => {
    spyOn(component, 'getBookingById');
    const button = fixture.debugElement.query(By.css('button'));
   // button.click();
    button.triggerEventHandler('click', null);
    expect(component.getBookingById).toHaveBeenCalled();
  });

});
