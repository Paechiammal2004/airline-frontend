import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBooking } from './add-booking.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('AddBookingComponentComponent', () => {
  let component: AddBooking;
  let fixture: ComponentFixture<AddBooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule,CommonModule,HttpClientModule,AddBooking],
      declarations:[]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBooking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should render heading "Add Booking"', () => {
  //   const heading = fixture.nativeElement.querySelector('h2');
  //   expect(heading.textContent).toContain('Add Booking');
  // });
  it('should bind flightId input to newBooking.flightId', async () => {
    const input = fixture.debugElement.query(By.css('input[name="flightId"]')).nativeElement;
    input.value = '111';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.newBooking.flightId).toBe(111);
  });
  // it('should call onSubmit() when form is submitted', () => {
  //   spyOn(component, 'addBooking');
  //   const form = fixture.debugElement.query(By.css('form'));
    
  //   form.triggerEventHandler('ngSubmit', null);
  //   expect(component.addBooking).toHaveBeenCalled();
  // });
  
  it('should bind rednering the heading',()=>{
    const heading=fixture.nativeElement.querySelector('h2');
    expect(heading.textContent).toContain('Add Booking');
  });
  it('should bind the input value to newbooking.customerId',async ()=> {
    const input=fixture.debugElement.query(By.css("input[name=customerId")).nativeElement;
    input.value='1';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.newBooking.customerId).toBe(1);
    
  });
  it('should call getBookingById() when form is submitted',()=>{
    spyOn(component,'addBooking');
    const form=fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit',null);
    expect(component.addBooking).toHaveBeenCalled();

  })

});
