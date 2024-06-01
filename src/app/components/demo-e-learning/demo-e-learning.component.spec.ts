import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoELearningComponent } from './demo-e-learning.component';

describe('DemoELearningComponent', () => {
  let component: DemoELearningComponent;
  let fixture: ComponentFixture<DemoELearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoELearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoELearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
