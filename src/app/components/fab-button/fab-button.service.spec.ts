import { TestBed, inject } from '@angular/core/testing';

import { FabButtonService } from './fab-button.service';

describe('FabButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FabButtonService]
    });
  });

  it('should be created', inject([FabButtonService], (service: FabButtonService) => {
    expect(service).toBeTruthy();
  }));
});
