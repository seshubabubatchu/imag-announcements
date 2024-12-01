import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsTermsComponent } from './logistics-terms.component';

describe('LogisticsTermsComponent', () => {
  let component: LogisticsTermsComponent;
  let fixture: ComponentFixture<LogisticsTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisticsTermsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogisticsTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
