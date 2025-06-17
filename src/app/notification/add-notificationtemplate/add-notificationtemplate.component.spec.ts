import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotificationtemplateComponent } from './add-notificationtemplate.component';

describe('AddNotificationtemplateComponent', () => {
  let component: AddNotificationtemplateComponent;
  let fixture: ComponentFixture<AddNotificationtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNotificationtemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNotificationtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
