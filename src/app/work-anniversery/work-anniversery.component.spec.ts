import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAnniverseryComponent } from './work-anniversery.component';

describe('WorkAnniverseryComponent', () => {
  let component: WorkAnniverseryComponent;
  let fixture: ComponentFixture<WorkAnniverseryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkAnniverseryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkAnniverseryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
