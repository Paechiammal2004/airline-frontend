import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotificationtemplateComponent } from './view-notificationtemplate.component';

describe('ViewNotificationtemplateComponent', () => {
  let component: ViewNotificationtemplateComponent;
  let fixture: ComponentFixture<ViewNotificationtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewNotificationtemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewNotificationtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
