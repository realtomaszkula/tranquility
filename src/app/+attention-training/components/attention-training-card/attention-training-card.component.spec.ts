import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionTrainingCardComponent } from './attention-training-card.component';

describe('AttentionTrainingCardComponent', () => {
  let component: AttentionTrainingCardComponent;
  let fixture: ComponentFixture<AttentionTrainingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttentionTrainingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttentionTrainingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
