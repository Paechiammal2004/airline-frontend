import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFrequentflyerComponent } from './add-frequentflyer.component';

describe('AddFrequentflyerComponent', () => {
  let component: AddFrequentflyerComponent;
  let fixture: ComponentFixture<AddFrequentflyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFrequentflyerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFrequentflyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
