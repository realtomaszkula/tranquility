import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNumberOfDaysFilterComponent } from './last-number-of-days-filter.component';

describe('LastNumberOfDaysFilterComponent', () => {
  let component: LastNumberOfDaysFilterComponent;
  let fixture: ComponentFixture<LastNumberOfDaysFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastNumberOfDaysFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNumberOfDaysFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
