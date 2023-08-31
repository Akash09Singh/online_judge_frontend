import { TestBed } from '@angular/core/testing';

import { SubmitProblemService } from './submit-problem.service';

describe('SubmitProblemService', () => {
  let service: SubmitProblemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitProblemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
