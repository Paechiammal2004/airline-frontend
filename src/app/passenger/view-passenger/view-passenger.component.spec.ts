import { ComponentFixture, flushMicrotasks, TestBed } from '@angular/core/testing';

import { ViewPassengerComponent } from './view-passenger.component';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('ViewPassengerComponent', () => {
  let component: ViewPassengerComponent;
  let fixture: ComponentFixture<ViewPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPassengerComponent,HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //binding element passengerId
  it('should binding element booking.passengerId',async()=>{
    const input=fixture.debugElement.query(By.css("input[name=passengerId]")).nativeElement;
    input.value='1';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.passengerId).toBe(1);


  });
  //clock submit
  it('sholud submit bt getPassengerById',()=>{
    spyOn(component,'getPassengerById');
    const button=fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click',null);
    expect(component.getPassengerById).toHaveBeenCalled();
    
  })
});
