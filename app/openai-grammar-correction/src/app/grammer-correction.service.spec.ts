import { TestBed } from '@angular/core/testing';

import { GrammerCorrectionService } from './grammer-correction.service';

describe('GrammerCorrectionService', () => {
  let service: GrammerCorrectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrammerCorrectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
