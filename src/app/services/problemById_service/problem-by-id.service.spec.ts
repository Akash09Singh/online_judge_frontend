import { TestBed } from '@angular/core/testing';

import { ProblemByIdService } from './problem-by-id.service';

describe('ProblemByIdService', () => {
  let service: ProblemByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
