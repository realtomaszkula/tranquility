import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabMiniButtonComponent } from './fab-mini-button.component';

describe('FabMiniButtonComponent', () => {
  let component: FabMiniButtonComponent;
  let fixture: ComponentFixture<FabMiniButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabMiniButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabMiniButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
