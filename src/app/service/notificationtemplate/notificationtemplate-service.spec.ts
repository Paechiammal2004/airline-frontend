import { TestBed } from '@angular/core/testing';
import { NotificationtemplateService } from './notificationtemplate-service';


describe('NotificationtemplateService', () => {
  let service: NotificationtemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationtemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
