import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionTrainingComponent } from './attention-training.component';

describe('AttentionTrainingComponent', () => {
  let component: AttentionTrainingComponent;
  let fixture: ComponentFixture<AttentionTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttentionTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttentionTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
