import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFrequentflyerComponent } from './view-frequentflyer.component';

describe('ViewFrequentflyerComponent', () => {
  let component: ViewFrequentflyerComponent;
  let fixture: ComponentFixture<ViewFrequentflyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFrequentflyerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewFrequentflyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
