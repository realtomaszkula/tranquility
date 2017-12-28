import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAttentionTrainingComponent } from './new-attention-training.component';

describe('NewAttentionTrainingComponent', () => {
  let component: NewAttentionTrainingComponent;
  let fixture: ComponentFixture<NewAttentionTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAttentionTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAttentionTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
